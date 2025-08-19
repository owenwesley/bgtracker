export const a1cOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'A1C Chart',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#000',
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};

export const bpOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Blood Pressure Chart',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#000',
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};

export const bgOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Blood Glucose Chart',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: '#000',
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};
