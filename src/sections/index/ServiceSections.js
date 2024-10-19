import { useState, useEffect } from 'react';
import { Button, Typography, Container, Stack, Divider } from '@mui/material';

// components
import { ProductSort, ProductList, ProductFilterSidebar } from '../@dashboard/products';

// Mock
import PRODUCTS from '../../_mock/products';

// Navbar Component
export default function ServiceSection() {
     const [openFilter, setOpenFilter] = useState(false);
     const [productsData, setProducts] = useState([]);



     useEffect(() => {
          if (PRODUCTS) {
               setProducts(PRODUCTS.slice(0, 12));
          }
     }, [PRODUCTS]);

     const handleOpenFilter = () => {
          setOpenFilter(true);
     };

     const handleCloseFilter = () => {
          setOpenFilter(false);
     };

     return (

          <Container maxWidth="xl">



               <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-between" sx={{ mb: 5 , mt:10}}>
                    <Typography variant="h3" >
                         Top Talented Freelancers
                    </Typography>

                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>

                         <ProductFilterSidebar
                              openFilter={openFilter}
                              onOpenFilter={handleOpenFilter}
                              onCloseFilter={handleCloseFilter}
                         />
                         <ProductSort />
                    </Stack>
               </Stack>

               <ProductList products={productsData} />
               <Divider sx={{ mt: 3, mb: 3 }}>
                    <Button variant="outlined" color="inherit" sx={{ color: 'black' }}>See More</Button>

               </Divider>
               {/* <ProductCartWidget /> */}
          </Container>
     );
}