import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">DataView App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to CoreView</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="/dashboard"
                >
                Get started
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
