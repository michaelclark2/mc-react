import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.scss';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

import connection from '../firebase/connection';
import Blog from '../components/Blog/Blog';
import Technologies from '../components/Technologies/Technologies';
connection();

class App extends React.Component {

  componentDidMount () {
    const headerHeight = document.querySelector('.Header').offsetHeight;
    document.querySelector('main').style.marginTop = (headerHeight) + 'px';
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className='container-height'>
            <Switch>
              <Route path='/' exact component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/skills' component={Technologies} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
