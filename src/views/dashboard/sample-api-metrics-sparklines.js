const chartLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const chartOptions = {
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
}

const metricsSparklines = [
  {
    metricData: {
      label: 'Yearly',
      value: 32680,
      delta: '+0.7%',
      deltaClass: 'success'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Yearly',
        pointRadius: 0,
        data: [0, 1.06, 0, 0.99, 0, 0, 2.13, 0, 0, 1.98, 0, 0.99]
      }
    ],
    chartOptions: chartOptions
  },
  {
    metricData: {
      label: 'Monthly',
      value: 4600,
      delta: '+2.3%',
      deltaClass: 'success'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Monthly',
        pointRadius: 0,
        data: [0, 1, 0, 0, 1, 0, 2, 0, 1, 1, 0, 3]
      }
    ],
    chartOptions: chartOptions
  },
  {
    metricData: {
      label: 'Daily',
      value: 300,
      delta: '-0.4%',
      deltaClass: 'danger'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Monthly',
        pointRadius: 0,
        data: [0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2]
      }
    ],
    chartOptions: chartOptions
  },
  {
    metricData: {
      label: 'Hourly',
      value: 26,
      delta: '+0.2%',
      deltaClass: 'success'
    },
    chartLabels: chartLabels,
    chartDatasets: [
      {
        label: 'Monthly',
        pointRadius: 0,
        data: [0, 1, 0, 0, 1, 0, 1, 0, 2, 1, 0, 3]
      }
    ],
    chartOptions: chartOptions
  }
]

export default metricsSparklines
