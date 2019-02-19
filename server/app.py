from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "J04+fH78Tb*Hk+'e)9{qS?BZQ5yq[:"
socketio = SocketIO(app)

if __name__ == "__main__":
    socketio.run(app)


@socketio.on("connect")
def connect():
    print("User connected")


@socketio.on("disconnect")
def disconnect():
    print("User disconnected")


@socketio.on("message")
def handle_message(message):
    print(message)
    send(message, broadcast=True)

