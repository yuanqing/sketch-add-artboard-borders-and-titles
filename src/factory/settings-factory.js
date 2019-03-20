import { openUserInputDialog, saveUserInput } from 'sketch-plugin-helper'

export function settingsFactory (userInputConfig) {
  return function () {
    const userInput = openUserInputDialog(userInputConfig)
    if (userInput) {
      saveUserInput(userInput, { successMessage: 'Saved settings' })
    }
  }
}
