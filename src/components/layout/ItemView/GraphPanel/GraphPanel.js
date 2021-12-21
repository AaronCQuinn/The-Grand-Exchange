import React from 'react'
import './GraphPanel.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options ={
        chart: {
            type: 'dualaxis',
            zoomType: 'xy',
            borderRadius: 5,
            shadow: true,
            spacingTop: 15,
            height: 50 + '%',
        },
        title: {
            text: 'Placeholder Title',
        },
        subtitle: {
          text: 'Source: OSRS Wiki / RuneLite API'
        },
        xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: 'Placeholder',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          title: {
            text: 'Temperature',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Placeholder',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          labels: {
            format: 'Placeholder',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 100,
          floating: true,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
        },
        series: [{
          name: 'Volume Sold at High Price',
          type: 'column',
          yAxis: 1,
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          tooltip: {
            valueSuffix: ' mm'
          }
      
        }, {
          name: 'Temperature',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix: '°C'
          }
        }]
    }



const GraphPanel = () => {
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default GraphPanel