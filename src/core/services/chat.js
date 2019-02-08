import config from '../../config/api';
import openSocket from 'socket.io-client';

export default class Chat {
  socket = openSocket(config.apiUrl);

  constructor() {
    this.connect();
  }

  connect() {
    const connectMessage = 'User connected';
    const disconnectMessage = 'User disconnected';

    this.socket.on('connect', () => {
      this.socket.emit('message', connectMessage);
    });

    this.socket.on('disconnect', () => {
      this.socket.emit('message', disconnectMessage);
    });
  }

  disconnect() {
    const message = 'User connected';

    this.socket.on('disconnect', () => {
      this.socket.emit('message', message);
    });
  }

  receive(cb) {
    this.socket.on('message', message => cb(message));
  }

  send(message) {
    this.socket.emit('message', message);
  }
}
