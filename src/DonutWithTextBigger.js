import React from 'react';
import ReactDOM from 'react-dom';
import { Doughnut, Chart } from 'react-chartjs-2';
// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw2 = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw2.apply(this, arguments);

    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      sum += chart.config.data.datasets[0].data[i];
    }

    var text = "",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
    ctx.fillStyle = "#333333"
    ctx.fillText(text, textX, textY);
  }
});

const data = {
	labels: [
		'Done',
		'In Progress',
	],
	datasets: [{
		data: [7, 1],
		backgroundColor: [
		'#107e7a', '#e2e8ee'
		]
	}]
};

class DonutWithTextBigger extends React.Component {

  render() {
    return (
      <div>
        <Doughnut
          data={data}
          // data={this.state.chartData}
          maintainAspectRatio={false}
          options={{
            legend: {
              display: false
            },
            cutoutPercentage: 80,
          }}
          />
      </div>
    );
  }
};

export default DonutWithTextBigger;
