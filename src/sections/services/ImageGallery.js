
// components/ImageGallery.js
import { useState } from 'react';
import { Box, Card, Modal, CardMedia } from '@mui/material';
import Image from 'next/image';


const ImageGallery = ({ images }) => {
  return (
    <Box>
      <Card>
        <CardMedia component="img" image="/assets/images/products/service-1.jpg" height={600} alt="Service Image" />
      </Card>
      <Box mt={2} display="flex" gap={1}>
        {[1, 2, 3, 4].map((image, index) => (
          <Card key={image} sx={{ width: 140, height: 100, cursor: 'pointer' }}>
            <Image src={`/assets/images/products/service-${index + 1}.jpg`} width={140} height={100} alt={`Thumbnail ${image}`} />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ImageGallery;

