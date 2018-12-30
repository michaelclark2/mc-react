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
        <div key={item.language} style={{backgroundColor: color, width: percent + '%'}} className="bar"></div>
      );
    });
  }
  makeLegend = (data) => {
    const totalLines = data.reduce((acc, curr) => acc += curr.lines, 0);
    return this.sortData(data).map(item => {
      const percent = (item.lines / totalLines) * 100;
      const color = colors[item.language];
      return (
        <div key={item.language + item.lines} className="legend-item">
          <div className="legend-marker" style={{backgroundColor: color}}></div>
          <div>
            <h6 className="title is-6">{item.language}</h6>
            <h6 className="subtitle is-6">{percent.toFixed(2) + '%'}</h6>
          </div>
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
      </div>
    );
  }
};

export default TechChart;
