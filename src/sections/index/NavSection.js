import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';  // Import Link from next/link
import useResponsive from '../../hooks/useResponsive';
import Logo from '../../components/logo';
import ResponsiveAppBar from '@/components/app-bar/ResponsiveAppBar';





// Styled Components

const StyledNavBar = styled(AppBar)(({ theme }) => ({
     backgroundColor: 'rgba(147, 106, 188, 0.04)',
     backgroundColor: '#fff',
     boxShadow: theme.shadows[2],
}));

// Navbar Component
export default function Navbar() {
     const isMobile = useResponsive('down', 'md');

     return (
          <StyledNavBar position="sticky">
               <ResponsiveAppBar/>
          </StyledNavBar>
     );
}