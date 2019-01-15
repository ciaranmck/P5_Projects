var express = require('express');
var cors = require('cors');
var app = express();

var path = require('path');

app.use(cors());
app.use('/static', express.static(path.join('C:/Users/ciara/Documents/p5_Projects/Solar_System/solarSystem/')));

app.get('/index.html', async (req, res) => {
    await res.sendFile(req);
})

// app.get('/flakes32.png', async (req, res) => {
//     await res.sendImage(req);
// })


app.listen(3000);