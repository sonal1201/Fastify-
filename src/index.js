const fastify = require('fastify')({loggger: true})

const PORT = 3000;

const app = require('./app');

fastify.register(app)


fastify.listen({port: PORT},(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Listening to 3000")
})