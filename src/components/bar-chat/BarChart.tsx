import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { data } from '@utils/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Averuage Haulage cycles',
    },
  },
};

const labels = ['Spot time load', 'Spot time dump', 'Spot time haul', 'Spot time load', 'Load time', 'Full haul'];

export const graphdata = {
  labels,
  datasets: [
    {
      label: 'to crusher',
      data: data.haulage_cycles.map((cycle) => cycle.to_crusher),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'to dump',
      data: data.haulage_cycles.map((cycle) => cycle.to_dump),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
 function BarChart() {
  return <Bar options={options} data={graphdata} />;
}

export default BarChart