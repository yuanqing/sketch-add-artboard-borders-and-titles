function createTextInput (value, x, y, width, height) {
  const textInput = NSTextField.alloc().initWithFrame(
    NSMakeRect(x, y, width, height)
  )
  textInput.setStringValue(value)
  return textInput
}

module.exports = createTextInput
