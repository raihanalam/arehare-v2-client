import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { styled } from "@mui/system";


// Import Swiper and its CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import "swiper/css/navigation"; // Navigation styles
import { Navigation } from "swiper/modules";

// Import ProjectCard component
import ProjectCard from './ProjectCard';

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));
const ProjectList = ({ projects }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]} // Pass Navigation module here
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true} // Enable looping
        spaceBetween={20}
        navigation={{
          nextEl: '.custom2-swiper-button-next',
          prevEl: '.custom2-swiper-button-prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 }, // 1 item for mobile
          600: { slidesPerView: 2, slidesPerGroup: 2 }, // 2 items per row
        }}
        style={{ paddingBottom: '20px' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <ProjectCard project={project} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box>
        {/* Redesigned Navigation Buttons */}
        <ArrowButton
          className="custom2-swiper-button-prev"
          sx={{
            position: 'absolute',
            top: '102%',
            left: 10,
            zIndex: 10,
            transform: 'translateY(-50%)',
            backgroundColor: '#ffffff',
            boxShadow: 2,
            border: '1px solid #ddd',
            '&:hover': {
              backgroundColor: '#f9f9f9',
            },
          }}
        >
          <ArrowLeftIcon sx={{
            cursor: "pointer",
            fontSize: 20,
            "&:hover": { color: "gray" },
          }} />
        </ArrowButton>
        <ArrowButton
          className="custom2-swiper-button-next"
          sx={{
            position: 'absolute',
            top: '102%',
            right: 10,
            zIndex: 10,
            transform: 'translateY(-50%)',
            backgroundColor: '#ffffff',
            boxShadow: 2,
            border: '1px solid #ddd',
            '&:hover': {
              backgroundColor: '#f9f9f9',
            },
          }}
        >
          <ArrowRightIcon sx={{
            cursor: "pointer",
            fontSize: 20,
            "&:hover": { color: "gray" },
          }} />
        </ArrowButton>

      </Box>
    </Box>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
