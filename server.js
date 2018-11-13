const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8082 });


var record ='';
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // Broadcast to everyone else.
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
    // revieved message from client
    record = message;    
	console.log('message from client: ', message);
  });
  ws.send(record);
});
