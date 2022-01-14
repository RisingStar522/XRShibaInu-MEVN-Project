const mongoose = require('mongoose')
// const trunks = require('trunks-log')

// const log = new trunks('DBCONN')

mongoose.connection.on('connecting', () => {
  console.log(`Connecting to Mongo at ${process.env.MONGO_URI}`)
})

mongoose.connection.on('connected', () => {
  console.log('Mongo connection established')
})

mongoose.connection.on('error', (error) => {
  console.log('Mongo connection error', error)
})

function establishDbConnection() {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log('Mongo Connection Error:, {}', error)
  }
}

module.exports = { establishDbConnection }
