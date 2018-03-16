const http = require('http');
const PORT = 8800;
const express = require('express');

const app = express();

app.use(express.static('public'));

http.createServer(app).listen(8800);
