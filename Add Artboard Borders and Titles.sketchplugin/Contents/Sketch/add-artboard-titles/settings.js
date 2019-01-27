/* eslint-disable eqeqeq */

const createTextInput = require('../form/create-text-input.js')
const createLabel = require('../form/create-label.js')
const factory = require('../settings/factory.js')
const options = require('./options.js')

function createDialog (values) {
  const alert = COSAlertWindow.new()
  alert.setMessageText('Add Artboard Titles')
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')

  const viewWidth = 250
  const viewHeight = 140
  const view = NSView.alloc().initWithFrame(
    NSMakeRect(0, 0, viewWidth, viewHeight)
  )
  alert.addAccessoryView(view)

  const columnWidth = 120
  const rowHeight = 20
  const padding = 10
  const fontLabel = createLabel(
    'Font',
    0,
    viewHeight - 1 * rowHeight,
    viewWidth,
    rowHeight
  )
  const fontTextField = createTextInput(
    values.font,
    0,
    viewHeight - 2 * rowHeight,
    viewWidth,
    rowHeight
  )
  const fontSizeLabel = createLabel(
    'Font Size',
    0,
    viewHeight - 3 * rowHeight - 1 * padding,
    columnWidth,
    rowHeight
  )
  const fontSizeTextField = createTextInput(
    values.fontSize,
    0,
    viewHeight - 4 * rowHeight - 1 * padding,
    columnWidth,
    rowHeight
  )
  const lineHeightLabel = createLabel(
    'Line Height',
    columnWidth + padding,
    viewHeight - 3 * rowHeight - 1 * padding,
    columnWidth,
    rowHeight
  )
  const lineHeightTextField = createTextInput(
    values.lineHeight,
    columnWidth + padding,
    viewHeight - 4 * rowHeight - 1 * padding,
    columnWidth,
    rowHeight
  )
  const verticalOffsetLabel = createLabel(
    'Vertical Offset',
    0,
    viewHeight - 5 * rowHeight - 2 * padding,
    viewWidth,
    rowHeight
  )
  const verticalOffsetField = createTextInput(
    values.verticalOffset,
    0,
    viewHeight - 6 * rowHeight - 2 * padding,
    viewWidth,
    rowHeight
  )
  view.addSubview(fontLabel)
  view.addSubview(fontTextField)
  view.addSubview(fontSizeLabel)
  view.addSubview(fontSizeTextField)
  view.addSubview(lineHeightLabel)
  view.addSubview(lineHeightTextField)
  view.addSubview(verticalOffsetLabel)
  view.addSubview(verticalOffsetField)
  fontTextField.setNextKeyView(fontSizeTextField)
  fontSizeTextField.setNextKeyView(lineHeightTextField)
  lineHeightTextField.setNextKeyView(verticalOffsetField)

  return {
    run: alert.runModal,
    fields: {
      font: fontTextField,
      fontSize: fontSizeTextField,
      lineHeight: lineHeightTextField,
      verticalOffset: verticalOffsetField
    }
  }
}

function onRun (context) {
  return factory(context, createDialog, options)
}

module.exports = onRun
