// pages/service-details.js
import { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,

} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Navbar from '@/sections/index/NavSection';
import ReviewSection from '@/sections/services/ReviewSection';
import Breadcrumbs from '@/sections/services/Breadcrumbs';
import Packages from '@/sections/services/Packages';
import Header from '@/sections/services/Header';
import ImageGallery from '@/sections/services/ImageGallery';
import ProfileCard from '@/sections/services/ProfileCard';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



// Main Page
const ServiceDetails = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const packages = [
    { name: 'Basic', price: 50, delivery: '1 day', revisions: '-', source: 1, prototype: 1, features: ['Introduce and demonstrate'] },
    { name: 'Standard', price: 100, delivery: '7 days', revisions: 2, source: 1, prototype: 1, features: ['Engage and connect'] },
    { name: 'Premium', price: 140, delivery: '10 days', revisions: '-', source: 1, prototype: 1, features: ['Explain and Excite'] },
  ];

  const reviewStats = {
    averageRating: 4.8,
    totalReviews: 56,
    breakdown: [
      { stars: 5, count: 45 },
      { stars: 4, count: 8 },
      { stars: 3, count: 2 },
      { stars: 2, count: 1 },
      { stars: 1, count: 0 },
    ],
  };

  const reviews = [
    {
      name: 'John Doe',
      avatar: '/assets/images/avatars/user1.jpg',
      date: 'December 10, 2024',
      rating: 5,
      comment: 'Absolutely outstanding service! Highly recommend.',
    },
    {
      name: 'Jane Smith',
      avatar: '/assets/images/avatars/user2.jpg',
      date: 'December 5, 2024',
      rating: 4.5,
      comment: 'Great work, very professional. Would hire again.',
    },
    {
      name: 'Michael Johnson',
      avatar: '/assets/images/avatars/user3.jpg',
      date: 'November 20, 2024',
      rating: 4,
      comment: 'Good overall, but delivery could be faster.',
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>

      <Navbar />
      {/* Breadcrumbs */}
      <Breadcrumbs />
      {/* Header */}
      <Header />

      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item xs={12} md={8}>
          {/* Image Swiper */}
          <ImageGallery />

          {/* Description Section */}
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              Descriptions
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I’m a freelance writer with over sixteen years of experience creating engaging copy specializing in crafting content for social media marketing. There are many ways to develop and share an authentic story on platforms like Facebook, Twitter, Pinterest, and more.
            </Typography>
          </Box>

          {/* Skills Section */}
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Box display="flex" gap={2}>
              {['Content Writing', 'Digital Marketing', 'Social Media Marketing'].map((skill) => (
                <Button key={skill} sx={{ p: 1, border: '1px solid #ccc', borderRadius: 2 }}>
                  <Typography variant="body2">{skill}</Typography>
                </Button>
              ))}
            </Box>
          </Box>

          {/* Packages Section */}
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              Packages
            </Typography>
            <TableContainer sx={{textAlign: 'center'}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Packages</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name} >

                        <Typography variant='h6' mb={2}>
                          {pkg.name}
                        </Typography>
                        <Button sx={{
                          backgroundColor: '#1976d2',
                          color: '#fff',
                          '&:hover': { backgroundColor: '#115293' }
                        }} >Select</Button>
                      </TableCell>
                    ))}

                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Delivery Time</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}>{pkg.delivery}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell>Number of Revisions</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}>{pkg.revisions}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell>Source Code</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}> {pkg.source === 1 ? <CheckCircleOutlineIcon color="success" /> : '-'}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell>Prototype</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}> {pkg.prototype === 1 ? <CheckCircleOutlineIcon color="success" /> : '-'}</TableCell>
                    ))}
                  </TableRow>
                  {/* <TableRow>
                    <TableCell>Features</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}>{pkg.features.join(', ')}</TableCell>
                    ))}
                  </TableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* FAQ Section */}
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              FAQ
            </Typography>
            {[1, 2, 3, 4, 5].map((faq) => (
              <Accordion key={faq}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>What’s your process for creating engaging copywriting for me?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    I follow a structured process starting with understanding your goals, researching your audience, and crafting engaging and relevant content to capture their attention.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>


          <ReviewSection reviewStats={reviewStats} reviews={reviews} />
        </Grid>

        {/* Right Side */}
        <Grid item xs={10} md={4}>
          <Box sx={{ position: 'sticky', top: 80, display:'flex', flexDirection: 'column'}}>
            <Packages packages={packages} selectedTab={selectedTab} onSelect={setSelectedTab} />

            {/* Profile Card */}
            <ProfileCard />

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceDetails;
