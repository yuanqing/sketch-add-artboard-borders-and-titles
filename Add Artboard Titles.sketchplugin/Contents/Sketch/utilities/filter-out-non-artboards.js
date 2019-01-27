/* eslint-disable eqeqeq */

function filterOutNonArtboards (layers) {
  const result = []
  const length = layers.length
  let i = -1
  while (++i < length) {
    const layer = layers[i]
    if (layer.className() == 'MSArtboardGroup') {
      result.push(layer)
    }
  }
  return result
}

module.exports = filterOutNonArtboards
