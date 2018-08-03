import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Projects from '../components/Projects/Projects';

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
                <Route path='/blog' component={Blog} />
                <Route path='/projects' component={Projects} />
                <Redirect to='/' from='/:' />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
