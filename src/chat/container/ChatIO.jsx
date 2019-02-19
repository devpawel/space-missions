import React, { Component } from 'react';
import Chat from '../../core/services/chat';
import { Button, Grid, List, ListItem, Paper, TextField, Typography } from '@material-ui/core';

const style = {
  root: {
    margin: '1rem 0rem'
  },
  chat: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '30rem'
  },
  chatWindow: {
    height: '100%',
    overflowY: 'scroll',
    clear: 'both'
  }
};

export default class ChatIO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatMessages: [],
      message: ''
    };
  }

  componentDidMount() {
    this.chat = new Chat();

    this.chat.receive(message => {
      this.setState({
        chatMessages: [...this.state.chatMessages, message]
      });
    });
  }

  componentWillUnmount() {
    this.chat.disconnect();
  }

  handleInput(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSend() {
    const message = this.state.message;
    if (message) {
      this.chat.send(message);
      this.setState({
        message: ''
      });
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSend();
    }
  }

  render() {
    return (
      <Grid container justify="center" style={style.root}>
        <Grid item xs={12} md={8}>
          <Paper style={style.chat}>
            <List style={style.chatWindow}>
              {this.state.chatMessages.map((chatMessage, index) => (
                <ListItem key={index}>
                  <Typography>{chatMessage}</Typography>
                </ListItem>
              ))}
            </List>
            <TextField
              style={style.input}
              onChange={event => this.handleInput(event)}
              onKeyPress={event => this.handleKeyPress(event)}
              value={this.state.message}
            />
            <Button onClick={() => this.handleSend()}>Send</Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
