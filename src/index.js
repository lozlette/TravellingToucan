require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res)  => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(() => console.log('Running on port 8000'))
