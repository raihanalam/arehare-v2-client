import React from 'react';
import { Box, Typography, Button, AvatarGroup, Avatar, Container } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const SectionContainer = styled(Box)(({ theme }) => ({
  // backgroundColor: 'primary.main', // Dark Green background for aesthetic appeal
  padding: '40px 20px',
  borderRadius: '8px',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TextContent = styled(Box)({
  maxWidth: '500px',
});

const ImageContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '400px',
  marginTop: '20px',
  [theme.breakpoints.down('md')]: {
    marginTop: '40px',
  },
}));

const FloatingBox = styled(Box)({
  position: 'absolute',
  bottom: '-40px',
  left: '-20px',
  backgroundColor: '#1de9b6',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  color: '#000',
});

const CallToActionBtn = styled(Button)({
  backgroundColor: '#1de9b6',
  color: '#000',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#ffd54f',
  },
});

const BuilderSection = () => {
  return (
    <Container maxWidth="xl" sx={{mt: 10}}>

      <SectionContainer sx={{ padding: '60px' ,           backgroundColor: 'primary.main',}}>
        {/* Text Section */}
        <TextContent>
          <Typography variant="h3" gutterBottom>
            Introducing AI-Powered Website Builder
          </Typography>
          <Typography variant="h6" gutterBottom>
            Get a tailor-made website for your business in minutes
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our AI-based website builder will design, customize, and optimize your business site according to your unique needs.
            Simply provide the details, and let our AI handle the rest.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Key Features:
          </Typography>
          <ul style={{paddingLeft: '20px', textAlign: 'left'}}>
            <li>Automated, AI-driven design process</li>
            <li>Fully responsive layouts</li>
            <li>Customizable templates based on industry</li>
            <li>SEO & performance optimization</li>
            <li>Even Free Custom Domain</li>
          </ul>
          <CallToActionBtn variant="contained">Coming Soon...</CallToActionBtn>
        </TextContent>

        {/* Image and Floating Box Section */}
        <ImageContent>
          <Image
            src="/assets/images/services/service-24.jpg"
            alt="AI Builder Example"
            height={100}
            width={100}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <FloatingBox>
            <Typography variant="body2">AI-Generated Design</Typography>
            <Typography variant="h6" color="black">$5.00/month</Typography>
          </FloatingBox>
        </ImageContent>
      </SectionContainer>
    </Container>

  );
};

export default BuilderSection;
