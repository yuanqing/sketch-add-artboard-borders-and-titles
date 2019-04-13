import { NUMERIC_TEXT_BOX, TEXT_BOX } from 'sketch-plugin-helper'

import settingsFactory from '../factory/settings-factory'

const settingsConfig = {
  title: 'Settings for Add Artboard Borders',
  inputs: [
    {
      type: NUMERIC_TEXT_BOX,
      key: 'borderWidth',
      label: 'Border width'
    },
    {
      type: TEXT_BOX,
      key: 'borderColor',
      label: 'Border color'
    }
  ]
}

export default settingsFactory(settingsConfig)
