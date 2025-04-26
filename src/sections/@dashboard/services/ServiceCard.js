import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Card, Typography, Stack, Avatar, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import { fCurrency } from '../../../utils/formatNumber';
import Label from '../../../components/label';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { Favorite, Share, Star } from '@mui/icons-material';
import StreetviewIcon from '@mui/icons-material/Streetview';
import ReceiptIcon from '@mui/icons-material/Receipt';



// Styled components
const StyledServiceImg = styled('img')({
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

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: theme.shadows[6],
  },
  transition: "transform 0.3s ease-in-out",
}));

// ----------------------------------------------------------------------

ShopServiceCard.propTypes = {
  service: PropTypes.object.isRequired, // Ensure service is always passed
};

export default function ShopServiceCard({ service }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + service.images.length) % service.images.length
    );
  };

  return (
    <StyledCard sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative', width: 350, maxWidth: '100%' }}>
      {/* Image with Navigation */}
      <Box sx={{ position: 'relative' }}>
        {/* {service?.status && (
          <Label
            variant="filled"
            color={(service.status === 'Featured' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              left: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {service.status}
          </Label>
        )} */}
        <StyledServiceImg src={service.images[currentImageIndex]} alt={service.name} />
        {/* Favorite Icon */}
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.4)',
            borderRadius: '50%',
            boxShadow: 3,
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
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
        <Link href="/service-details" passHref legacyBehavior>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              mb: 1,
              mt: 2,
              fontSize: { xs: '1rem', sm: '1rem' },
              color: 'black',
              cursor: 'pointer',
              lineHeight: '1.5', // Adjust to control spacing between lines
              height: '3rem', // Ensures two lines of height
              overflow: 'hidden', // Prevents extra content from showing
              display: '-webkit-box', // Enables webkit box model for line control
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // Ensures the content does not exceed 2 lines
              textAlign: 'left', // Ensures consistent alignment
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {service.name}
          </Typography>
        </Link>



        {/* User Avatar, Ratings and Count */}

        <Stack direction="row" alignItems="center" spacing={1}>
          <StyledAvatar alt={service.user.name} src={service.user.avatar} />
          <Stack>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {service.user.name}
            </Typography>
            <Stack direction="row" sx={{fontSize: '12px', color: 'gray'}}>
              {/* <Rating value={service.rating} precision={0.5} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                ({service.ratingCount})
              </Typography> */}
              <Typography variant='body5' display="flex" alignItems="center" >
                <Star sx={{ mr: '5px', color: '#fc8c03', fontSize: '20px' }} />
                4.8 (50 ratings)
              </Typography>
              
              <Typography variant='body5' sx={{ml: '10px'}} display="flex" alignItems="center">
                <ReceiptIcon sx={{ mr: '5px', color: 'green',  fontSize: '20px' }} />120 sales</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        {/* Service Price */}
        <Box sx={{}} >
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            Starts from {fCurrency(service.price)}
          </Typography>
        </Box>
      </Stack>


    </StyledCard>
  );
}
