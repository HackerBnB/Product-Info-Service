require('newrelic');
const express = require('express');
const path = require('path');
const routes = require('./../routes');

const app = express();


const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    // console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.set('port', process.env.PORT || 3003); // prod vs test environment switch

  app.get('/', (req, res) => {
    res.redirect('/rooms/1');
  });

  app.use(express.static('public/'));
  app.use(express.static('client/dist'));

  app.get('/rooms/:id', (req, res) => {
    const reactPath = path.join(__dirname, '../public/index.html');
    res.sendFile(reactPath);
  });

  app.use('/api', routes);
}

module.exports = app;
