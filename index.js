const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.use('/build/', express.static(path.join(__dirname, 'three.js/build')));

app.use('/jsm/', express.static(path.join(__dirname, 'three.js/examples/jsm')));

app.listen(3000, () => console.log('Visit http://127.0.0.1:3000'));


