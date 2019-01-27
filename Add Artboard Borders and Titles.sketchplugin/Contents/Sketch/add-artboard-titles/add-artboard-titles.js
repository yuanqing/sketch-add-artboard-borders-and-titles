const factory = require('../factory')
const options = require('./options')

function createArtboardTitles (artboardLayers, values, groupName) {
  const newLayers = []
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
    newLayers.push(textLayer)
  }
  const layerArray = MSLayerArray.arrayWithLayers(newLayers)
  const layerGroup = MSLayerGroup.groupWithLayers(layerArray)
  layerGroup.setName(groupName)
  layerGroup.setIsLocked(true)
  return layerGroup
}

function onRun (context) {
  return factory(context, createArtboardTitles, options)
}

module.exports = onRun
