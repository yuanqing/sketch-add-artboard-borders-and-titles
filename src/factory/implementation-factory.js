import {
  addLayersToPage,
  getArtboardsOnCurrentPage,
  getLayersOnCurrentPage,
  getSettings,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function implementationFactory ({
  mapArtboards,
  groupName,
  settingsKey,
  successMessage
}) {
  return function ({ settings }) {
    deleteLayers(groupName)
    const artboards = getArtboardsOnCurrentPage()
    if (artboards.length === 0) {
      showErrorMessage('No artboards')
      return
    }
    const layers = mapArtboards({
      artboards,
      settings: (settings || getSettings())[settingsKey],
      groupName
    })
    const group = MSLayerGroup.groupWithLayers(
      MSLayerArray.arrayWithLayers(layers)
    )
    group.setName(groupName)
    group.setIsLocked(true)
    addLayersToPage([group])
    showSuccessMessage(successMessage)
  }
}

function deleteLayers (layerName) {
  getLayersOnCurrentPage().forEach(function (layer) {
    if (layer.type === 'Group' && layer.name === layerName) {
      layer.remove()
    }
  })
}
