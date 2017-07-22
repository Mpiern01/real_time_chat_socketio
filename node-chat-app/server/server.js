const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));






//app.listen(port, () =>{
//    consol.log('Server is up on port ${port}')
//});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is up on Cloud9IDE");
});

