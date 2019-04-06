import { snapshotTest } from 'sketch-plugin-helper'
import addArtboardBorders from '../add-artboard-borders'

snapshotTest(
  'Add artboard borders',
  '__fixtures__/input.sketch',
  '__fixtures__/output.sketch',
  function () {
    const settings = {
      'addArtboardBorders.borderWidth': 2,
      'addArtboardBorders.borderColor': '#7f7f7f'
    }
    addArtboardBorders({ settings })
  }
)
