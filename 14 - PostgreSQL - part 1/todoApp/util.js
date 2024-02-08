const {Client} = require('pg')

async function getClient() {
    const client = new Client('postgres://gsbvtcph:tCVDyevMULCeF6fQFZWOZfpiB9ob1URz@lucky.db.elephantsql.com/gsbvtcph')
    await client.connect()
    return client 
}


module.exports = {getClient}