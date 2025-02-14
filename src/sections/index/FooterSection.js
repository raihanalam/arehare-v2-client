import { Box, Typography, Container, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#000000', // Change to black background
      color: '#ffffff', // Change text color to white
      mt: 10
    }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            color: '#ffffff', // Ensure text color is white
            py: 6,
            px: 4,
          }}
        >
          <Grid container spacing={4} justifyContent="space-between">
            {/* About Section */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                About AreHare
              </Typography>
              <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                AreHare offers top-notch digital solutions for businesses, including web development, app development, digital marketing, and more.
              </Typography>
            </Grid>

            {/* Pages Menu */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/about" underline="none" sx={{ color: '#b3b3b3' }}>
                  About Us
                </Link>
                <Link href="/services" underline="none" sx={{ color: '#b3b3b3' }}>
                  Services
                </Link>
                <Link href="/contact" underline="none" sx={{ color: '#b3b3b3' }}>
                  Contact
                </Link>
                <Link href="/blog" underline="none" sx={{ color: '#b3b3b3' }}>
                  Blog
                </Link>
              </Box>
            </Grid>

            {/* Social Media Section */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <IconButton sx={{ color: '#b3b3b3' }} href="https://www.facebook.com" target="_blank">
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: '#b3b3b3' }} href="https://www.twitter.com" target="_blank">
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: '#b3b3b3' }} href="https://www.instagram.com" target="_blank">
                  <Instagram />
                </IconButton>
                <IconButton sx={{ color: '#b3b3b3' }} href="https://www.linkedin.com" target="_blank">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>

            {/* Payment Methods Section */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" gutterBottom>
                We Accept
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <Image src="/assets/images/Visa1.png" alt="Visa" width="25" height="15" />
                <Image src="/assets/images/Mastercard.png" alt="MasterCard" width="20" height="15" />
                <Image src="/assets/images/Stripe.png" alt="Stripe" width="30" height="15"/>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Footer */}
          <Box sx={{ textAlign: 'center', pt: 4, borderTop: '1px solid #b3b3b3', mt: 6 }}>
            <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
              © {new Date().getFullYear()} AreHare Inc. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
