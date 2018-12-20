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
            this.setState({languages})
          })
      });
  }
  render () {
    return (
      <div className="Technologies">
        <TechChart data={this.state.languages} />
      </div>
    );
  }
};

export default Technologies;
