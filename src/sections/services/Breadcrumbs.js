// components/Breadcrumbs.js
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadcrumbs = () => (
  // <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
  //   <Link href="/" underline="hover">Home</Link>
  //   <Link href="/services" underline="hover">Services</Link>
  //   <Typography color="text.primary">Service Details</Typography>
  // </Breadcrumbs>

  // Breadcrumbs Component
  <Box mb={2} pt={5}>
    <Typography variant="body1" color="text.secondary">
      {"Home > Services > Details"}
    </Typography>
  </Box>
);

export default CustomBreadcrumbs;