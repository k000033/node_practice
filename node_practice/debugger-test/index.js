// console.log(100)
// console.log(200)
// console.log(300)
// console.log(400)
// console.log(500)

const http = require('http')

const server = http.createServer((req,res)=>{
     // 會跑2次
     // 1.index內容
     // 2.favicon.lco 
     res.writeHead(200,{'content-type':'text/html'})
     res.end('<h1>hello world</h1>')  //內容

})

server.listen(3000,()=>{
    console.log('listening on 3000')
})