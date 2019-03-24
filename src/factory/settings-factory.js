import { openSettingsDialog, saveSettings } from 'sketch-plugin-helper'

export default function settingsFactory (settingsConfig) {
  return function () {
    const settings = openSettingsDialog(settingsConfig)
    if (settings) {
      saveSettings(settings, { successMessage: 'Saved settings' })
    }
  }
}
