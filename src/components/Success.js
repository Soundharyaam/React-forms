import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

  render() {
    return (
      <MuiThemeProvider>
       <>
       <AppBar title="Success"/>
       <h1>Thank you for your submission</h1>
       <p>You will get the confirmation email with next step.</p>
       </>

      </MuiThemeProvider>
    )
  }
}

export default Success;
