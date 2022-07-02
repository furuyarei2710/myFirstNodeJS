// Inject the express library
const express = require('express')
// Represent for the application 
const app = express()
const port = 3000
// Definition route ==> when we go to the website, the browser will return the data "Hello World" through HTTP
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
    res.send('Hello World!')
})
// Localhost is 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})