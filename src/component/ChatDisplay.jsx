import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

function ChatDisplays() {
  const data = {
    labels: ['Fertilizer 1', 'Fertilizer 2', 'Fertilizer 3', 'Fertilizer 4', 'Fertilizer 5', 'Fertilizer 6', 'Fertilizer 7', 'Fertilizer 8', 'Fertilizer 9', 'Fertilizer 10'],
    datasets: [
      {
        label: 'Fertilizer Components (%)',
        data: [10, 20, 15, 30, 5, 25, 18, 23, 12, 8],
      },
    ],
  };

  return (
    <div>
      <h2>Fertilizer Components Chart</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="labels" />
        <YAxis title="Percentage (%)" />
        <Bar dataKey="data" />
      </BarChart>
    </div>
  );
}

export default ChatDisplays;
