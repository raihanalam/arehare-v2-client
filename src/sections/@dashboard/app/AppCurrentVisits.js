import dynamic from 'next/dynamic';
import { Card, CardHeader } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const StyledChartWrapper = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    flexDirection: 'row !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
  },

}));


export default function AppCurrentVisits({ title, subheader }) {


  const theme = useTheme();

  const chartData = [
    { label: 'America', value: 4344 },
    { label: 'Asia', value: 5435 },
    { label: 'Europe', value: 1443 },
    { label: 'Africa', value: 4443 },
  ]
  const chartColors = [
    theme.palette.primary.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.error.main,
  ]

  const chartLabels = chartData?.map((i) => i.label) || [];
  const chartSeries = chartData?.map((i) => i.value) || [];



  const chartOptions = {
    // chart: {
    //   className: 'apx-legend-position-top', // Add the custom class here
    // },
    colors: chartColors || [],
    labels: chartLabels,
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => seriesName,
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  };

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />
      <StyledChartWrapper dir="ltr">
        <ReactApexChart type="pie" series={chartSeries} options={chartOptions} height={280} />
      </StyledChartWrapper>
    </Card>
  );
}
