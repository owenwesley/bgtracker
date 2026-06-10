export const a1cOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'A1C Chart',
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        color: '#000',
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

export const a1cOptions120Day = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'A1C Chart',
    },
    tooltip: {
      enabled: true,
      callbacks: {
        title: (tooltipItems) => {
          if (!tooltipItems || tooltipItems.length === 0) return '';
          return `Day: ${tooltipItems[0].label}`;
        },
        label: (tooltipItem) => {
          const a1c = tooltipItem.formattedValue;
          const avgData = tooltipItem.dataset?.avg;
          const avgValue = Array.isArray(avgData)
            ? avgData[tooltipItem.dataIndex]
            : avgData;
          const lines = [`A1C: ${a1c} %`];
          if (avgValue !== undefined && avgValue !== null && avgValue !== '') {
            lines.push(`Avg: ${avgValue} mg / dl`);
          }
          return lines;
        },
      },
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
    tooltip: {
      enabled: true,
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
    tooltip: {
      enabled: true,
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
