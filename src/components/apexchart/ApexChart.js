import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ title, subtitle, seriesData, categories, yAxisMin, yAxisMax }) => {
  // Dynamically generate colors based on the number of series
  const colors = seriesData.length === 1 ? ['#cee8f5', '#2980b9'] : ['#cee8f5', '#2980b9', '#a8d0e6', '#3c8dbc'];

  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // Handle click event here if needed
        },
      },
      toolbar: {
        show: false, // Hides the menu icon
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: seriesData.length === 1, // Use distributed colors for single series
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: seriesData.length > 1, // Show legend only if there are multiple series
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: colors.slice(0, categories.length),
          fontSize: '16px',
        },
      },
    },
    yaxis: {
      tickAmount: 4, // This sets the number of ticks on the y-axis
      min: yAxisMin,        // Minimum value of the y-axis
      max: yAxisMax,      // Maximum value of the y-axis
      labels: {
        formatter: (value) => value.toFixed(0), // Ensures the labels are integers
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <div className='wpa-flex wpa-h3-font-size wpa-graph-heading'>
          <p className='wpa-flex wpa-gap-10 wpa-font-weight-600'>
            <h3>{title}</h3> <h3>{subtitle}</h3>
          </p>
          <p className='wpa-flex wpa-gap-10 wpa-h3-font-size wpa-font-weight-600'>
            <h3>{title}</h3> <h3>{subtitle}</h3>
          </p>

        </div>
        <ReactApexChart options={options} series={seriesData} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
