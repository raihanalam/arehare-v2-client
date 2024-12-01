import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper and its CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import "swiper/css/navigation"; // Navigation styles
import { Navigation } from "swiper/modules";

// Import ProjectCard component
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Navigation Buttons */}
      <IconButton
        className="swiper-button-prev"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 10,
          transform: 'translateY(-50%)',
          backgroundColor: '#fff',
          boxShadow: 1,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        className="swiper-button-next"
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          zIndex: 10,
          transform: 'translateY(-50%)',
          backgroundColor: '#fff',
          boxShadow: 1,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]} // Pass Navigation module here
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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



