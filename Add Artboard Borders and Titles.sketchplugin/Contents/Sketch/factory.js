const deleteLayers = require('./layer/delete-layers')
const filterOutNonArtboards = require('./layer/filter-out-non-artboards')
const readSettings = require('./settings/read-settings')

function factory (context, callback, options) {
  const document = context.document
  const page = document.currentPage()
  deleteLayers(options.groupName, page.layers())
  const selectedLayers = context.selection
  const selectedArtboards = filterOutNonArtboards(selectedLayers)
  const artboardLayers =
    selectedArtboards.length > 0
      ? selectedArtboards
      : page.artboards()
  const settings = readSettings(options.identifier, options.defaultSettings)
  const group = callback(artboardLayers, settings.values, options.groupName)
  page.addLayers([group])
  document.showMessage(options.successMessage)
}

module.exports = factory
