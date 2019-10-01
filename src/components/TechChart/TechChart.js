import React from 'react';
import './TechChart.scss';
import {colors} from '../../constants';

class TechChart extends React.Component {

  sortData = (data) => {
    return data.sort((a, b) => {
      const A = Object.values(a)[0];
      const B = Object.values(b)[0];

      if (A === B) return 0;
      return A > B ? -1 : 1;
    });
  }
  makeBars = (data) => {
    const totalLines = (data).reduce((acc, curr) => acc += Object.values(curr)[0], 0);
    return (data).map(langObj => {
      const percent = (Object.values(langObj)[0] / totalLines) * 100;
      const color = colors[Object.keys(langObj)[0]];
      return (
        <div key={Object.keys(langObj)[0]} style={{backgroundColor: color, width: percent + '%'}} className="bar"></div>
      );
    });
  }
  makeLegend = (data) => {
    const totalLines = (data).reduce((acc, curr) => acc += Object.values(curr)[0], 0);
    return (data).map(langObj => {
      const percent = (Object.values(langObj)[0] / totalLines) * 100;
      const color = colors[Object.keys(langObj)[0]];
      return (
        <div key={Object.keys(langObj)[0] + Object.values(langObj)[0]} className="legend-item">
          <div className="legend-marker" style={{backgroundColor: color}}></div>
          <div>
            <h6 className="title is-6">{Object.keys(langObj)[0]}</h6>
            <h6 className="subtitle is-6">{percent.toFixed(2) + '%'}</h6>
          </div>
        </div>
      );
    });
  }
  render () {
    const {data} = this.props;
    const sortedData = this.sortData(data);
    return (
      <div className="TechChart has-text-centered">
        <div className="chart">
          {this.makeBars(sortedData)}
        </div>
        <div className="legend">
          {this.makeLegend(sortedData)}
        </div>
      </div>
    );
  }
};

export default TechChart;
