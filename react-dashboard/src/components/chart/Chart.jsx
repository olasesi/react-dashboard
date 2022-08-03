import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css';


export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className="wrapper-chart">
      <div className="heading">{title}</div>
      
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          
          
         
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Tooltip />
          
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
          {grid && <CartesianGrid strokeDasharray="5 5" stroke="white"/>}
        </LineChart>
      </ResponsiveContainer>

      </div>
  )
}
