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

module.exports = createLabel
