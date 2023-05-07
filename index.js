const express = require('express')
const app = express()
const { test } = require('./controller')
const port = 3010

app.get('/', (req, res) => {
    const data = test()
    res.send(data)
})


app.listen(port, () => {
    console.log(`Listening to PORT ${port}`)
})
