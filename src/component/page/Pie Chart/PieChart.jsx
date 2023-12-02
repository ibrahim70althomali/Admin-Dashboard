import React from 'react'
import Pie from './Pie'
import TextHeader from '../../TextHeader/TextHeader';

const PieChart = () => {
  return (
    <div>
    <TextHeader title="Pie Chart" subTitle="Simple Pie Chart"/>

      <Pie />
   </div>
  )
}

export default PieChart
