import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

import connection from '../firebase/connection';
connection();

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="app">
            <Header />
            <main className="Main">
              <Switch>
                <Route path='/' exact component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
