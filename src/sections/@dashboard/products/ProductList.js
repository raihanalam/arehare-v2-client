import PropTypes from 'prop-types';
// @mui
import { Grid, Box } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
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
      {products?.map((product) => (
        <Grid
          key={product.id}
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center', // Ensures individual card is centered
          }}
        >
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Box>
  );
}

