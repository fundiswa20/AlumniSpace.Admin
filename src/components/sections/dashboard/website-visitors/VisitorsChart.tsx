import { SxProps, useTheme } from '@mui/material';
import { fontFamily } from 'theme/typography';
import { useMemo } from 'react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { PolarComponent, TooltipComponent, GraphicComponent } from 'echarts/components';
import ReactEchart from 'components/base/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';

echarts.use([PolarComponent, TooltipComponent, GraphicComponent, BarChart, CanvasRenderer]);

interface PolarBarChartProps {
  chartRef: React.RefObject<EChartsReactCore>;
  sx?: SxProps;
}

const VisitorsChart = ({ chartRef, ...rest }: PolarBarChartProps) => {
  const theme = useTheme();

  const option = useMemo(
    () => ({
      polar: {
        radius: [80, '75%'],
      },
      angleAxis: {
        max: 100,
        startAngle: 180,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      radiusAxis: {
        show: false,
        type: 'category',
        data: ['South African', 'International'],
      },
      tooltip: {},
      series: [
        {
          type: 'bar',
          data: [
            {
              type: 'International',
              value: 30,
              itemStyle: {
                color: theme.palette.secondary.main,
              },
            },
            {
              type: 'South African',
              value: 70,
              itemStyle: {
                color: theme.palette.secondary.lighter,
              },
            },
            // {
            //   type: 'Organic',
            //   value: 80,
            //   itemStyle: {
            //     color: theme.palette.primary.main,
            //   },
            // },
          ],
          coordinateSystem: 'polar',
          barCategoryGap: '35%',
          label: {
            show: false,
          },
        },
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: 'middle',
          style: {
            text: '15K',
            fill: theme.palette.text.primary,
            fontSize: theme.typography.h3.fontSize,
            fontFamily: fontFamily.workSans,
            fontWeight: 500,
            letterSpacing: 1,
          },
        },
      ],
    }),
    [theme],
  );

  return <ReactEchart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default VisitorsChart;
