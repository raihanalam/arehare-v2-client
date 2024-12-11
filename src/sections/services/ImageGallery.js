
// components/ImageGallery.js
import { useState } from 'react';
import { Box, Card, Modal } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setOpen(true);
  };

  return (
    <Box>
      <Card sx={{ cursor: 'pointer' }} onClick={() => handleImageClick(selectedImage)}>
        <Image src={selectedImage} alt="Main Image" width={600} height={400} layout="responsive" />
      </Card>
      <Swiper spaceBetween={10} slidesPerView={4} style={{ marginTop: 16 }}>
        {images.map((src, index) => (
          <SwiperSlide key={index} onClick={() => setSelectedImage(src)}>
            <Card sx={{ cursor: 'pointer' }}>
              <Image src={src} alt={`Thumbnail ${index}`} width={80} height={80} layout="responsive" />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: '90%', height: '90%', mx: 'auto', mt: 4 }}>
          <Image src={selectedImage} alt="Full Image" layout="responsive" width={800} height={600} />
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageGallery;