import { TEXT_BOX } from 'sketch-plugin-helper'

import settingsFactory from '../factory/settings-factory'

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

export default settingsFactory(userInputConfig)
