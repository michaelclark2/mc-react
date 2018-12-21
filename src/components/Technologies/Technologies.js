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
        <h2 className="title is-2">Skills and Technologies</h2>
        {
          this.state.isLoading ? (
            <h5 className="title is-5 has-text-centered">Loading data from GitHub...</h5>
          ) : (
            <TechChart data={this.state.languages} />
          )
        }
      </div>
    );
  }
};

export default Technologies;
