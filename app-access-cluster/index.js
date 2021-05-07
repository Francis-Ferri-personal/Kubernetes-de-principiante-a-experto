const express = require('express');
const app = express();
const axios = require('axios');

const port = 3000;

const targetURL = '192.168.49.2';
const targetPort = 31000;

app.get('/', function (req, res) {
    axios.get(`http://${targetURL}:${targetPort}`)
        .then( (response) => {
            res.send(response.data)
        }
        )
        .catch(console.error)
})
 
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`))