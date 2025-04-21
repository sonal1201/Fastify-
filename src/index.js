const fastify = require('fastify')({loggger: true})

const PORT = 3000;

fastify.get('/api',(req,res) =>  {
    res.send({
        data: "Hello"
    })
})

fastify.listen({port: PORT},(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Listening to 3000")
})