function createTextInput (value, x, y, width, height) {
  const textInput = NSTextField.alloc().initWithFrame(
    NSMakeRect(x, y, width, height)
  )
  textInput.setStringValue(value)
  return textInput
}

function createLabel (value, x, y, width, height) {
  const label = NSTextField.alloc().initWithFrame(
    NSMakeRect(x, y, width, height)
  )
  label.setStringValue(value)
  label.setSelectable(false)
  label.setEditable(false)
  label.setBezeled(false)
  label.setDrawsBackground(false)
  return label
}

function createDialog (settings) {
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
    settings.font,
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
    settings.fontSize,
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
    settings.lineHeight,
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
    settings.verticalOffset,
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
    alert: alert,
    fields: {
      font: fontTextField,
      fontSize: fontSizeTextField,
      lineHeight: lineHeightTextField,
      verticalOffset: verticalOffsetField
    }
  }
}

function retrieveSettings () {
  const userDefaults = NSUserDefaults.alloc().initWithSuiteName(
    'yuanqing.add-artboard-titles'
  )
  const settings = {
    userDefaults: userDefaults,
    fields: {
      font: userDefaults.objectForKey('font') || 'Helvetica',
      fontSize: userDefaults.objectForKey('fontSize') || '24',
      lineHeight: userDefaults.objectForKey('lineHeight') || '32',
      verticalOffset: userDefaults.objectForKey('verticalOffset') || '16'
    }
  }
  return settings
}

function saveSettings (userDefaults, fields) {
  const keys = Object.keys(fields)
  const length = keys.length
  let i = -1
  while (++i < length) {
    const key = keys[i]
    const value = fields[key].stringValue()
    [userDefaults setObject:value forKey:key]
  }
  userDefaults.synchronize()
}

function onRun () {
  const settings = retrieveSettings()
  const dialog = createDialog(settings.fields)
  if (dialog.alert.runModal() == '1000') {
    // the first button ('OK') was clicked
    saveSettings(settings.userDefaults, dialog.fields)
  }
}
