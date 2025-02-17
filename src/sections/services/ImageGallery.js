

const images = [
  '/assets/images/services/service-1.jpg',
  '/assets/images/services/service-2.jpg',
  '/assets/images/services/service-3.jpg',
  '/assets/images/services/service-4.jpg',
  '/assets/images/services/service-5.jpg',
  '/assets/images/services/service-6.jpg',
  '/assets/images/services/service-7.jpg',
]


import { useState } from 'react';
import {
  Box,
  Card,
  Modal,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  ZoomIn,
  ZoomOut,
} from '@mui/icons-material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageGallery = ({ }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleThumbnailClick = (index) => setCurrentIndex(index);

  const handleNextImage = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  const handlePrevImage = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const toggleZoom = () => setZoom((prevZoom) => !prevZoom);

  return (
    <Box>
      {/* Main Image */}
      <Card
        sx={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => setFullScreen(true)}
      >
        <CardMedia
          component="img"
          image={images[currentIndex]}
          width={"100%"} // Aspect ratio
          height={"600px"}
          alt="Service Image"
          sx={{
            transition: 'transform 0.5s ease-in-out',
          }}
        />
        {/* Navigation Arrows */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation(); // Prevent opening full-screen mode
            handlePrevImage();
          }}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={(e) => {
            e.stopPropagation(); // Prevent opening full-screen mode
            handleNextImage();
          }}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Card>

      {/* Thumbnail Navigation */}
      <Box mt={2} display="flex" alignItems="center" gap={1}>
        {images.map((img, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              height: 100,
              cursor: 'pointer',
              border: currentIndex === index ? '1px solid #1976d2' : 'none',
              transition: 'border 0.3s ease',
            }}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image src={img} width={200} height={80} alt={`Thumbnail ${index}`} />
          </Card>
        ))}
      </Box>

      {/* Full-Screen Modal */}
      <Modal open={fullScreen} onClose={() => setFullScreen(false)}>
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '20px',
          }}
        >
          {/* Zoomable Full-Screen Image */}
          <Box
            sx={{
              position: 'relative',
              width: zoom ? '120%' : '80%',
              height: zoom ? '120%' : '80%',
              transition: 'all 0.3s ease',
              cursor: zoom ? 'zoom-out' : 'zoom-in',
            }}
            onClick={toggleZoom}
          >
            <Image
              src={images[currentIndex]}
              layout="fill"
              objectFit="contain"
              alt="Full-Screen Image"
            />
          </Box>

          {/* Close Button */}
          <IconButton
            onClick={() => setFullScreen(false)}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              color: 'black',
            }}
          >
            <Close />
          </IconButton>

          {/* Zoom Icon */}
          <IconButton
            onClick={toggleZoom}
            sx={{
              position: 'absolute',
              top: 20,
              right: 70,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              color: 'black',
            }}
          >
            {zoom ? <ZoomOut /> : <ZoomIn />}
          </IconButton>

          {/* Left Arrow */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: 'absolute',
              left: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: 'absolute',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageGallery;
