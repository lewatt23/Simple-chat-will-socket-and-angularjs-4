let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);




io.on('connection', (socket) => {

    console.log('user connected');
    io.emit('newuser','newuser'); 


  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    let messager = JSON.parse(message);
    io.emit('message',   messager);  
    //console.log(message);  
  });
});

http.listen(5000, () => {
  console.log('started on port 5000');
});