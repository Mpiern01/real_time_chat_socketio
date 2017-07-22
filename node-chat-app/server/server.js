const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');

//Local, Dev, or Prod Deploy
//const port = process.env.PORT || 3000;
// Cloud9IDE testing and preview
const port = process.env.PORT || process.env.IP;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
// module dependencies
var http = require("http"),
    sio  = require("socket.io")
    // create http server
var server = http.createServer().listen(process.env.PORT, process.env.IP),
// create socket server
io = sio.listen(server);
// set socket.io debugging
io.set('log level', 1);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('New user connected');
    
    socket.emit('newEmail', {
        from: 'Mike@example.com',
        text: 'Hey. Whats is going on?',
        createAt: 123
    });
    
socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
});    
    
socket.on   ('disconnect', () => {
    console.log('User was disconnected');
}); 
});






//server.listen(port, () =>{
//    consol.log('Server is up on port ${port}')
//});

server.listen(process.env.PORT, process.env.IP, function(){
 console.log("Server is up on Cloud9IDE");
});

