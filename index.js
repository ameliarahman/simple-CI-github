const express = require('express')
const app = express()
const { test } = require('./controller')
const port = process.env.PORT || 3009

app.get('/', (req, res) => {
    const data = test()
    res.send(data)
})


app.listen(port, () => {
    console.log(`Listening to PORT ${port}`)
})
