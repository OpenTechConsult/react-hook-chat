import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/home/home.component';
import Chatroom from './components/chatroom/chatroom.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:roomId' component={Chatroom} />
      </Switch>
    </Router>
  );
}

export default App;
