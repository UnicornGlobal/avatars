// setup JSDOM
require('jsdom-global')()
const crypto = require('@trust/webcrypto')
const { TextEncoder } = require('util')

// make expect available globally
global.expect = require('expect')
window.Date = Date

// Enable hashing
global.TextEncoder = TextEncoder
global.crypto = crypto
