// pages/service-details.js
import { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent, Button,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,

} from '@mui/material';
import { Favorite, Share, Star, Visibility } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Breadcrumbs Component
const Breadcrumbs = () => (
  <Box mb={3}>
    <Typography variant="body4" color="text.secondary">
      {"Home > Services > Details"}
    </Typography>
  </Box>
);

// Header Component
const Header = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
    <Box>
      <Typography variant="h3">I will craft engaging social media marketing, copywriting</Typography>
      <Typography variant="body1" color="text.secondary">
        By Kianna Bie | Supporter • Rochester • English
      </Typography>
      <Box display="flex" gap={2} mt={1}>
        <Typography variant="body2" display="flex" alignItems="center">
          <Star sx={{ color: '#FFD700' }} />
          4.8 (50 ratings)
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center">
          <Visibility /> 1.2k views
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center">• 120 sales</Typography>
      </Box>
    </Box>
    <Box>
      <IconButton>
        <Favorite />
      </IconButton>
      <IconButton>
        <Share />
      </IconButton>
    </Box>
  </Box>
);

// Packages Component
const Packages = ({ packages, selectedTab, onSelect }) => (
  <Box mt={3} >
    <Tabs value={selectedTab} onChange={(e, val) => onSelect(val)} variant="fullWidth">
      {packages.map((pkg) => (
        <Tab key={pkg.name} label={pkg.name} />
      ))}
    </Tabs>
    {packages.map((pkg, index) => (
      <Card key={pkg.name} hidden={selectedTab !== index} sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="h6">{pkg.name}</Typography>
          <Typography variant="h4">${pkg.price}</Typography>
          <Typography variant="body2">Delivery: {pkg.delivery}</Typography>
          <Typography variant="body2">Revisions: {pkg.revisions}</Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Continue
          </Button>
        </CardContent>
      </Card>
    ))}
  </Box>
);

// Main Page
const ServiceDetails = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const packages = [
    { name: 'Basic', price: 50, delivery: '1 day', revisions: '-', features: ['Introduce and demonstrate'] },
    { name: 'Standard', price: 100, delivery: '7 days', revisions: 2, features: ['Engage and connect'] },
    { name: 'Premium', price: 140, delivery: '10 days', revisions: '-', features: ['Explain and Excite'] },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Header */}
      <Header />

      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item xs={12} md={8}>
          {/* Image Swiper */}
          <Box>
            <Card>
              <CardMedia component="img" image="/assets/images/products/service-1.jpg" alt="Service Image" />
            </Card>
            <Box mt={2} display="flex" gap={1}>
              {[1, 2, 3, 4].map((image, index) => (
                <Card key={image} sx={{ width: 80, height: 80, cursor: 'pointer' }}>
                  <Image src={`/assets/images/products/service-${index + 1}.jpg`} width={80} height={80} alt={`Thumbnail ${image}`} />
                </Card>
              ))}
            </Box>
          </Box>

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
                <Box key={skill} sx={{ p: 1, border: '1px solid #ccc', borderRadius: 2 }}>
                  <Typography variant="body2">{skill}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Packages Section */}
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              Packages
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Packages</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}>{pkg.name}</TableCell>
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
                    <TableCell>Revisions</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}>{pkg.revisions}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell>Features</TableCell>
                    {packages.map((pkg) => (
                      <TableCell key={pkg.name}>{pkg.features.join(', ')}</TableCell>
                    ))}
                  </TableRow>
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

        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 80 }}>
            <Packages packages={packages} selectedTab={selectedTab} onSelect={setSelectedTab} />

            {/* Profile Card */}
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6">{'Thoms'}</Typography>
                <Typography variant="body2">{"Dhaka"}</Typography>
                <Box mt={2} display="flex" gap={2}>
                  <Button variant="outlined">See Profile</Button>
                  <Button variant="contained">Send Message</Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceDetails;
