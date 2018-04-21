'use strict'

const mongoose = require('mongoose')

var connectionString, options

const env = process.env.NODE_ENV || "development";
const config = $config.database[env]


const port = config.port

var db = config.db
var host

const isDebug = config.is_debug

if (isDebug) {
  console.log('提醒:debug状态连接数据库:')
  host = config.host
} else {
  console.log('警告:非debug状态连接数据库:')
  host = config.host
}

connectionString = 'mongodb://' + host + ':' + port + '/' + db + ''

options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
}

console.log(connectionString)

mongoose.connect(connectionString, options, function (err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', +connectionString + '. ' + err)
    return process.exit(1)
  } else {
    return console.log('[mongoose log] Successfully connected to: ', + port)
  }
})

db = mongoose.connection

db.on('error', console.error.bind(console, 'mongoose connection error:'))

db.once('open', function () {
  return console.log('mongoose open success')
})

module.exports = db
