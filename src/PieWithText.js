import React from 'react';
import ReactDOM from 'react-dom';
import { Doughnut, Chart, Pie } from 'react-chartjs-2';
// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalPieDraw = Chart.controllers.pie.prototype.draw;
Chart.helpers.extend(Chart.controllers.pie.prototype, {
  draw: function() {
    originalPieDraw.apply(this, arguments);

    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.clearRect(0, 0, width, height);
    originalPieDraw.apply(this, arguments);



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
		data: [6, 2],
		backgroundColor: [
		'#107e7a', '#e2e8ee'
		]
	}]
};

class PieWithText extends React.Component {

  render() {
    return (
      <div>
        <Pie
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

export default PieWithText;
