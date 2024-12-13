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
  Chip,
  Avatar,
  Stack

} from '@mui/material';
import StreetviewIcon from '@mui/icons-material/Streetview';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Favorite, Share, Star, Visibility } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Navbar from '@/sections/index/NavSection';

// Breadcrumbs Component
const Breadcrumbs = () => (
  <Box mb={2} pt={5}>
    <Typography variant="body1" color="text.secondary">
      {"Home > Services > Details"}
    </Typography>
  </Box>
);

// Header Component
const Header = () => (
  <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
    <Box>
      <Typography variant="h3">I will craft engaging social media marketing, copywriting</Typography>
     
      <Box display="flex" gap={2} mt={1} sx={{color: 'gray'}}>
      <Typography variant="body1" color="text.secondary">
        By Kianna Bie
      </Typography>
        <Typography variant="body2" display="flex" alignItems="center" >
          <Star sx={{ mr: '5px' }}/>
          4.8 (50 ratings)
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center" >
          <StreetviewIcon sx={{marginRight: '5px'}}/> 1.2k views
        </Typography>
        <Typography variant="body2" display="flex" alignItems="center">
           <ReceiptIcon sx={{marginRight: '5px'}}/>120 sales</Typography>
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
  <Box mt={3} sx={{border: '1', borderRadius: '20px', borderColor: 'gray'}}>
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
  const freelancer = 
  {
    id: 6,
    name: 'Lucy Haley',
    role: 'Human Resources',
    rating: 4.5,
    price: '$60/day',
    tags: ['Recruitment', 'Software'],
    avatar: '/path-to-avatar4.jpg',
    location: 'Los Angeles, USA',
    languages: 'English, German',
    intro: 'Experienced in recruitment processes.',
    featured: true,
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>

      <Navbar />
      {/* Breadcrumbs */}
      <Breadcrumbs  />

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
              <Avatar
                  alt={freelancer.name}
                  src={freelancer.avatar}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left ' }}>
                  <div style={{ display: "flex" }}>
                    <StarIcon sx={{ color: '#faaf00', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {freelancer.rating}
                    </Typography>
                  </div>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 3 }}>
                    {freelancer.role}
                  </Typography>
                </Box>

                <Box>
                  <Stack direction="row" justifyContent="left" spacing={1} sx={{ mt: 2 }}>
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2">{freelancer.location}</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="left" spacing={1} sx={{ mt: 1 }}>
                    <LanguageIcon fontSize="small" />
                    <Typography variant="body2">{freelancer.languages}</Typography>
                  </Stack>
                </Box>

                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                  {freelancer.intro}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {freelancer.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ mx: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>
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
