import React, { useState } from 'react';
import { Button, Typography, Box, Container, TextField, MenuItem, InputAdornment, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

import { styled, keyframes } from '@mui/system';

// Slide in animation for the search bar from the bottom
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const fadeInUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
// Typing effect animation for the hero text
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Gradient background
const StyledHero = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(10, 2),
  background: 'linear-gradient(135deg, #4e003d, #fff)', // Velvet and blue-green gradient
  color: '#fff',
  textAlign: 'center',
}));

// Styling for the hero text
const HeroTextContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const StyledHeroText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3rem',
  whiteSpace: 'wrap',
  animation: `${slideInFromLeft} 1.5s ease-out`, // Slide in from the left
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

// Styled search bar container
const StyledSearchBar = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px', // Long width for the search bar
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  animation: `${slideInFromBottom} 1.5s ease-out`,
}));

const serviceOptions = [
  { value: 'AI Integration', label: 'AI Integration' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Graphic Design', label: 'Graphic Design' },
  { value: 'SEO Services', label: 'SEO Services' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    service: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <StyledHero>
      <Container>
        {/* Hero Text */}
        <HeroTextContainer sx={{mb:5}}>
          <StyledHeroText variant="h2">Transforming Ideas Into Reality.</StyledHeroText>
          <Typography variant="body1" paragraph sx={{  animation: `${fadeInUp} 1.5s ease-out`,}}>
            Revolutionize your world with the next generation of digital experiences, right where you live.
          </Typography>
          
        </HeroTextContainer>
        {/* Search Bar */}
        <StyledSearchBar
          // label="Search Services"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={formData.service}
          onChange={handleFormChange}
          name="service"
          placeholder="Enter service or keyword"
          variant="outlined"
          fullWidth
          // select
        >
          {serviceOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSearchBar>
      </Container>
    </StyledHero>
  );
}
