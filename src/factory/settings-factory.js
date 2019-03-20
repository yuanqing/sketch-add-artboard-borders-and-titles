import { openUserInputDialog, saveUserInput } from 'sketch-plugin-helper'

export default function settingsFactory (userInputConfig) {
  return function () {
    const userInput = openUserInputDialog(userInputConfig)
    if (userInput) {
      saveUserInput(userInput, { successMessage: 'Saved settings' })
    }
  }
}
