import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay"; // Autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Box, Card, CardContent, Typography, Avatar, Chip, Rating, Container, IconButton, Stack, Divider, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

import SectionHeaderLeft from '../../components/section/SectionHeaderLeft';
import SectionHeaderRight from '@/components/section/SectionHeaderRight';

// Mock Data
const freelancers = [
  {
    id: 1,
    name: 'Kianna Ble',
    role: 'Supporter',
    rating: 4.3,
    price: '$200/day',
    tags: ['Recruitment', 'Supporter'],
    avatar: '/path-to-avatar1.jpg',
    location: 'New York, USA',
    languages: 'English, Spanish',
    intro: 'Passionate about supporting teams.',
  },
  {
    id: 2,
    name: 'Kevin Ble',
    role: 'Frontend Developer',
    rating: 4.8,
    price: '$450/month',
    tags: ['Developer', 'Software'],
    avatar: '/path-to-avatar2.jpg',
    location: 'San Francisco, USA',
    languages: 'English, French',
    intro: 'Building beautiful user interfaces.',
  },
  {
    id: 3,
    name: 'Thomas Shelby',
    role: 'Designer',
    rating: 4.0,
    price: '$21/hr',
    tags: ['Media Editor', 'UI/UX Design'],
    avatar: '/path-to-avatar3.jpg',
    location: 'London, UK',
    languages: 'English, Italian',
    intro: 'Creative thinker and problem solver.',
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    name: 'Thomas Shelby',
    role: 'Designer',
    rating: 4.0,
    price: '$21/hr',
    tags: ['Media Editor', 'UI/UX Design'],
    avatar: '/path-to-avatar3.jpg',
    location: 'New York, USA',
    languages: 'English, Spanish',
    intro: 'Creative thinker and problem solver.',
  },
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
  },
];
// const ArrowButton = styled(IconButton)(({ theme }) => ({
//   backgroundColor: "#fff",
//   boxShadow: theme.shadows[3],
//   "&:hover": {
//     backgroundColor: "#e0e0e0",
//   },
// }));

const TopRatedFreelancers = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4, px: 2 }}>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <SectionHeaderLeft
            title=" Top Rated Freelancers"
            subtitle="Explore the best freelancers with top ratings."
          />
          <SectionHeaderRight text="Explore All Freelancers" />
        </Box>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2000, // Delay in ms
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Assign a custom class
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {freelancers.map((freelancer) => (
            <SwiperSlide key={freelancer.id}>
              <Card sx={{ textAlign: 'left', p: 2, position: 'relative' }}>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    boxShadow: 3,
                  }}
                >
                  <FavoriteIcon color="error" />
                </IconButton>
                <Avatar
                  alt={freelancer.name}
                  src={freelancer.avatar}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                  <Typography variant="h6">{freelancer.name}</Typography>
                  {freelancer.featured && (
                    <Chip
                      label="Featured"
                      color="warning"
                      size="small"
                      sx={{ mt: 1, ml: 1 }}
                    />
                  )}
                </div>

                {/* Rating with a single star and rating count */}
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
                <Divider sx={{ my: 1 }} />

                {/* Price and Button */}
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {freelancer.priceType}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {freelancer.price}
                    </Typography>
                  </Box>
                  <Button variant="outlined" size="small" sx={{ padding: "10px" }}>
                    Hire
                  </Button>
                </Stack>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <Box sx={{
          '& .swiper-pagination-bullet': {
            width: '10px', // Larger dots
            height: '10px',
            backgroundColor: '#ccc', // Default color
            opacity: 1,
            margin: '0 20px', // Spacing around dots
            borderRadius: '50%',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: '#007BFF', // Active dot color
            height: '10px',
            width: '30px',
            borderRadius: '10px',
            transform: 'scale(1.3)', // Highlight active dot
          }, textAlign: "center", marginTop: '20px'
        }} className="custom-pagination"></Box>

      </Box>
    </Container>
  );
};

export default TopRatedFreelancers;
