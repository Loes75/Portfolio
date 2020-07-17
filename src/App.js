import React, { Fragment } from 'react';
import './css/App.css';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import ProjectInfo from './pages/ProjectInfo';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Project/:pj" component={ProjectInfo} />
        <Route component={Error} />
      </Switch>
    </Fragment>

  );
}

export default App;
