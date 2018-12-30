import React from 'react';
import './Technologies.scss';
import TechChart from '../TechChart/TechChart';
import {getRepos, findLanguages} from '../../api/github';

class Technologies extends React.Component {
  state = {
    languages: [],
    isLoading: true
  }
  componentDidMount () {
    getRepos()
      .then(repos => {
        findLanguages(repos)
          .then(languages => {
            this.setState({languages, isLoading: false});
          });
      });
  }
  render () {
    return (
      <div className="Technologies section">
        <h2 className="title is-2 has-text-centered">Skills and Technologies</h2>
        {
          this.state.isLoading ? (
            <h5 className="title is-5 has-text-centered">Loading data from GitHub...</h5>
          ) : (
            <TechChart data={this.state.languages} />
          )
        }
        <h4 className="title is-4 has-text-centered">Other things I use</h4>
        <div className="other-tech">
          <div className="tech-item">
            <i className="devicon-react-original colored"></i>
            <h5 className="title is-5">React</h5>
          </div>
          <div className="tech-item">
            <i className="devicon-jquery-plain colored"></i>
            <h5 className="title is-5">jQuery</h5>
          </div>
          <div className="tech-item">
            <i className="fas fa-database"></i>
            <h5 className="title is-5">SQL Server</h5>
          </div>
          <div className="tech-item">
            <i className="devicon-bootstrap-plain colored"></i>
            <h5 className="title is-5">Bootstrap</h5>
          </div>
          <div className="tech-item">
            <i className="devicon-sass-original colored"></i>
            <h5 className="title is-5">Sass</h5>
          </div>
          <div className="tech-item">
            <i className="devicon-git-plain colored"></i>
            <h5 className="title is-5">git</h5>
          </div>
          <div className="tech-item">
            <i className="devicon-webpack-plain colored"></i>
            <h5 className="title is-5">Webpack</h5>
          </div>
          <div className="tech-item">
            <i className="devicon-visualstudio-plain colored"></i>
            <h5 className="title is-5">Visual Studio</h5>
          </div>
          <div className="tech-item">
            <i class="devicon-linux-plain colored"></i>
            <h5 className="title is-5">Linux</h5>
          </div>
        </div>
      </div>
    );
  }
};

export default Technologies;
