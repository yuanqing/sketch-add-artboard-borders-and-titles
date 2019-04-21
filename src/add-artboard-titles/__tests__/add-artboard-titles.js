import { snapshotTest } from 'sketch-plugin-helper'
import addArtboardTitles from '../add-artboard-titles'

snapshotTest(
  'Add artboard titles',
  '__fixtures__/input.sketch',
  '__fixtures__/output.sketch',
  function () {
    const settings = {
      font: 'Helvetica',
      fontSize: 24,
      lineHeight: 32,
      verticalSpace: 16
    }
    addArtboardTitles({ settings })
  }
)
