const factory = require('../factory')
const options = require('./options')

function createArtboardBorders (artboardLayers, values, groupName) {
  const newLayers = []
  const length = artboardLayers.length
  let i = -1
  while (++i < length) {
    const artboardLayer = artboardLayers[i]
    const rectangleShape = MSRectangleShape.alloc().initWithFrame(
      artboardLayer.rect()
    )
    rectangleShape.setName(artboardLayer.name())
    const style = MSStyle.alloc().init()
    const border = style.addStylePartOfType(1)
    border.color = MSImmutableColor.colorWithSVGString(values.borderColor)
    border.thickness = values.borderWidth
    border.position = 2
    rectangleShape.setStyle(style)
    newLayers.push(rectangleShape)
  }
  const layerArray = MSLayerArray.arrayWithLayers(newLayers)
  const layerGroup = MSLayerGroup.groupWithLayers(layerArray)
  layerGroup.setName(groupName)
  layerGroup.setIsLocked(true)
  return layerGroup
}

function onRun (context) {
  return factory(context, createArtboardBorders, options)
}

module.exports = onRun
