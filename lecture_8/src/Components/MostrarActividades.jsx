import React from 'react'
import { Box } from '@mui/material'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);


function MostrarActividades() {
  const data = {
    labels: ['Correr', 'Nadar', 'Gym', 'Estudio', 'Dormir'],
    datasets: [
      {
        label: 'Actividades del día',
        data: [2, 1, 8, 2, 8],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        borderColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        borderWidth: 1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + ' horas';
          }
        }
      }
    },
  };

  return (
    <>
      <Box sx={{ width: '25rem', height: 'auto', margin: 'auto' }}>
        <h2>Actividades de la ultima semana</h2>
        <Doughnut data={data} options={options} />
      </Box>
    </>
  )
}


export default MostrarActividades