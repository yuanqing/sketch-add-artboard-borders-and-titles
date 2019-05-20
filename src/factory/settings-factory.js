import {
  openSettingsDialog,
  saveSettings,
  showSuccessMessage
} from 'sketch-plugin-helper'

export default function settingsFactory (settingsConfig) {
  return function () {
    const settings = openSettingsDialog(settingsConfig)
    if (settings) {
      saveSettings(settings)
      showSuccessMessage('Saved settings')
    }
  }
}
