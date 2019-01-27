function saveSettings (userDefaults, fields) {
  const keys = Object.keys(fields)
  const length = keys.length
  let i = -1
  while (++i < length) {
    const key = keys[i]
    const value = fields[key].stringValue()
    userDefaults.setObject_forKey(value, key)
  }
  userDefaults.synchronize()
}

module.exports = saveSettings
