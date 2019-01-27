const createTextInput = require('../form/create-text-input.js')
const createLabel = require('../form/create-label.js')
const factory = require('../settings/factory.js')
const options = require('./options.js')

function createDialog (values) {
  const alert = COSAlertWindow.new()
  alert.setMessageText('Add Artboard Borders')
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')

  const viewWidth = 250
  const viewHeight = 90
  const view = NSView.alloc().initWithFrame(
    NSMakeRect(0, 0, viewWidth, viewHeight)
  )
  alert.addAccessoryView(view)

  const rowHeight = 20
  const padding = 10
  const borderWidthLabel = createLabel(
    'Border Width',
    0,
    viewHeight - 1 * rowHeight,
    viewWidth,
    rowHeight
  )
  const borderWidthTextField = createTextInput(
    values.borderWidth,
    0,
    viewHeight - 2 * rowHeight,
    viewWidth,
    rowHeight
  )
  const borderColorLabel = createLabel(
    'Border Color',
    0,
    viewHeight - 3 * rowHeight - 1 * padding,
    viewWidth,
    rowHeight
  )
  const borderColorTextField = createTextInput(
    values.borderColor,
    0,
    viewHeight - 4 * rowHeight - 1 * padding,
    viewWidth,
    rowHeight
  )
  view.addSubview(borderWidthLabel)
  view.addSubview(borderWidthTextField)
  view.addSubview(borderColorLabel)
  view.addSubview(borderColorTextField)
  borderWidthTextField.setNextKeyView(borderColorTextField)

  return {
    run: alert.runModal,
    fields: {
      borderWidth: borderWidthTextField,
      borderColor: borderColorTextField
    }
  }
}

function onRun (context) {
  return factory(context, createDialog, options)
}

module.exports = onRun
