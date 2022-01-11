import {React} from 'react'
import './GraphPanel.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { SpinnerInfinity } from 'spinners-react'

const options = {
      chart: {
          zoomType: 'xy',
          borderRadius: 5,
          shadow: true,
          spacing: 20,
          height: 500,
      },
      subtitle: {
        text: 'Source: OSRS Wiki / RuneLite API'
      },
      xAxis: {},
      yAxis: [{ // Primary yAxis
        labels: {
          data: [],
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Gold Price',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }, { // Secondary yAxis
        title: {
          text:'',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }],
      tooltip: {
        shared: true
      },
  }

const GraphPanel = ({ timeSeriesData, itemName }) => {

    let avgHighArray = [];
    let avgLowArray = [];
    let xAxisPlot = [];
    function buildAxis() {
      timeSeriesData.forEach(element => {
        avgHighArray.push(element.avgHighPrice);
        avgLowArray.push(element.avgLowPrice);
        xAxisPlot.push(new Date(element.timestamp * 1000).toLocaleDateString())
      });
    }

    if (timeSeriesData) { buildAxis(); }

    let xAxis = [{
      categories: xAxisPlot,
      crosshair: true,
      labels: {
        step: 5,
        rotation: -60
      }
    }]
    let xAxisHighPrice = {
      name: 'High Price',
      type: 'spline',
      data: avgHighArray,
      tooltip: {
        valueSuffix: "gp"
      }
    }
    let xAxisLowPrice = {
      name: 'Low Price',
      type: 'spline',
      data: avgLowArray,
      tooltip: {
        valueSuffix: "gp"
      }
    }
    let title = {
      text: itemName,
    }

    options.series = [xAxisHighPrice, xAxisLowPrice];
    options.xAxis = xAxis;
    options.title = title;

    if (timeSeriesData) {
      return (
          <HighchartsReact highcharts={Highcharts} options={options} />
      )
    } else {
      return <SpinnerInfinity />
    }
}

export default GraphPanel