/* eslint-disable eqeqeq */

function deleteLayers (layerName, layers) {
  const layersToDelete = []
  const layersLength = layers.length
  let i = -1
  while (++i < layersLength) {
    const layer = layers[i]
    if (layer.name() == layerName) {
      layersToDelete.push(layer)
    }
  }
  const layersToDeleteLength = layersToDelete.length
  let j = -1
  while (++j < layersToDeleteLength) {
    layersToDelete[j].removeFromParent()
  }
}

module.exports = deleteLayers
