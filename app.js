//app.js
const express = require('express');
const app = express();
const server = require('http').Server(app);

//Socket.io
const io = require('socket.io')(server);
let onlineUsers = {}
io.on("connection", (socket) => {
  equire('./sockets/chat.js')(io, socket, onlineUsers);
  console.log("🔌 New user connected! 🔌");
})

//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index.handlebars');

//Establish your public folder
app.use('/public', express.static('public'))
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})
