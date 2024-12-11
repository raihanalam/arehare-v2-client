// components/Breadcrumbs.js
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadcrumbs = () => (
  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
    <Link href="/" underline="hover">Home</Link>
    <Link href="/services" underline="hover">Services</Link>
    <Typography color="text.primary">Service Details</Typography>
  </Breadcrumbs>
);

export default CustomBreadcrumbs;