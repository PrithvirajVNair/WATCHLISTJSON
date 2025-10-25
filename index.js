// 1. import json-server

const jsonServer = require('json-server')

// 5. import cors

const cors = require('cors')

// 2. create a server using json server

const server = jsonServer.create()

// 3. set up middleware

const middleware = jsonServer.defaults()

// 4. setup a routes

const route = jsonServer.router('db.json')

// implemending use

server.use(cors())
server.use(middleware)
server.use(route)

// create a port

const PORT = process.env.PORT || 3000

// start server

server.listen(PORT,()=>{
    console.log(`Server is Running in ${PORT}`);
})