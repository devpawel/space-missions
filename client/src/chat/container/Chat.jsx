import React, { Component } from 'react';
import config from '../../config/api';
import { Button, Grid, List, ListItem, Paper, TextField, Typography } from '@material-ui/core';

const style = {
  root: {
    margin: '1rem 0rem'
  },
  chat: {
    padding: '1rem'
  }
};

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatMessages: [],
      message: ''
    };

    this.ws = new WebSocket(config.wsUrl);

    this.ws.onmessage = data => {
      this.setState({
        chatMessages: [...this.state.chatMessages, data.data]
      });
    };
  }

  handleInput(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSend() {
    const message = this.state.message;
    if (message) {
      this.ws.send(message);
    }
  }

  render() {
    return (
      <Grid container justify="center" style={style.root}>
        <Grid item xs={12} md={8}>
          <Paper style={style.chat}>
            <List>
              {this.state.chatMessages.map(chatMessage => (
                <ListItem key={chatMessage}>
                  <Typography>{chatMessage}</Typography>
                </ListItem>
              ))}
            </List>
            <TextField onChange={event => this.handleInput(event)} />
            <Button onClick={() => this.handleSend()}>Send</Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
