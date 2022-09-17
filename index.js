const app = require('./app')
const {Server} = require('socket.io')
const http = require('http')

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:"*",
        methods:["GET","POST"]
    },
    transports: ["websocket","polling"]
})

io.on("connection",(socket)=>{
  console.log("User connected");

  socket.on("joinRoom",(roomId)=>{
      socket.join(roomId)
      console.log("User joined to the room: ",roomId);
  })

  socket.on("sendMessage",(data)=>{
    console.log("hola");
      socket.to(data.conversationId).emit("receiveMessage",data)
  })

  socket.on("disconnect",()=>{
      console.log("disconnected");
  })
})

server.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
})
