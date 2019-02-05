const WebSocket = require('ws');

const port = 8080;

const wss = new WebSocket.Server({ port });

function getTimeStamp() {
  return `[${new Date(Date.now()).toLocaleString()}]`;
}

function msgWithTimeStamp(message) {
  return `${getTimeStamp()} ${message}`;
}

function log(message) {
  console.log(msgWithTimeStamp(message));
}

log(`Server started on port ${port}`);

wss.on('connection', function connection(ws) {
  log('User connected');
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msgWithTimeStamp('User connected'));
    }
  });

  ws.on('message', function incoming(data) {
    log(`message: ${data}`);
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msgWithTimeStamp(`From: ${data}`));
      } else if (client === ws && client.readyState === WebSocket.OPEN) {
        client.send(msgWithTimeStamp(`To: ${data}`));
      }
    });
  });

  ws.on('close', function close() {
    log('User disconnected');
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msgWithTimeStamp('User disconnected'));
      }
    });
  });
});
