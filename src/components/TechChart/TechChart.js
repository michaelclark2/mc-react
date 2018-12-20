import React from 'react';
import './TechChart.scss';

class TechChart extends React.Component {
  render () {
    const {data} = this.props;
    data.sort((a, b) => {
      if (a.lines === b.lines) return 0;
      return a.lines > b.lines ? -1 : 1;
    });
    const totalLines = data.reduce((acc, curr) => acc += curr.lines, 0);
    const bars = data.map(item => {
      return (
        <div className="bar" style={{height: ((item.lines / totalLines) * 100) + '%'}}>
          {item.language}
        </div>
      );
    });
    return (
      <div className="TechChart">
        {bars}
      </div>
    );
  }
};

export default TechChart;
