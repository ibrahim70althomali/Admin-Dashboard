import React from 'react'
import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo'
import {geo} from"./world_countries"
import {data} from "./data"
import Geograph from "./Geography"
import TextHeader from '../../TextHeader/TextHeader';

const GeographyChart = () => {
  
   return(

    <>
        <TextHeader title="Geography" subTitle="Simple Geography Chart" />
    <Geograph />
    </>
   )
}

export default GeographyChart
