import React from 'react';
import './TechChart.scss';

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
      if (percent < 1) {
        return null;
      }
      return (
        <div key={item.language} className="bar rank-color" style={{width: percent + '%'}}></div>
      );
    });
  }
  makeLegend = (data) => {
    const totalLines = data.reduce((acc, curr) => acc += curr.lines, 0);
    return this.sortData(data).map(item => {
      const percent = (item.lines / totalLines) * 100;
      return (
        <div className="rank-color legend-item">
          <div className="legend-marker"></div>
          <h6 className="">{item.language}: {percent.toFixed(2) + '%'}</h6>
        </div>
      );
    });
  }
  render () {
    const {data} = this.props;

    return (
      <div className="TechChart">
        <h4>The languages I like to write</h4>
        <h4>Data is provided from my GitHub account</h4>
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
