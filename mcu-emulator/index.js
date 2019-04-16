/* eslint-disable no-unused-vars */

const fastify = require('fastify')();

fastify.get('/index', async (request, reply) => {
  reply
    .code(200)
    .header('Access-Control-Allow-Credentials', true)
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Methods', 'GET')
    .header('Access-Control-Allow-Headers', 'application/json')
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ results: 'connected' });
});

fastify.get('/sensor', async (request, reply) => {
  reply
    .code(200)
    .header('Access-Control-Allow-Credentials', true)
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Methods', 'GET')
    .header('Access-Control-Allow-Headers', 'application/json')
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ results: 0 });
});

fastify.get('/forward', async (request, reply) => {
  reply
    .code(200)
    .header('Access-Control-Allow-Credentials', true)
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Methods', 'GET')
    .header('Access-Control-Allow-Headers', 'application/json')
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ results: 'OK' });
});

fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
