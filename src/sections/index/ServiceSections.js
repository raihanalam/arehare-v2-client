import { useState, useEffect } from 'react';
import { Button, Typography, Container, Stack, Divider, Box } from '@mui/material';

// components
import { ServiceSort, ServiceList, ServiceFilterSidebar } from '../@dashboard/services';

import SectionHeaderLeft from '../../components/section/SectionHeaderLeft';
import SectionHeaderRight from '../../components/section/SectionHeaderRight';

// Mock
import SERVICES from '../../_mock/services';

// Navbar Component
export default function ServiceSection() {
     const [openFilter, setOpenFilter] = useState(false);
     const [servicesData, setServices] = useState([]);



     useEffect(() => {
          if (SERVICES) {
               setServices(SERVICES.slice(0, 8));
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


               <ServiceList services={servicesData} />
          </Container>
     );
}