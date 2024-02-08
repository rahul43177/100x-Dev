const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.use('/' , route)


app.listen(3000)