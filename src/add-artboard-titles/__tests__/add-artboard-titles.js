import { snapshotTest } from 'sketch-plugin-helper'
import addArtboardTitles from '../add-artboard-titles'

snapshotTest(
  'Add artboard titles',
  '__fixtures__/input.sketch',
  '__fixtures__/output.sketch',
  function () {
    const settings = {
      'titleFont': 'Helvetica',
      'titleFontSize': 24,
      'titleLineHeight': 32,
      'titleVerticalSpace': 16
    }
    addArtboardTitles({ settings })
  }
)
