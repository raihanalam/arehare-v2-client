
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
import Navbar from '@/sections/index/NavSection';
import Breadcrumbs from '@/sections/services/Breadcrumbs';

// components
import { ServiceSort, ServiceList, ServiceCartWidget, ServiceFilterSidebar } from '../sections/@dashboard/services';
// mock
import SERVICES from '../_mock/services';


// ----------------------------------------------------------------------

export default function ServicesPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>

      <Container  maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
        <Navbar />
        {/* Breadcrumbs */}
        <Breadcrumbs path={"Home > Services"} />

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ServiceFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ServiceSort />
          </Stack>
        </Stack>

        <ServiceList services={SERVICES} />
        <ServiceCartWidget />
      </Container>
    </>
  );
}
