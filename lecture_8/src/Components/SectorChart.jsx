import React from 'react'
import {PieChart, Pie, Tooltip} from 'recharts';

const data = [
  { name: 'Manzanas', value: 400 },
  { name: 'Peras', value: 300 },
  { name: 'Cerezas', value: 300 },
  { name: 'Duraznos', value: 200 },
];

const SectorChart = () => {
  return (
    <div>
      <h3>Ventas por fruta</h3>
      <PieChart width={400} height={400}>
        <Pie data={data}
        dataKey="value"
        nameKey='name'
        cx='50%'
        cy='50%' />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default SectorChart