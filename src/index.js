require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`${__dirname}/dist` + '/static'))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.get('/*', (req, res)  => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(() => console.log('Running on port 8000'))
