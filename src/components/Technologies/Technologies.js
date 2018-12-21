import React from 'react';
import './Technologies.scss';
import TechChart from '../TechChart/TechChart';
import {getRepos, findLanguages} from '../../api/github';

class Technologies extends React.Component {
  state = {
    languages: []
  }
  componentDidMount () {
    getRepos()
      .then(repos => {
        findLanguages(repos)
          .then(languages => {
            this.setState({languages});
          });
      });
  }
  render () {
    return (
      <div className="Technologies">
        <h2 className="title is-2">Skills and Technologies</h2>
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
            <TechChart data={this.state.languages} />
          </div>
        </div>
      </div>
    );
  }
};

export default Technologies;
