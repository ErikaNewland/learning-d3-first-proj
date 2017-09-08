// require all node module stuff
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const api = require ('./api')
var favicon = require('serve-favicon');


const app = express()

app.use(morgan('dev'))

app.use(bodyParser.json())  //for sending json text- we haven't used this yet
app.use(bodyParser.urlencoded({extended: true})) //this provides us access to req.body.  Very useful

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootsrap/dist')));

'use strict';




const npmPath = path.join(__dirname, '../node_modules');
const publicPath = path.join(__dirname, '../public');
const browserPath = path.join(__dirname, '../browser');

app.use(express.static(npmPath));
app.use(express.static(publicPath));
app.use(express.static(browserPath));





app.use('/api', api)
app.get('/*', (req, res, send)=>{
  res.sendFile(path.join(__dirname, '../browser/index.html'))
})


app.listen(1337, ()=>{
  console.log('listening on 1337')
})

app.use((err, res, req, next)=> {
  console.log(err)
})
