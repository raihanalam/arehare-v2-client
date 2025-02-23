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
import Link from 'next/link';


// Mock Data
const freelancers = [
  {
    id: 1,
    name: "Raihan Alam",
    role: "Software Engineer",
    rating: 4.9,
    price: "$500/month",
    tags: ["Odoo", "ERPNext", "Customization"],
    avatar: "/assets/images/avatars/avatar_1.jpg",
    location: "Dhaka, Bangladesh",
    languages: "English, Bengali",
    intro: "Expert in Odoo and ERPNext development and customization.",
    featured: true
  },
  {
    id: 2,
    name: "Tanvir Mahmud",
    role: "Full-Stack Developer",
    rating: 4.7,
    price: "$300/month",
    tags: ["Web Development", "React", "Django"],
    avatar: "/assets/images/avatars/avatar_2.jpg",
    location: "Rajshahi, Bangladesh",
    languages: "English, Bengali",
    intro: "Building scalable web applications with modern tech stacks."
  },
  {
    id: 3,
    name: "Sumanta Majumder",
    role: "E-commerce Developer",
    rating: 4.5,
    price: "$100/week",
    tags: ["Shopify", "WooCommerce", "Magento"],
    avatar: "/assets/images/avatars/avatar_3.jpg",
    location: "Khulna, Bangladesh",
    languages: "English, Bengali",
    intro: "Specialized in e-commerce store setup and maintenance."
  },
  {
    id: 4,
    name: "Ashraful Islam",
    role: "WordPress Developer",
    rating: 4.8,
    price: "$50/day",
    tags: ["Theme Development", "Plugin Development"],
    avatar: "/assets/images/avatars/avatar_4.jpg",
    location: "Chittagong, Bangladesh",
    languages: "English, Bengali",
    intro: "Creating high-performance WordPress solutions."
  },
  {
    id: 5,
    name: "Mizanur Rahman",
    role: "Cloud Consultant",
    rating: 4.9,
    price: "$150/day",
    tags: ["AWS", "Google Cloud", "DevOps"],
    avatar: "/assets/images/avatars/avatar_5.jpg",
    location: "Sylhet, Bangladesh",
    languages: "English, Bengali",
    intro: "Helping businesses scale with cloud and DevOps solutions."
  },
  {
    id: 6,
    name: "Mohammad Rasel",
    role: "UI/UX Designer",
    rating: 4.6,
    price: "$50/hr",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    avatar: "/assets/images/avatars/avatar_6.jpg",
    location: "Barisal, Bangladesh",
    languages: "English, Bengali",
    intro: "Designing intuitive and user-friendly digital experiences."
  },
  {
    id: 7,
    name: "Rabbi Hossain",
    role: "API Developer",
    rating: 4.7,
    price: "$70/hr",
    tags: ["REST API", "GraphQL", "Backend"],
    avatar: "/assets/images/avatars/avatar_7.jpg",
    location: "Comilla, Bangladesh",
    languages: "English, Bengali",
    intro: "Developing scalable APIs for web and mobile applications."
  },
  {
    id: 8,
    name: "Kamal Khan",
    role: "SaaS Developer",
    rating: 4.9,
    price: "$800/month",
    tags: ["SaaS", "Cloud", "Web Applications"],
    avatar: "/assets/images/avatars/avatar_8.jpg",
    location: "Jessore, Bangladesh",
    languages: "English, Bengali",
    intro: "Building scalable SaaS products for businesses."
  },
  {
    id: 9,
    name: "Mominul Islam",
    role: "Mobile App Developer",
    rating: 4.7,
    price: "$90/hr",
    tags: ["iOS", "Android", "React Native"],
    avatar: "/assets/images/avatars/avatar_9.jpg",
    location: "Mymensingh, Bangladesh",
    languages: "English, Bengali",
    intro: "Crafting high-performance mobile applications."
  },
  {
    id: 10,
    name: "Sahariar Shafin",
    role: "Data Analyst",
    rating: 4.8,
    price: "$500/month",
    tags: ["Data Science", "Python", "Business Intelligence"],
    avatar: "/assets/images/avatars/avatar_10.jpg",
    location: "Faridpur, Bangladesh",
    languages: "English, Bengali",
    intro: "Helping businesses make data-driven decisions."
  }
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
      <Box sx={{ mt: 5 }}>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <SectionHeaderLeft
            title="Top Talents"
            subtitle="Explore the best freelancers with top ratings."
          />
          <SectionHeaderRight text="Explore All Freelancers" />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 4000, // Delay in ms
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
                <Card sx={{ textAlign: 'left', p: 2, position: 'relative', color: '#4d4d4d' }}>
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
                  <Link href="/profile" passHref legacyBehavior>

                    <Box>
                      <Avatar
                        alt={freelancer.name}
                        src={freelancer.avatar}
                        sx={{ width: 80, height: 80, mb: 2, cursor: 'pointer' }}
                      />
                      <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                        <Typography sx={{ cursor: 'pointer' }} variant="h6">{freelancer.name}</Typography>
                        {freelancer.featured && (
                          <Chip
                            label="Featured"
                            color="warning"
                            size="small"
                            sx={{ mt: 1, ml: 1 }}
                          />
                        )}
                      </div>
                    </Box>
                  </Link>

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
                  <Divider sx={{ my: 1, mt: 1 }} />

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
        </Box>

        {/* Custom Pagination Dots */}
        <Box sx={{
          '& .swiper-pagination-bullet': {
            width: '10px', // Larger dots
            height: '10px',
            backgroundColor: '#ccc', // Default color
            opacity: 1,
            margin: '0 25px', // Spacing around dots
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
