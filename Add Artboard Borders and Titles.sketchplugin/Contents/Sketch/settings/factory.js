/* eslint-disable eqeqeq */

const readSettings = require('./read-settings.js')
const saveSettings = require('./save-settings.js')

function factory (context, createDialog, options) {
  const settings = readSettings(options.identifier, options.defaultSettings)
  const dialog = createDialog(settings.values)
  if (dialog.run() == '1000') {
    // the first button ('OK') was clicked
    saveSettings(settings.userDefaults, dialog.fields)
  }
}

module.exports = factory
