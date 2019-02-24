import config from '../../config/api';
import openSocket from 'socket.io-client';

export default class Chat {
  socket = openSocket(config.apiUrl);

  constructor() {
    this.connect();
  }

  connect() {
    const connectMessage = 'User connected';

    this.socket.on('connect', () => {
      this.socket.emit('message', connectMessage);
    });
  }

  disconnect() {
    const disconnectMessage = 'User disconnected';

    this.socket.on('disconnect', () => {
      this.socket.emit('message', disconnectMessage);
    });
  }

  receive(cb) {
    this.socket.on('message', message => cb(message));
  }

  send(message) {
    this.socket.emit('message', message);
  }
}
