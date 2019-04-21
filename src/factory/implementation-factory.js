import {
  addLayersToCurrentPage,
  getArtboardsOnCurrentPage,
  getLayersOnCurrentPage,
  getSettings,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function implementationFactory ({
  mapArtboards,
  groupName,
  settingsKeyPrefix,
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
      settings: settings || getSettings({ keyPrefix: settingsKeyPrefix }),
      groupName
    })
    const group = MSLayerGroup.groupWithLayers(
      MSLayerArray.arrayWithLayers(layers)
    )
    group.setName(groupName)
    group.setIsLocked(true)
    addLayersToCurrentPage([group])
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
