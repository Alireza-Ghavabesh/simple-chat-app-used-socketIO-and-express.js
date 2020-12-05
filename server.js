var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

let port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on("connection",function(socket){
  
  console.log("on user connected"+socket.id);
  
  socket.on("chat_message",function(data){
    console.log(data)

    io.emit('message', data);

  })


  socket.on("disconnect",function(){
    console.log("user disconnected");
  })

})




http.listen(port, ()=>{console.log(`server running on port ${port}`)})