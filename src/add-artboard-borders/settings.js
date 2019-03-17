const { TEXT_BOX } = require('sketch-plugin-helper')

const settingsFactory = require('../factory/settings-factory')

const userInputConfig = {
  title: 'Settings for Add Artboard Borders',
  inputs: [
    {
      key: 'addArtboardBorders.borderWidth',
      label: 'Border width',
      type: TEXT_BOX
    },
    {
      key: 'addArtboardBorders.borderColor',
      label: 'Border color',
      type: TEXT_BOX
    }
  ]
}

module.exports = settingsFactory(userInputConfig)
