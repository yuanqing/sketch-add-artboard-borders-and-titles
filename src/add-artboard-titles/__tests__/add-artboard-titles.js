import { snapshotTest } from 'sketch-plugin-helper'
import addArtboardTitles from '../add-artboard-titles'

snapshotTest(
  'Add artboard titles',
  '__fixtures__/input.sketch',
  '__fixtures__/output.sketch',
  function () {
    const settings = {
      'addArtboardTitles.font': 'Helvetica',
      'addArtboardTitles.fontSize': 24,
      'addArtboardTitles.lineHeight': 32,
      'addArtboardTitles.verticalSpace': 16
    }
    addArtboardTitles({ settings })
  }
)
