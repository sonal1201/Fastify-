const plugin = require("fastify-plugin")

/**
 * @param {Fastify,options} fastify
 */



async function app(fastify, options) {
    fastify.register(require('./routes/index'),{prefix:"/test"})
}

module.exports = plugin(app)