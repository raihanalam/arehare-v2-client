import PropTypes from 'prop-types';
// @mui
import { Grid, Box } from '@mui/material';
import ShopServiceCard from './ServiceCard';

// ----------------------------------------------------------------------

ServiceList.propTypes = {
  services: PropTypes.array.isRequired,
};

export default function ServiceList({ services, ...other }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centers items horizontally
        alignItems: 'center', // Centers items vertically
        flexWrap: 'wrap', // Allows wrapping for smaller screens
        gap: 3, // Adds spacing between grid items
        mt: 3, // Optional: Adds top margin
      }}
      {...other}
    >
      {services?.map((service) => (
        <Grid
          key={service.id}
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center', // Ensures individual card is centered
          }}
        >
          <ShopServiceCard service={service} />
        </Grid>
      ))}
    </Box>
  );
}

