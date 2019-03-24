import {
  addLayersToPage,
  getAllArtboards,
  getAllLayers,
  getSettings,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function implementationFactory ({
  mapArtboards,
  groupName,
  successMessage
}) {
  return function () {
    deleteLayers(groupName)
    const artboards = getAllArtboards()
    if (artboards.length === 0) {
      showErrorMessage('No artboards')
      return
    }
    const group = mapArtboards({
      artboards,
      settings: getSettings(),
      groupName
    })
    addLayersToPage([group])
    showSuccessMessage(successMessage)
  }
}

function deleteLayers (layerName) {
  getAllLayers().forEach(function (layer) {
    if (layer.type === 'Group' && layer.name === layerName) {
      layer.remove()
    }
  })
}
