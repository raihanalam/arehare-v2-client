import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Card, Typography, Stack, Avatar, IconButton, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import { fCurrency } from '../../../utils/formatNumber';
import Label from '../../../components/label';

// Styled components
const StyledProductImg = styled('img')({
  width: '100%',
  height: 240, // Adjusted height
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out', // Add transition effect
  '&:hover': {
    transform: 'scale(1.05)', // Slight zoom on hover
  },
  
});


const StyledAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  border: '2px solid #fff',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object.isRequired, // Ensure product is always passed
};

export default function ShopProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <Card sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative', maxWidth: 350 }}>
      {/* Image with Navigation */}
      <Box sx={{ position: 'relative' }}>
        {product?.status && (
          <Label
            variant="filled"
            color={(product.status === 'Featured' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {product.status}
          </Label>
        )}
        <StyledProductImg src={product.images[currentImageIndex]} alt={product.name} />
        {/* Previous Button */}
        <IconButton
          onClick={handlePrevImage}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        {/* Next Button */}
        <IconButton
          onClick={handleNextImage}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Service Information */}
      <Stack spacing={2} sx={{ p: 2 }}>
        {/* Service Title */}
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
        </Link>

        {/* User Avatar, Ratings and Count */}

        <Stack direction="row" alignItems="center" spacing={1}>
          <StyledAvatar alt={product.user.name} src={product.user.avatar} />
          <Stack>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {product.user.name}
            </Typography>
            <Stack direction="row">
              <Rating value={product.rating} precision={0.5} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                ({product.ratingCount})
              </Typography>
            </Stack>
          </Stack>


        </Stack>



        {/* Service Price */}
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          Starts from {fCurrency(product.price)}
        </Typography>
      </Stack>
    </Card>
  );
}
