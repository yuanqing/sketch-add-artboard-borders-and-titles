const { openUserInputDialog, saveUserInput } = require('sketch-plugin-helper')

function settings (userInputConfig) {
  return function () {
    const userInput = openUserInputDialog(userInputConfig)
    if (userInput) {
      saveUserInput(userInput, { successMessage: 'Saved settings' })
    }
  }
}

module.exports = settings
