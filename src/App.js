import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  console.log(progress);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Switch>
          <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress} key={'business'} pageSize={20} country={'us'} category={'business'} badgeColor={'light text-dark border border-dark'} /></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress} key={'entertainment'} pageSize={20} country={'us'} category={'entertainment'} badgeColor={'success'} /></Route>
          <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress} key={'health'} pageSize={20} country={'us'} category={'health'} badgeColor={'danger'} /></Route>
          <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress} key={'science'} pageSize={20} country={'us'} category={'science'} badgeColor={'info'} /></Route>
          <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress} key={'sports'} pageSize={20} country={'us'} category={'sports'} badgeColor={'warning'} /></Route>
          <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress} key={'technology'} pageSize={20} country={'us'} category={'technology'} badgeColor={'primary'} /></Route>
          <Route exact path="/*"><News apiKey={apiKey} setProgress={setProgress} key={'general'} pageSize={20} country={'us'} category={'general'} badgeColor={'secondary'} /></Route>
        </Switch>
      </Router >
    </div >
  )
}


export default App;