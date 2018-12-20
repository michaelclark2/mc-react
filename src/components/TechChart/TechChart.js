import React from 'react';
import './TechChart.scss';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

class TechChart extends React.Component {
  componentDidMount () {
    const chart = am4core.create('chartdiv', am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = this.props.data;

    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    const series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = 'lines';
    series.dataFields.category = 'language';

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.inert = true;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();

    this.chart = chart;
  }
  componentDidUpdate (prevProps) {
    if (prevProps.data.length !== this.props.data.length)
      this.chart.data = this.props.data;
  }
  componentWillUnmount () {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render () {
    return (
      <div className="chartdiv"></div>
    );
  }
};

export default TechChart;
