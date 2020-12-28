import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import EnterForAnEvent from './event/EnterForAnEvent';
import BrandProducts from './event/BrandProducts';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BrandProducts} />
        <Route path="/EnterForAnEvent" component={EnterForAnEvent} />
      </Switch>
    </Router>
  )
}

export default App;
