import React, { useState } from 'react';
import { Container, Typography, Box, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const reviews = [
  {
    name: 'Kay Kim, Co-Founder',
    company: 'Rooted',
    quote: "It's extremely exciting that Arehare has freelancers from all over the world — it broadens the talent pool. One of the best things about Arehare is that while we're sleeping, someone's working.",
    imageSrc: 'assets/images/products/service-7.jpg', // replace with actual image URL
  },
  {
    name: 'John Doe, CEO',
    company: 'TechCorp',
    quote: 'AreHare has revolutionized our workflow. We can now hire freelancers to handle our projects 24/7, which increases our productivity.',
    imageSrc: 'assets/images/products/service-8.jpg', // replace with actual image URL
  },
  // Add more reviews as needed
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
    <Container maxWidth="xl" sx={{ position: 'relative', padding: '2rem 0' }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ mt:10, mb:5, textAlign:'center' }}
      >
        What they're saying about AreHare
      </Typography>

      <Card sx={{ display: 'flex', width: '100%', position: 'relative', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
        {/* Left Side: Image */}
        <CardMedia
          component="img"
          image={imageSrc}
          alt={`${name} image`}
          sx={{ width: '400px', height:'400px', objectFit: 'cover', borderRadius: '20px' }}
        />

        {/* Right Side: Text */}
        <CardContent sx={{ width: '60%', padding: '2rem', textAlign:'justify' }}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}
          >
            {quote}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {name}, {company}
          </Typography>
        </CardContent>

        {/* Previous Arrow */}
        <IconButton
          onClick={handlePrevReview}
          sx={{  position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.4)', }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Next Arrow */}
        <IconButton
          onClick={handleNextReview}
          sx={{  position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.4)', }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Card>
    </Container>
  );
};

export default ReviewSlider;
