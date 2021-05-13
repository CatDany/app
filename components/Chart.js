import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = props => {

    const { prices = [], days = [] } = props;
    
    const chartData = {
        labels: days,
        datasets: [
            {
                label: 'Stock Price',
                lineTension: 0,
                backgroundColor: 'rgba(68, 204, 153, 0.05)',
                borderColor: 'rgba(68, 204, 153, 0.9)',
                borderWidth: 1,
                borderJoinStyle: 'round',
                pointRadius: 0,
                pointBorderColor: '#fff',
                pointBackgroundColor: 'rgba(68, 204, 153, 0.9)',
                pointBorderWidth: 0,
                data: prices
            }
        ]
    };
    
    const chartOptions = {
        layout: { padding: { top: 25, bottom: 75, left: 75, right: 75 } },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
            ticks: { beginAtZero: true, display: false }
            }]
        },
        animation: {
            duration: 0
        }
    };
    
    return (
        <>
            <Line data={chartData} width={100} height={50} options={chartOptions} />
        </>
      );
    
};

export default Chart;