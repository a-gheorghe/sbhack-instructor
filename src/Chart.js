import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Done', 'In Progress'],
        datasets: [
          {
            label: 'Ratio',
            data: [6, 3],
            backgroundColor: ['#107e7a', '#e2e8ee']
          }
        ]
      }
    }

  }
  render() {
    return (
      <div className="chart" style={{position: "relative", height:"20vh", width:"40vw"}}>
        <Doughnut
          data={this.state.chartData}
          maintainAspectRatio={false}
          options={{
            legend: {
              display: false
            },
            cutoutPercentage: 80,
            layout: {
              padding: {
                top: 50
              }
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
