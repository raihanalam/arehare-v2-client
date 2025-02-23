import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', // Responsive grid
  gap: '20px',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Adjust grid for small screens
  },
}));

const Card = styled(Box)({
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    '& .card-content': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const Image = styled('img')({
  width: '600px',
  height: '300px',
  objectFit: 'cover',
});

const CardContent = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '50px 0',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  textAlign: 'center',
  // padding: '140px',
  opacity: 0,
  transform: 'translateY(100%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
});

const portfolioCards = [
  {
    src: 'assets/images/services/service-11.jpg',
    title: 'Shopify Ecommerce Store ',
    link: '/card-1',
  },
  {
    src: 'assets/images/services/service-15.jpg',
    title: 'Professional Website Development',
    link: '/card-2',
  },
  {
    src: 'assets/images/services/service-14.jpg',
    title: 'E-Commerce Store Setup',
    link: '/card-3',
  },
  {
    src: 'assets/images/services/service-17.jpg',
    title: 'Custom Mobile App Development',
    link: '/card-4',
  },
  {
    src: 'assets/images/services/service-18.jpg',
    title: 'Digital Marketing Solutions',
    link: '/card-5',
  },
  {
    src: 'assets/images/services/service-21.jpg',
    title: 'SEO and Content Optimization',
    link: '/card-6',
  },
];

const HoverCardComponent = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant='h3' sx={{ mt: 10, mb: 5, textAlign: 'center' }}>
        Some Works Of Our Experts
      </Typography>
      <CardContainer>
        {portfolioCards.map((card, index) => (
            <Card key={index}>
              <Image src={card.src} alt={card.title} />
              <CardContent className="card-content">
                <Typography variant="h6">{card.title}</Typography>
              </CardContent>
            </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default HoverCardComponent;
