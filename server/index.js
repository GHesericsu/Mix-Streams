const express = require('express');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const path = require('path');
const cors = require('cors');
const NodeMediaServer = require('node-media-server');
const { rtmpServer } = require('./config.js');

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
    cluster.fork();
  });
} else {
  const nms = new NodeMediaServer(rtmpServer);

  const environment = process.env.NODE_ENV || 'development';

  const app = express();

  const port = process.env.PORT || 3001;
  const publicPath = path.join(__dirname, '/../client/dist');
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', express.static(publicPath));


  app.listen(port, () => {
    console.log(`connected on ${port}`);
  });
  nms.run();
}
