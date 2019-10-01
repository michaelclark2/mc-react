import React from 'react';
import './Technologies.scss';
import TechChart from '../TechChart/TechChart';
import {getCode} from '../../helpers/api';

class Technologies extends React.Component {
  state = {
    languages: [],
    isLoading: true
  }
  componentDidMount () {
    window.scrollTo(0,0);
    getCode()
      .then(languages => {
        this.setState({languages, isLoading: false});
      });
  }
  render () {
    return (
      <div className="Technologies">
        <div className="languages section">
          <div className="hero is-medium">
            <div className="hero-body">
              <h2 className="title is-2 has-text-centered">What I'm writing</h2>
              <h4 className="subtitle has-text-centered">The current languages I am writing in, by number of lines.  Data is provided from GitHub.</h4>
              {
                this.state.isLoading ? (
                  <h5 className="title is-5 has-text-centered">Loading data from GitHub...</h5>
                ) : (
                  <TechChart data={this.state.languages} />
                )
              }
            </div>
          </div>

        </div>
        <div className="libraries section">
          <div className="hero">
            <div className="hero-body">
              <h2 className="title is-2 has-text-centered">What I'm using</h2>
              <h4 className="subtitle has-text-centered">Some of my favorite tools, libraries, and frameworks.</h4>
              <div className="other-tech">
                <div className="tech-item">
                  <i className="devicon-react-original colored"></i>
                  <h6 className="title is-6">React</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-jquery-plain colored"></i>
                  <h6 className="title is-6">jQuery</h6>
                </div>
                <div className="tech-item">
                  <i className="fas fa-database"></i>
                  <h6 className="title is-6">SQL Server</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-bootstrap-plain colored"></i>
                  <h6 className="title is-6">Bootstrap</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-sass-original colored"></i>
                  <h6 className="title is-6">Sass</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-git-plain colored"></i>
                  <h6 className="title is-6">git</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-webpack-plain colored"></i>
                  <h6 className="title is-6">Webpack</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-visualstudio-plain colored"></i>
                  <h6 className="title is-6">Visual Studio</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-dot-net-plain colored"></i>
                  <h6 className="title is-6">ASP.NET Core</h6>
                </div>
                <div className="tech-item">
                  <i className="devicon-linux-plain colored"></i>
                  <h6 className="title is-6">Linux</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h6 className="title is-6 has-text-centered">This website was built with React and hosted on Firebase, with a Ruby backend hosted on Heroku.</h6>
        </div>
      </div>
    );
  }
};

export default Technologies;
