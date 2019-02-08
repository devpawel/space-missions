from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"
socketio = SocketIO(app)

if __name__ == "__main__":
    socketio.run(app)


@socketio.on("connect")
def connect():
    emit("connect", "User connected", broadcast=True)


@socketio.on("disconnect")
def disconnect():
    emit("disconnect", "User disconnected", broadcast=True)


@socketio.on("message")
def handle_message(message):
    print(message)
    emit("message", message, broadcast=True)

