import React from 'react'
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from '@mui/material';


// من مكتبه nivo
const data = [
  {
    year: 2019,
    Spain: 900,
    France: 1400,
    KSA: 1700,
  },

  {
    year: 2020,
    Spain: 1000,
    France: 1500,
    KSA: 1800,
  },

  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    KSA: 1900,
  },

  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    KSA: 2000,
  },

  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    KSA: 2080,
  },
];


const Bar = ({isDahboard = false}) => {
    const theme = useTheme();

  
    return (
    <Box sx={{height: isDahboard?  "300px"  :  "77vh"}}>
    <ResponsiveBar
    theme={{
      // "background": "#ffffff",
      "text": {
          "fontSize": 13,
          "fill": theme.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "axis": {
          "domain": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              }
          },
          "legend": {
              "text": {
                  "fontSize": 22,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "ticks": {
              "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
              },
              "text": {
                  "fontSize": 12,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "grid": {
          "line": {
              "stroke": "#dddddd",
              "strokeWidth": 1
          }
      },
      "legends": {
          "title": {
              "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "ticks": {
              "line": {},
              "text": {
                  "fontSize": 10,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "annotations": {
          "text": {
              "fontSize": 13,
              "fill": theme.palette.text.primary,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          }
      },
      "tooltip": {
          "container": {
              "background": "#ffffff",
              "fontSize": 12
          },
          "basic": {},
          "chip": {},
          "table": {},
          "tableCell": {},
          "tableCellValue": {}
      }
  }}
       
  
  
       data={data}
        keys={[
            'Spain',
            'France',
            'KSA',
           
        ]}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set1' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDahboard ? null : 'Year',
            legendPosition: 'middle',
            legendOffset: 40,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDahboard ? null : "salary/month",
            legendPosition: 'middle',
            legendOffset: -50,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}

        legends={[
           
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}

        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    </Box> 
  )
}

export default Bar
