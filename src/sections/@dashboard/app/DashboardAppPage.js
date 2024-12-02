// Component
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../../../components/iconify';

import AppWidgetSummary from './AppWidgetSummary';
import AppTrafficBySite from './AppTrafficBySite';
import AppNewsUpdate from './AppNewsUpdate';
import AppCurrentVisits from './AppCurrentVisits';
import AppOrderTimeline from './AppOrderTimeline';
import AppTasks from './AppTasks';

const AppWebsiteVisits = dynamic(() => import('./AppWebsiteVisits'), { ssr: false });
const AppConversionRates = dynamic(() => import('./AppConversionRates'), { ssr: false });
const AppCurrentSubject = dynamic(() => import('./AppCurrentSubject'), { ssr: false });

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  const [newsData, setNewsData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const news = [...Array(5)].map((_, index) => ({
      id: faker.datatype.uuid(),
      title: faker.company.catchPhrase(),
      description: faker.lorem.sentence(),
      image: `/assets/images/covers/cover_${index + 1}.jpg`,
      postedAt: faker.date.recent(),
    }));

    setNewsData(news);

    const orders = [...Array(5)].map((_, index) => ({
      id: faker.datatype.uuid(),
      title: [
        'New proposal submitted',
        'Invoice #234 has been paid',
        'Client approved the milestone',
        'Project #XF-987 delivery scheduled',
        'Payment received for Project #XF-567',
      ][index],
      type: `order${index + 1}`,
      time: faker.date.past(),
    }));

    setOrderData(orders);
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          {/* Widget Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Completed Projects" total={128} icon={'material-symbols:check-circle'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pending Proposals" total={45} color="info" icon={'mdi:lightbulb-outline'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Earnings This Month" total="$12,345" color="warning" icon={'material-symbols:attach-money'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Unread Messages" total={15} color="error" icon={'material-symbols:mail-outline'} />
          </Grid>

          {/* Service Visits Chart */}
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Service Visits"
              subheader="(+43%) increase compared to last month"
              chartLabels={[
                '01/11/2023',
                '02/11/2023',
                '03/11/2023',
                '04/11/2023',
                '05/11/2023',
                '06/11/2023',
                '07/11/2023',
                '08/11/2023',
                '09/11/2023',
                '10/11/2023',
                '11/11/2023',
              ]}
              chartData={[
                {
                  name: 'Proposals Viewed',
                  type: 'column',
                  fill: 'solid',
                  data: [10, 20, 15, 25, 30, 40, 35, 45, 50, 60, 55],
                },
                {
                  name: 'New Proposals',
                  type: 'area',
                  fill: 'gradient',
                  data: [5, 10, 8, 15, 20, 18, 25, 30, 28, 35, 32],
                },
                {
                  name: 'Projects Completed',
                  type: 'line',
                  fill: 'solid',
                  data: [2, 3, 5, 7, 10, 8, 12, 15, 18, 20, 22],
                },
              ]}
            />
          </Grid>

          {/* Timeline */}
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Project Updates"
              list={orderData || []}
            />
          </Grid>

          {/* News/Proposals Updates */}
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Latest Proposals"
              list={newsData || []}
            />
          </Grid>

          {/* Recent Tasks */}
          <Grid item xs={12} md={6} lg={4}>
            <AppTasks
              title="Recent Tasks"
              list={[
                { id: '1', label: 'Finalize project report' },
                { id: '2', label: 'Prepare proposal for Client A' },
                { id: '3', label: 'Schedule meeting with Client B' },
                { id: '4', label: 'Review feedback on Project X' },
                { id: '5', label: 'Submit final invoice for Project Y' },
                { id: '6', label: 'Research market trends for new service' },
                { id: '7', label: 'Review feedback on Project X' },
                { id: '8', label: 'Submit final invoice for Project Y' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
