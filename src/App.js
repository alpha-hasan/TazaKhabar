import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/*"><News key={'general'} pageSize={20} country={'us'} category={'general'} badgeColor={'secondary'} /></Route>
            <Route exact path="/business"><News key={'business'} pageSize={20} country={'us'} category={'business'} badgeColor={'light text-dark border border-dark'} /></Route>
            <Route exact path="/entertainment"><News key={'entertainment'} pageSize={20} country={'us'} category={'entertainment'} badgeColor={'success'} /></Route>
            <Route exact path="/health"><News key={'health'} pageSize={20} country={'us'} category={'health'} badgeColor={'danger'} /></Route>
            <Route exact path="/science"><News key={'science'} pageSize={20} country={'us'} category={'science'} badgeColor={'info'} /></Route>
            <Route exact path="/sports"><News key={'sports'} pageSize={20} country={'us'} category={'sports'} badgeColor={'warning'} /></Route>
            <Route exact path="/technology"><News key={'technology'} pageSize={20} country={'us'} category={'technology'} badgeColor={'primary'} /></Route>
          </Switch>
        </Router >
      </div >
    )
  }
}


export default App;
