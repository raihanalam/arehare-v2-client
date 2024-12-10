import React from "react";
import { Typography, Container, Box, Card, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CampaignIcon from "@mui/icons-material/Campaign";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideocamIcon from "@mui/icons-material/Videocam";
import TranslateIcon from "@mui/icons-material/Translate";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";


import SectionHeader from '../../components/section/SectionHeader';
import SectionFooter from '../../components/section/SectionFooter';

// Import Swiper and its CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import "swiper/css/navigation"; // Navigation styles
import { Navigation } from "swiper/modules";

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  height: 160,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[1],
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
  transition: "transform 0.3s ease-in-out",
}));

// Styled Arrow Button
const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

export default function ServiceCategories() {
  const categories = [
    {
      title: "Programming & Tech",
      services: "5 services",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      title: "AI Solutions",
      services: "3 services",
      icon: <DataObjectIcon fontSize="large" />,
    },
    {
      title: "Graphic & Design",
      services: "3 services",
      icon: <GraphicEqIcon fontSize="large" />,
    },
    {
      title: "Video & Animation",
      services: "4 services",
      icon: <VideocamIcon fontSize="large" />,
    },
    {
      title: "Finance & Accounting",
      services: "4 services",
      icon: <AccountBalanceIcon fontSize="large" />,
    },
    {
      title: "Marketing & Sales",
      services: "4 services",
      icon: <CampaignIcon fontSize="large" />,
    },
    {
      title: "Photography & Editor",
      services: "4 services",
      icon: <PhotoCameraIcon fontSize="large" />,
    },
    {
      title: "Writing & Translation",
      services: "4 services",
      icon: <TranslateIcon fontSize="large" />,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: 5,
        position: "relative",
        backgroundColor: "#f9fafc",
        padding: "40px",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <SectionHeader
          title="Service Categories"
          subtitle="Explore the most popular service categories."
          sx={{ textAlign: "left"}}
        />
        {/* Custom Navigation Buttons */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <ArrowButton className="custom-swiper-button-prev">
            <ChevronLeftIcon
              sx={{
                cursor: "pointer",
                fontSize: 32,
                "&:hover": { color: "gray" },
              }}
            />
          </ArrowButton>
          <ArrowButton className="custom-swiper-button-next">
            <ChevronRightIcon
              sx={{
                cursor: "pointer",
                fontSize: 32,
                "&:hover": { color: "gray" },
              }}
            />
          </ArrowButton>
        </div>

      </Box>


      {/* Swiper Slider */}
      <Swiper
        slidesPerView={6} // Show 6 items per slide
        spaceBetween={30}
        loop={true} // Enable looping
        autoplay={{
          delay: 3000, // Set autoplay delay in milliseconds
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Navigation]}
        pagination={false} // Remove dots
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
        }}
        style={{ padding: "20px 0" }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <StyledCard>
              <Box mb={1} sx={{ color: 'gray' }}>{category.icon}</Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {category.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {category.services}
              </Typography>
            </StyledCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
