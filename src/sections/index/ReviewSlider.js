import React, { useState } from 'react';
import { Container, Typography, Box, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const reviews = [
  {
    name: 'Kay Kim, Co-Founder',
    company: 'Rooted',
    quote: "It's extremely exciting that AreHare has freelancers from all over the world — it broadens the talent pool. One of the best things about AreHare is that while we're sleeping, someone's working.",
    imageSrc: '/assets/images/services/service-7.jpg',
  },
  {
    name: 'John Doe, CEO',
    company: 'TechCorp',
    quote: 'AreHare has revolutionized our workflow. We can now hire freelancers to handle our projects 24/7, which increases our productivity.',
    imageSrc: '/assets/images/services/service-8.jpg',
  },
];

const ReviewSlider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const { name, company, quote, imageSrc } = reviews[currentReviewIndex];

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', py: 8 }}>
      {/* Section Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 700, mb: 6 }}
      >
        What They're Saying About AreHare
      </Typography>

      {/* Quote Icon */}
      <Box
        sx={{
          position: 'absolute',
          // top: { xs: 40, md: 200 },
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: '50%',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}
      >
        <FormatQuoteIcon fontSize="large" />
      </Box>

      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          p: { xs: 3, md: 5 },
          backgroundColor: '#f9f9f9',
          boxShadow: 3,
          borderRadius: '20px',
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        {/* Image with Polygon Shape */}
        <CardMedia
          component="img"
          image={imageSrc}
          alt={`${name} image`}
          sx={{
            width: { xs: '60%', md: '350px' },
            height: { xs: 'auto', md: '300px' },
            objectFit: 'cover',
            borderRadius: '10px',
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
            mb: { xs: 3, md: 0 }
          }}
        />

        {/* Quote & Info */}
        <CardContent sx={{ maxWidth: '600px' }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontStyle: 'italic', fontWeight: 500 }}
          >
            "{quote}"
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ fontWeight: 600, mt: 2 }}
          >
            {name}, {company}
          </Typography>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrevReview}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNextReview}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Container>
  );
};

export default ReviewSlider;
