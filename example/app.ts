import express from 'express';
import cookieParser from 'cookie-parser';
import http from 'http';
import path from 'path';
import { apiRouter } from './api-router';

const port = normalizePort(process.env.PORT || '3000');

export const app = express();
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

const server = http.createServer(app);
server.listen(port);

server.on('error', (err: Error) => {
  console.error(err);
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `http://localhost:${addr.port}`;

  console.log(`Listening on ${bind}`);
});

function normalizePort(val: any) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
}