from flask import Flask, render_template, redirect
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"
socketio = SocketIO(app)

if __name__ == "__main__":
    socketio.run(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/details/<int:id>")
def details(id):
    return render_template("index.html")


@app.route("/favorites")
def favorites():
    return render_template("index.html")


@app.route("/chat")
def chat():
    return render_template("index.html")


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

