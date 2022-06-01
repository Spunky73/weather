const express = require("express")
const app = express()
const path = require("path")
const weatherapi = require("../middleware/weatherapi")

const port = process.env.PORT || 4002

//Ipmortant 
app.use(express.json())

const htmlPath = path.join(__dirname, "../Public")
// console.log(htmlPath);
app.use(express.static(htmlPath))

app.post('/search', weatherapi)





app.listen(port, () =>{
    console.log('server is running on port 4002');
})















// const http = require('http');
// const bodyParser = require('body-parser')


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     console.log(req.url);
//     res.write(req.url);
//     res.end();
//   }).listen(8000);