let fs = require('fs'),
    bsplit = require('buffer-split'),
    SteamParser = require('./parser')

let messages = fs.readFileSync('./message.dat')

let indicator = Buffer.from('\r\n--splite')

let splitResult = bsplit(messages, indicator, false)

splitResult.forEach((item, i) => {
    console.log(i, splitResult.length)
    let result = SteamParser.parseMessage(item, true)
    if (result) console.log(result)
})