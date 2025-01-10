import { useState, useEffect } from 'react';
import { Button, Typography, Container, Stack, Divider, Box } from '@mui/material';

// components
import { ProductSort, ProductList, ProductFilterSidebar } from '../@dashboard/products';

import SectionHeaderLeft from '../../components/section/SectionHeaderLeft';
import SectionHeaderRight from '../../components/section/SectionHeaderRight';

// Mock
import PRODUCTS from '../../_mock/products';

// Navbar Component
export default function ServiceSection() {
     const [openFilter, setOpenFilter] = useState(false);
     const [productsData, setProducts] = useState([]);



     useEffect(() => {
          if (PRODUCTS) {
               setProducts(PRODUCTS.slice(0, 8));
          }
     }, []);

     const handleOpenFilter = () => {
          setOpenFilter(true);
     };

     const handleCloseFilter = () => {
          setOpenFilter(false);
     };

     return (

          <Container maxWidth="xl">

               <Box mt={5} sx={{ display: "flex", alignContent: 'center', alignItems: "center", justifyContent: "space-between" }}>
                    <SectionHeaderLeft
                         title="Featured Services"
                         subtitle="Explore the most demandig services."
                    />
                    <SectionHeaderRight text="Explore All Services" />
               </Box>


               <ProductList products={productsData} />
          </Container>
     );
}