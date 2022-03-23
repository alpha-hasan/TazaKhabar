import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'business'} pageSize={20} country={'us'} category={'business'} badgeColor={'light text-dark border border-dark'} /></Route>
            <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'entertainment'} pageSize={20} country={'us'} category={'entertainment'} badgeColor={'success'} /></Route>
            <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'health'} pageSize={20} country={'us'} category={'health'} badgeColor={'danger'} /></Route>
            <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'science'} pageSize={20} country={'us'} category={'science'} badgeColor={'info'} /></Route>
            <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'sports'} pageSize={20} country={'us'} category={'sports'} badgeColor={'warning'} /></Route>
            <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'technology'} pageSize={20} country={'us'} category={'technology'} badgeColor={'primary'} /></Route>
            <Route exact path="/*"><News apiKey={this.apiKey} setProgress={this.setProgress} key={'general'} pageSize={20} country={'us'} category={'general'} badgeColor={'secondary'} /></Route>
          </Switch>
        </Router >
      </div >
    )
  }
}


export default App;
