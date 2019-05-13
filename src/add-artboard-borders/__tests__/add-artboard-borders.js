import { test } from 'sketch-plugin-helper'
import addArtboardBorders from '../add-artboard-borders'

test(
  'Add artboard borders',
  '__fixtures__/input.sketch',
  '__fixtures__/expected-output.sketch',
  function () {
    const settings = {
      addArtboardBorders: {
        borderColor: '#7f7f7f',
        borderWidth: 2
      }
    }
    addArtboardBorders({ settings })
  }
)
