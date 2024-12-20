import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';  // Import Link from next/link
import useResponsive from '../../hooks/useResponsive';
import Logo from '../../components/logo';
import ResponsiveAppBar from '@/components/app-bar/ResponsiveAppBar';
import { bgBlur } from '../../utils/cssStyles';

// Styled Components
const StyledNavBar = styled(AppBar)(({ theme }) => ({

     ...bgBlur({ color: theme.palette.background.default }),
     boxShadow: 'none',

}));

// Navbar Component
export default function Navbar() {
     const isMobile = useResponsive('down', 'md');

     return (
          <StyledNavBar>
               <ResponsiveAppBar/>
          </StyledNavBar>
     );
}