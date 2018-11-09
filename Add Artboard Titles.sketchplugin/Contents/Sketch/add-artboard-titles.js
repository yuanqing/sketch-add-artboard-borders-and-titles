@import 'settings.js'

function createArtboardTitles (artboardLayers) {
  var group = MSLayerGroup.new()
  group.setName(Settings.groupName)
  var textLayers = []
  var length = artboardLayers.length
  var i = length
  while (--i >= 0) {
    var artboardLayer = artboardLayers[i]
    var artboardName = artboardLayer.name()
    var textLayer = MSTextLayer.alloc().initWithFrame(NSMakeRect(0,0,0,0))
    textLayer.setFontPostscriptName(Settings.fontName)
    textLayer.setFontSize(Settings.fontSize)
    textLayer.setLineHeight(Settings.lineHeight)
    textLayer.setStringValue(artboardName)
    textLayer.setName(artboardName)
    textLayer.setVerticalAlignment('bottom')
    textLayer.frame().setWidth(artboardLayer.frame().width())
    textLayer.setTextBehaviour(1)
    textLayer.adjustFrameToFit()
    textLayer.frame().setX(artboardLayer.frame().x())
    textLayer.frame().setY(artboardLayer.frame().y() - textLayer.frame().height() - Settings.verticalOffset)
    textLayers.push(textLayer)
  }
  group.addLayers(textLayers)
  group.setIsLocked(true)
  return group
}

function filterOutNonArtboards (layers) {
  var result = []
  var loop = layers.objectEnumerator();
  var length = layers.length
  var i = -1
  while (++i < length) {
    var layer = layers[i]
    if (layer.className() == 'MSArtboardGroup') {
      result.push(layer)
    }
  }
  return result
}

function deleteGroups (page, groupName) {
  var layersToDelete = []
  var layers = page.layers()
  var length = layers.length
  var i = -1
  while (++i < length) {
    var layer = layers[i];
    if (layer.name() == groupName) {
      layersToDelete.push(layer)
    }
  }
  length = layersToDelete.length
  i = -1
  while (++i < length) {
    layersToDelete[i].removeFromParent()
  }
}

function onRun (context) {
  var document = context.document
  var page = document.currentPage()
  deleteGroups(page, Settings.groupName)
  var selectedLayers = context.selection
  var artboardLayers = selectedLayers.length > 0 ? filterOutNonArtboards(selectedLayers) : page.artboards()
  var artboardTitlesGroup = createArtboardTitles(artboardLayers)
  page.addLayers([artboardTitlesGroup])
  document.showMessage('Added Artboard titles')
}
