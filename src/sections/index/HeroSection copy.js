import React, { useState } from 'react';
import { Button, Typography, Box, Container, Dialog, DialogTitle, DialogContent, TextField, MenuItem, DialogActions, Snackbar, Alert } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Link from 'next/link';

// Typing effect animation for the hero text
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: orange; }
`;

// Animation for buttons to appear from the background
const buttonAppear = keyframes`
  from {
    transform: translateZ(-100px);
    opacity: 0;
  }
  to {
    transform: translateZ(0);
    opacity: 1;
  }
`;

const StyledHero = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align content to the left
  padding: theme.spacing(10, 2),
  color: '#fff',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 2),
  },
  // Add blur and dark overlay
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
    backdropFilter: 'blur(8px)', // Blur effect
    zIndex: 1, // Ensures the overlay is behind the content
  },
  '& > *': {
    position: 'relative',
    zIndex: 2, // Ensures the content is above the overlay
  },
}));

const StyledHeroText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '2px solid orange', // The caret effect
  width: 'auto', // Limit the width for typing effect
  animation: `${typing} 3s steps(40, end), ${blinkCaret} 1s step-end infinite`, // Typing animation
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));
// Animation for buttons
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


const StyledButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  gap: theme.spacing(2),
  animation: `${fadeInUp} 1s ease-in-out`,
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

// Service options for the dropdown
const serviceOptions = [
  { value: 'AI Integration', label: 'AI Integration' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Graphic Design', label: 'Graphic Design' },
  { value: 'SEO Services', label: 'SEO Services' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
];

// Hero Section Component
export default function HeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., API call)
    setDialogOpen(false);
    setSnackbarOpen(true); // Show Snackbar on submit
  };

  return (
    <StyledHero>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, // Behind the overlay
        }}
      >
        <source src="/assets/videos/bg_video.webm" type="video/webm" />
      </video>

      <Container>
        <StyledHeroText variant="h2">Transforming Ideas Into Reality.</StyledHeroText>
        <Typography variant="body1" paragraph>
          Revolutionize your world with the next generation of digital experiences, right where you live.
        </Typography>
        <StyledButtonGroup>
          <Button variant="contained" color="primary" size="large" onClick={handleDialogOpen}>
            Get Started
          </Button>
          <Link href="/learn-more" passHref>
            <Button variant="outlined" color="inherit" size="large" sx={{ color: '#fff' }}>
              Learn More
            </Button>
          </Link>
        </StyledButtonGroup>

        {/* Dialog for Lead Form */}
        <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                fullWidth
                required
                type="email"
                margin="normal"
              />
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                fullWidth
                required
                type="tel"
                margin="normal"
              />
              <TextField
                label="Service"
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                fullWidth
                select
                required
                margin="normal"
              >
                {serviceOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  Captcha Placeholder
                </Typography>
              </Box>
              <DialogActions>
                <Button onClick={handleDialogClose} color="inherit">
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>

        {/* Snackbar for form submission */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
            Your message has been sent successfully!
          </Alert>
        </Snackbar>
      </Container>
    </StyledHero>
  );
}
