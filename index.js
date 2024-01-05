// import json-server in index.js file
const jsonServer = require('json-server')

// create a server for media player app
const mediaPlayerServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// Return middlewares used by JSON Server
const middlewares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.PORT

// use middlewares and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

// to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`media player server started at port ${port},and waiting for client request!!!`);
})
