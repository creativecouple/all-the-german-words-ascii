const woerter = require('all-the-german-words')
const _ = require('lodash')

const NON_LOWER_ASCII = /[^a-z0-9-]/g

const isAscii = word => !word.match(NON_LOWER_ASCII)
const toAscii = word => replaceNonLetters(toLowerCase(word))
const toLowerCase = word => word.toLocaleLowerCase('de')
const replaceNonLetters = word => word.replace(NON_LOWER_ASCII, char => (replacements[char] !== undefined) ? replacements[char] : char)
const replacements = {
  'á': 'a',
  'à': 'a',
  'é': 'e',
  'è': 'e',
  'ë': 'e',
  'ä': 'ae',
  'ö': 'oe',
  'ü': 'ue',
  'ß': 'ss',
  'æ': 'ae',
  'œ': 'oe',
  'α': 'alpha',
  'β': 'beta',
  'γ': 'gamma',
  ' ': '-'
}

const asciis = _(woerter.map(toAscii)).compact().uniq().sort().filter(isAscii).value()

process.stdout.write(JSON.stringify(asciis))
