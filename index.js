const path = require('path');
const http = require('http');
const { Server } = require('socket.io')
const express = require('express');
const { Socket } = require('dgram');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket
io.on("connection", (socket)=>{
    socket.on("userMessage", (message)=>{
        io.emit("message", message);
    });
});

app.use(express.static(path.resolve("./public")));
app.get('/',(req,res)=>{
    res.sendFile("/public/index.html")
})

server.listen(1000, ()=>{
    console.log("Server Is Listed On Port 1000");
})