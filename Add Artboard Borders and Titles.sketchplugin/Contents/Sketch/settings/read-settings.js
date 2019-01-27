function readSettings (identifier, defaultSettings) {
  const userDefaults = NSUserDefaults.alloc().initWithSuiteName(identifier)
  const keys = Object.keys(defaultSettings)
  const length = keys.length
  let i = -1
  const values = {}
  while (++i < length) {
    const key = keys[i]
    values[key] = userDefaults.objectForKey(key) || defaultSettings[key]
  }
  return {
    userDefaults: userDefaults,
    values: values
  }
}

module.exports = readSettings
