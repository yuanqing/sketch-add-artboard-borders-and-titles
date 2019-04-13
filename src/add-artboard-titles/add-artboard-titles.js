import implementationFactory from '../factory/implementation-factory'

function createArtboardTitles ({ artboards, settings, groupName }) {
  const newLayers = []
  artboards.forEach(function (artboard) {
    const artboardName = artboard.name
    const artboardFrame = artboard.frame
    const textLayer = MSTextLayer.alloc().initWithFrame(NSMakeRect(0, 0, 0, 0))
    textLayer.setFontPostscriptName(settings.titleFont)
    textLayer.setFontSize(settings.titleFontSize)
    textLayer.setLineHeight(settings.titleLineHeight)
    textLayer.setStringValue(artboardName)
    textLayer.setName(artboardName)
    textLayer.setIsLocked(true)
    textLayer.setVerticalAlignment('bottom')
    textLayer.frame().setWidth(artboardFrame.width)
    textLayer.setTextBehaviour(1)
    textLayer.adjustFrameToFit()
    textLayer.frame().setX(artboardFrame.x)
    textLayer
      .frame()
      .setY(
        artboardFrame.y -
          textLayer.frame().height() -
          parseInt(settings.titleVerticalSpace, 10)
      )
    newLayers.push(textLayer)
  })
  const layerArray = MSLayerArray.arrayWithLayers(newLayers)
  const layerGroup = MSLayerGroup.groupWithLayers(layerArray)
  layerGroup.setName(groupName)
  layerGroup.setIsLocked(true)
  return layerGroup
}

export default implementationFactory({
  mapArtboards: createArtboardTitles,
  groupName: '@ArtboardTitles',
  successMessage: 'Added artboard titles'
})
