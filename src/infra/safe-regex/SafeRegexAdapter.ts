import safeRegex from 'safe-regex'

export default class SafeRegexAdapter {
  isSafe(regex) {
    return safeRegex(regex)
  }
}
