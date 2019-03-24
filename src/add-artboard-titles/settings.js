import { NUMERIC_TEXT_BOX, TEXT_BOX } from 'sketch-plugin-helper'

import settingsFactory from '../factory/settings-factory'

const settingsConfig = {
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
      type: NUMERIC_TEXT_BOX
    },
    {
      key: 'addArtboardTitles.lineHeight',
      label: 'Line-height',
      type: NUMERIC_TEXT_BOX
    },
    {
      key: 'addArtboardTitles.verticalSpace',
      label: 'Vertical space',
      type: NUMERIC_TEXT_BOX
    }
  ]
}

export default settingsFactory(settingsConfig)
