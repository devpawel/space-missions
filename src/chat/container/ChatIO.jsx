import React, { Component } from 'react';
import Chat from '../../core/services/chat';
import { Button, Grid, List, ListItem, Paper, TextField, Typography } from '@material-ui/core';

const style = {
  root: {
    margin: '1rem 0rem'
  },
  chat: {
    padding: '1rem'
  }
};

export default class ChatIO extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatMessages: [],
      message: ''
    };

    this.chat = new Chat();

    this.chat.receive(message => {
      this.setState({
        chatMessages: [...this.state.chatMessages, message]
      });
    });
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
    }
  }

  render() {
    return (
      <Grid container justify="center" style={style.root}>
        <Grid item xs={12} md={8}>
          <Paper style={style.chat}>
            <List>
              {this.state.chatMessages.map((chatMessage, index) => (
                <ListItem key={index}>
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
