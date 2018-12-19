import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.scss';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

import connection from '../firebase/connection';
connection();

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
