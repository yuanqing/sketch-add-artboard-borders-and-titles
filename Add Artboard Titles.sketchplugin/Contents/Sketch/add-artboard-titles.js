/* eslint-disable eqeqeq */

const deleteLayers = require('./layer/delete-layers')
const filterOutNonArtboards = require('./layer/filter-out-non-artboards')
const retrieveSettings = require('./settings.js').retrieveSettings

const GROUP_NAME = '@ArtboardTitles'

function createArtboardTitles (artboardLayers, values) {
  const textLayers = []
  const length = artboardLayers.length
  let i = -1
  while (++i < length) {
    const artboardLayer = artboardLayers[i]
    const artboardName = artboardLayer.name()
    const textLayer = MSTextLayer.alloc().initWithFrame(NSMakeRect(0, 0, 0, 0))
    textLayer.setFontPostscriptName(values.font)
    textLayer.setFontSize(values.fontSize)
    textLayer.setLineHeight(values.lineHeight)
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
          values.verticalOffset
      )
    textLayers.push(textLayer)
  }
  const layerArray = MSLayerArray.arrayWithLayers(textLayers)
  const group = MSLayerGroup.groupWithLayers(layerArray)
  group.setName(GROUP_NAME)
  group.setIsLocked(true)
  return group
}

function onRun (context) {
  const document = context.document
  const page = document.currentPage()
  deleteLayers(GROUP_NAME, page.layers())
  const selectedLayers = context.selection
  const artboardLayers =
    selectedLayers.length > 0
      ? filterOutNonArtboards(selectedLayers)
      : page.artboards()
  const settings = retrieveSettings()
  const artboardTitlesGroup = createArtboardTitles(
    artboardLayers,
    settings.values
  )
  page.addLayers([artboardTitlesGroup])
  document.showMessage('Added Artboard titles')
}

module.exports = onRun
