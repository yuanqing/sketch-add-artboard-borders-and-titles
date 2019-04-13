import { NUMERIC_TEXT_BOX, TEXT_BOX } from 'sketch-plugin-helper'

import settingsFactory from '../factory/settings-factory'

const settingsConfig = {
  title: 'Setings for Add Artboard Titles',
  inputs: [
    {
      type: TEXT_BOX,
      key: 'titleFont',
      label: 'Font'
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'titleFontSize',
      label: 'Font size'
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'titleLineHeight',
      label: 'Line-height'
    },
    {
      type: NUMERIC_TEXT_BOX,
      key: 'titleVerticalSpace',
      label: 'Vertical space'
    }
  ]
}

export default settingsFactory(settingsConfig)
