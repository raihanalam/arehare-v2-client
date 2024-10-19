import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
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
  // height: '300px',
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
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CardContent = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  opacity: 0,
  transform: 'translateY(100%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
});

const DiscoverButton = styled(Button)({
  marginTop: '10px',
  backgroundColor: '#fff',
  color: '#000',
  '&:hover': {
    backgroundColor: '#ddd',
  },
});

const imageCards = [
  {
    src: 'assets/images/products/service-11.jpg',
    title: 'Card 1',
    link: '/card-1',
  },
  {
    src: 'assets/images/products/service-15.jpg',
    title: 'Card 2',
    link: '/card-2',
  },
  {
    src: 'assets/images/products/service-14.jpg',
    title: 'Card 3',
    link: '/card-3',
  },
  {
    src: 'assets/images/products/service-17.jpg',
    title: 'Card 4',
    link: '/card-4',
  },
  {
    src: 'assets/images/products/service-18.jpg',
    title: 'Card 5',
    link: '/card-5',
  },
  {
    src: 'assets/images/products/service-21.jpg',
    title: 'Card 6',
    link: '/card-6',
  },
  {
    src: 'assets/images/products/service-22.jpg',
    title: 'Card 7',
    link: '/card-7',
  },
  {
    src: 'assets/images/products/service-16.jpg',
    title: 'Card 8',
    link: '/card-8',
  },
  {
    src: 'assets/images/products/service-13.jpg',
    title: 'Card 8',
    link: '/card-8',
  },
];

const HoverCardComponent = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant='h3' sx={{mt:10, mb:5, textAlign: 'center'}}>
        Some Works Of Our Freelancers
      </Typography>
      <CardContainer>
        {imageCards.map((card, index) => (
          <a key={index} href={card.link} style={{ textDecoration: 'none' }}>
            <Card>
              <Image src={card.src} alt={card.title} />
              <CardContent className="card-content">
                <Typography variant="h6">{card.title}</Typography>
                <DiscoverButton variant="contained">Discover</DiscoverButton>
              </CardContent>
            </Card>
          </a>
        ))}
      </CardContainer>
    </Container>
  );
};

export default HoverCardComponent;
