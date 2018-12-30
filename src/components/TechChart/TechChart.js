import React from 'react';
import './TechChart.scss';
import {colors} from '../../constants';

class TechChart extends React.Component {

  sortData = (data) => {
    return data.sort((a, b) => {
      if (a.lines === b.lines) return 0;
      return a.lines > b.lines ? -1 : 1;
    });
  }
  makeBars = (data) => {
    const totalLines = data.reduce((acc, curr) => acc += curr.lines, 0);
    return this.sortData(data).map(item => {
      const percent = (item.lines / totalLines) * 100;
      const color = colors[item.language];
      return (
        <div key={item.language} style={{backgroundColor: color, width: percent + '%'}} className="bar rank-color"></div>
      );
    });
  }
  makeLegend = (data) => {
    const totalLines = data.reduce((acc, curr) => acc += curr.lines, 0);
    return this.sortData(data).map(item => {
      const percent = (item.lines / totalLines) * 100;
      const color = colors[item.language];
      return (
        <div key={item.language + item.lines} className="rank-color legend-item">
          <div className="legend-marker" style={{backgroundColor: color}}></div>
          <h6 className="title is-6">{item.language}: <small>{percent.toFixed(2) + '%'}</small></h6>
        </div>
      );
    });
  }
  render () {
    const {data} = this.props;

    return (
      <div className="TechChart has-text-centered">
        <div className="chart">
          {this.makeBars(data)}
        </div>
        <div className="legend">
          {this.makeLegend(data)}
        </div>
        <small>The current languages I am writing in, by number of lines.  Data is provided from my GitHub account.</small>
      </div>
    );
  }
};

export default TechChart;
