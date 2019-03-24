import implementationFactory from '../factory/implementation-factory'

function createArtboardBorders ({ artboards, settings, groupName }) {
  const newLayers = []
  artboards.forEach(function (artboard) {
    const rectangleShape = MSRectangleShape.alloc().initWithFrame(
      artboard.sketchObject.rect()
    )
    rectangleShape.setName(artboard.name)
    rectangleShape.setIsLocked(true)
    const style = MSStyle.alloc().init()
    const border = style.addStylePartOfType(1)
    border.color = MSImmutableColor.colorWithSVGString(
      settings['addArtboardBorders.borderColor']
    )
    border.thickness = settings['addArtboardBorders.borderWidth']
    border.position = 2
    rectangleShape.setStyle(style)
    newLayers.push(rectangleShape)
  })
  const layerArray = MSLayerArray.arrayWithLayers(newLayers)
  const layerGroup = MSLayerGroup.groupWithLayers(layerArray)
  layerGroup.setName(groupName)
  layerGroup.setIsLocked(true)
  return layerGroup
}

export default implementationFactory({
  mapArtboards: createArtboardBorders,
  groupName: '@ArtboardBorders',
  successMessage: 'Added artboard borders'
})
