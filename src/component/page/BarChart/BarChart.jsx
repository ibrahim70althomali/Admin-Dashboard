import React from 'react'
import Bar from './Bar'
import TextHeader from '../../TextHeader/TextHeader';



const BarChart = () => {
  // const theme = useTheme();
  return (
   <>
   <TextHeader title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)" />
   <Bar />
   </>
  )
}

export default BarChart
