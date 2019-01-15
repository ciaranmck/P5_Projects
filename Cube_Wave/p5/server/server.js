var express = require('express');
var cors = require('cors');
var app = express();

var path = require('path');

app.use(cors());
app.use('/static', express.static(path.join('C:/Users/ciara/Documents/p5_Projects/Cube_Wave/p5/empty-example/')));

app.get('/index.html', async (req, res) => {
    await res.sendFile(req);
})

app.listen(3000);