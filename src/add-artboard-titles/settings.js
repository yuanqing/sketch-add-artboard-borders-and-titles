const { TEXT_BOX } = require('sketch-plugin-helper')

const settingsFactory = require('../factory/settings-factory')

const userInputConfig = {
  title: 'Setings for Add Artboard Titles',
  inputs: [
    {
      key: 'addArtboardTitles.font',
      label: 'Font',
      type: TEXT_BOX
    },
    {
      key: 'addArtboardTitles.fontSize',
      label: 'Font size',
      type: TEXT_BOX
    },
    {
      key: 'addArtboardTitles.lineHeight',
      label: 'Line-height',
      type: TEXT_BOX
    },
    {
      key: 'addArtboardTitles.verticalOffset',
      label: 'Vertical offset',
      type: TEXT_BOX
    }
  ]
}

module.exports = settingsFactory(userInputConfig)
