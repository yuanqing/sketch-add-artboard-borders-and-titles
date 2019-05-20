import { NUMERIC_TEXT_BOX, TEXT_BOX } from 'sketch-plugin-helper'

import settingsFactory from '../factory/settings-factory'

const settingsConfig = {
  title: 'Settings for Add Artboard Borders',
  formFields: [
    {
      type: NUMERIC_TEXT_BOX,
      key: 'addArtboardBorders.borderWidth',
      label: 'Border width'
    },
    {
      type: TEXT_BOX,
      key: 'addArtboardBorders.borderColor',
      label: 'Border color'
    }
  ]
}

export default settingsFactory(settingsConfig)
