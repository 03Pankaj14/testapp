import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/home';
import DetailsPage from './components/details-page/details-page';
import Dashboard from './components/dashboard';

function App() {
  return ( 
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/details' component={DetailsPage} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
    </div>
   );
}

export default App;
