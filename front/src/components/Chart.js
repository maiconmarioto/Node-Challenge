import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { randomColor } from '../utils/randomColors';

const Chart = props => {
  let data = {};
  let legend = {};

  if (typeof props.chartData !== 'undefined' && props.chartData) {
    const { chartData } = props;
    const fullNames = chartData.map(i => `${i.name} ${i.lastName}`);
    const participations = chartData.map(i => i.participation);
    const colors = chartData.map(i => randomColor());
    data = {
      labels: fullNames,
      datasets: [
        {
          data: participations,
          backgroundColor: colors,
          hoverBackgroundColor: colors
        }
      ]
    };

    legend = {
      display: true,
      position: 'bottom',
      fullWidth: false,
      reverse: true
    };
  }

  return (
    <div className="container w-100">
      <Doughnut data={data} legend={legend} />
    </div>
  );
};

export default Chart;
