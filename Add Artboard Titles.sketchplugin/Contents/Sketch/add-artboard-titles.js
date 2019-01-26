/* global MSLayerArray, MSLayerGroup, NSMakeRect, MSTextLayer */

const retrieveSettings = require('./settings.js').retrieveSettings

const GROUP_NAME = '@ArtboardTitles'

function createArtboardTitles (artboardLayers, fields) {
  const textLayers = []
  const length = artboardLayers.length
  let i = -1
  while (++i < length) {
    const artboardLayer = artboardLayers[i]
    const artboardName = artboardLayer.name()
    const textLayer = MSTextLayer.alloc().initWithFrame(NSMakeRect(0, 0, 0, 0))
    textLayer.setFontPostscriptName(fields.font)
    textLayer.setFontSize(fields.fontSize)
    textLayer.setLineHeight(fields.lineHeight)
    textLayer.setStringValue(artboardName)
    textLayer.setName(artboardName)
    textLayer.setVerticalAlignment('bottom')
    textLayer.frame().setWidth(artboardLayer.frame().width())
    textLayer.setTextBehaviour(1)
    textLayer.adjustFrameToFit()
    textLayer.frame().setX(artboardLayer.frame().x())
    textLayer
      .frame()
      .setY(
        artboardLayer.frame().y() -
          textLayer.frame().height() -
          fields.verticalOffset
      )
    textLayers.push(textLayer)
  }
  const layerArray = MSLayerArray.arrayWithLayers(textLayers)
  const group = MSLayerGroup.groupWithLayers(layerArray)
  group.setName(GROUP_NAME)
  group.setIsLocked(true)
  return group
}

function filterOutNonArtboards (layers) {
  const result = []
  const length = layers.length
  let i = -1
  while (++i < length) {
    const layer = layers[i]
    if (layer.className() == 'MSArtboardGroup') {
      // eslint-disable-line eqeqeq
      result.push(layer)
    }
  }
  return result
}

function deleteGroups (page) {
  const layersToDelete = []
  const layers = page.layers()
  const layersLength = layers.length
  let i = -1
  while (++i < layersLength) {
    const layer = layers[i]
    if (layer.name() == GROUP_NAME) {
      // eslint-disable-line eqeqeq
      layersToDelete.push(layer)
    }
  }
  const layersToDeleteLength = layersToDelete.length
  let j = -1
  while (++j < layersToDeleteLength) {
    layersToDelete[j].removeFromParent()
  }
}

function onRun (context) {
  const document = context.document
  const page = document.currentPage()
  deleteGroups(page)
  const selectedLayers = context.selection
  const artboardLayers =
    selectedLayers.length > 0
      ? filterOutNonArtboards(selectedLayers)
      : page.artboards()
  const settings = retrieveSettings()
  const artboardTitlesGroup = createArtboardTitles(
    artboardLayers,
    settings.fields
  )
  page.addLayers([artboardTitlesGroup])
  document.showMessage('Added Artboard titles')
}

module.exports = onRun
