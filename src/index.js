import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
// import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/dashboard" component={Dashboard} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
