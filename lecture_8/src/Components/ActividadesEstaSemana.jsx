import React from 'react'
import Box from '@mui/material/Box';
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


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ActividadesEstaSemana(props) {
    
    
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
      <Box sx={{ width: '25rem', height: 'auto', margin: '1rem' }}>
        <h2>Actividades de esta semana</h2>
        <Bar data={props.data} options={options} />
      </Box>
    </>
  )
}

export default ActividadesEstaSemana