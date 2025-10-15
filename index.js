//1. import jsonn server
const JSONServer = require(`json-server`)

//2. create server for running js file
const rbuilder = JSONServer.create()

//3.Create  middleware
const middleware =JSONServer.defaults()

// 6.import db.json file
const router = JSONServer.router("db.json")

// 4.define port to  run the server
const PORT = 3000 || process.env.PORT

// 5  use middleware
rbuilder.use(middleware)

// 7.use rou(ter
rbuilder.use(router)

// 8.tell server to listen for client request

rbuilder.listen(PORT,()=>{
    console.log(`ResumeBuilder started at PORT number ${PORT}`);
    
})


