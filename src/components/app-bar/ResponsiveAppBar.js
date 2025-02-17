import React, { useState, useEffect } from 'react';
import {
     AppBar,
     Box,
     Toolbar,
     IconButton,
     Typography,
     Button,
     Container,
     Avatar,
     Tooltip,
     Menu,
     MenuItem,
     Drawer,
     Divider,
     List,
     ListItem,
     ListItemButton,
     ListItemText,
     ListItemIcon,
} from '@mui/material';
import {
     Menu as MenuIcon,
     Close as CloseIcon,
     Settings,
     Logout,
     Dashboard as DashboardIcon,
     AccountCircle as AccountCircleIcon,
     KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import { styled } from '@mui/system';
import Link from 'next/link';
import Image from 'next/image';
import { bgBlur } from '../../utils/cssStyles';





const navItems = [{ label: 'Home', path: '/' }, {
     label: 'Services', path: '/services', subItems: [
          { label: 'AI Solutions', path: '/services/aii-solution' },
          { label: 'Programming & Tech', path: '/services/web-development' },
          { label: 'Graphic & Design', path: '/services/app-development' },
          { label: 'Video & Animation', path: '/services/digital-marketing' },
          { label: 'Photography & Editor', path: '/services/digital-marketing' },
          { label: 'Finance & Accounting', path: '/services/digital-marketing' },
          { label: 'Video & Animations', path: '/services/digital-marketing' },
          { label: 'Marketing & Sales', path: '/services/digital-marketing' },
          { label: 'Writing & Translations', path: '/services/digital-marketing' },
     ],
}, { label: 'Businesses', path: '/Businesses' }, { label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }, {
     label: 'Blog', path: '/blog',

     subItems: [
          { label: 'AI Solutions', path: '/services/aii-solution' },
          { label: 'Programming & Tech', path: '/services/web-development' },
          { label: 'Graphic & Design', path: '/services/app-development' },
          { label: 'Writing & Translations', path: '/services/digital-marketing' },
     ]

}];
const settings = [{ label: 'Profile', path: '/profile' }, { label: 'Dashboard', path: '/dashboard' }, { label: 'Settings', path: '/settings' }, { label: 'Logout', path: '/logout' }];

const StyledAppBar = styled(AppBar)(({ theme }) => ({

     ...bgBlur({ color: theme.palette.background.default }),
     // boxShadow: 'none',

}));

// Dropdown Container Styles
const Dropdown = styled(Box)(({ theme }) => ({
     position: 'absolute',
     top: '100%',
     left: 0,
     background: theme.palette.background.paper,
     boxShadow: theme.shadows[3],
     padding: theme.spacing(2),
     borderRadius: theme.shape.borderRadius,
     display: 'none',
     zIndex: 10,
     transition: 'opacity 0.3s ease, transform 0.3s ease',
     opacity: 0,
     transform: 'translateY(-10px)',
     '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10px',
          left: '20px',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderBottom: `10px solid ${theme.palette.background.paper}`,
     },
}));

const DropdownWrapper = styled(Box)(({ theme }) => ({
     position: 'relative',
}));


const ResponsiveAppBar = (props) => {
     const [mobileOpen, setMobileOpen] = useState(false);
     const [anchorElUser, setAnchorElUser] = useState(null);
     const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
     const [appBarBg, setAppBarBg] = useState(''); // AppBar background state
     const [appBarShadow, setAppBarShadow] = useState('none'); // AppBar background state

     const [openDropdown, setOpenDropdown] = useState(null);


     const handleDropdownClick = (index) => {
          setOpenDropdown((prev) => (prev === index ? null : index));
     };


     const handleDrawerToggle = () => {
          if (mobileOpen != false) {
               setMobileOpen(false)

          }
          else {
               setMobileOpen((prevState) => !prevState);
          }
     };

     const handleOpenUserMenu = (event) => {
          setAnchorElUser(event.currentTarget);
     };

     const handleCloseUserMenu = () => {
          setAnchorElUser(null);
     };

     // Scroll effect to change the AppBar background color
     useEffect(() => {
          const handleScroll = () => {
               // if (window.scrollY > window.innerHeight) {
               if (window.scrollY > 20) {

                    setAppBarShadow('')
               } else {
                    setAppBarShadow('none')
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const drawer = (
          <Box sx={{ textAlign: 'center' }}>
               <IconButton onClick={handleDrawerToggle} sx={{ mx: 'auto', my: 2, height: '35px', width: '35px' }}>
                    <CloseIcon />
               </IconButton>
               <Divider />
               {/* <List>
                    {navItems.map((item) => (
                         <ListItem key={item.label} disablePadding>
                              <Link href={item.path} passHref legacyBehavior>
                                   <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item.label} />

                                   </ListItemButton>
                              </Link>
                         </ListItem>
                    ))}
               </List> */}
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {navItems.map((item, index) => (
                         <List key={index}>
                              {item.subItems ? (
                                   // Render dropdown or subitems if `subItems` exist
                                   <ListItem onClick={() => handleDropdownClick(index)} display={'flex'} alignItems={'center'}>

                                        {item.label}
                                        {item.subItems && <KeyboardArrowDownIcon sx={{ ml: '1', color: 'black' }} />}
                                   </ListItem>

                              ) : (
                                   // Render regular item if `subItems` do not exist
                                   <Link href={item.path} passHref key={index} legacyBehavior>
                                        <ListItem display={'flex'} alignItems={'center'}>

                                             {item.label}
                                             {item.subItems && <KeyboardArrowDownIcon sx={{ ml: '1', color: 'black' }} />}
                                        </ListItem>
                                   </Link>
                              )}

                              <Box >
                                   {item.subItems && openDropdown === index && (
                                        <Dropdown
                                             className="dropdown"
                                             sx={{ position: 'relative', display: 'block', opacity: 1, transform: 'translateY(0)' }}
                                             onMouseLeave={() => handleDropdownClick(index)}
                                             onClick={() => handleDropdownClick(index)}

                                        >

                                             {item.subItems.map((subItem, subIndex) => (
                                                  <ListItem key={subIndex} >
                                                       <Link href={subItem.path} passHref legacyBehavior>
                                                            <Typography sx={{ color: '#444444', display: 'block', cursor: 'pointer', '&:hover': { borderBottom: '1px solid', borderColor: '#007aff' } }}>

                                                                 {subItem.label}
                                                            </Typography>
                                                       </Link>
                                                  </ListItem>
                                             ))}
                                        </Dropdown>
                                   )
                                   }
                              </Box>
                         </List>


                    ))}

               </Box>
               {/* Sign In / Sign Up buttons inside drawer */}
               <Box sx={{ mt: 2 }}>
                    {isLoggedIn ? (
                         <Tooltip title="Open Settings">
                              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                   <Avatar src="/assets/images/avatars/avatar_default.jpg" alt="photoURL" />
                              </IconButton>
                         </Tooltip>
                    ) : (
                         <>
                              <Link href="/login" passHref >
                                   <Button variant="outlined" sx={{ my: 1, mr: 2 }}>
                                        Signin
                                   </Button>
                              </Link>
                              <Link href="/signup" passHref>
                                   <Button variant="contained" sx={{ my: 1 }}>
                                        Signup
                                   </Button>
                              </Link>
                         </>
                    )}
               </Box>
          </Box>
     );

     return (
          <StyledAppBar position="fixed" sx={{ boxShadow: appBarShadow }}>
               <Container maxWidth="xxl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <Link href={'/'} passHref legacyBehavior>
                              <Box display={'flex'} alignItems={'center'} sx={{cursor: 'pointer'}}>
                                   <Image src={'/logo/logo.png'} alt="arehare" width={50} height={50} />
                                   <Typography
                                        variant="h4"
                                        noWrap
                                        sx={{
                                             ml: 1,
                                             fontFamily: 'monospace',
                                             fontWeight: 700,
                                             letterSpacing: '.3rem',
                                             // fontStyle: 'italic',
                                             color: 'inherit',
                                             color: '#444444'
                                        }}
                                   >
                                        arehare
                                   </Typography>
                              </Box>
                         </Link>

                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>

                              {navItems.map((item, index) => (
                                   <DropdownWrapper key={index}>
                                        {item.subItems ? (
                                             // Render dropdown or subitems if `subItems` exist
                                             <Box onClick={() => handleDropdownClick(index)}  sx={{ mr: 3, my: 2, color: '#444444', display: 'block', cursor: 'pointer', '&:hover': { borderBottom: '1px solid', borderColor: '#007aff' } }}>
                                                  <Box display={'flex'} alignItems={'center'}>

                                                       {item.label}
                                                       {item.subItems && <KeyboardArrowDownIcon sx={{ ml: '1', color: 'black' }} />}
                                                  </Box>

                                             </Box>

                                        ) : (
                                             // Render regular item if `subItems` do not exist
                                             <Link href={item.path} passHref key={index} legacyBehavior>
                                                  <Box sx={{ mr: 3, my: 2, color: '#444444', display: 'block', cursor: 'pointer', '&:hover': { borderBottom: '1px solid', borderColor: '#007aff' } }}>
                                                       <Box display={'flex'} alignItems={'center'}>

                                                            {item.label}
                                                            {item.subItems && <KeyboardArrowDownIcon onClick={() => handleDropdownClick(index)} sx={{ ml: '1', color: 'black' }} />}
                                                       </Box>

                                                  </Box>


                                             </Link>
                                        )}

                                        <Box>
                                             {item.subItems && openDropdown === index && (
                                                  <Dropdown
                                                       className="dropdown"
                                                       sx={{ display: 'block', opacity: 1, transform: 'translateY(0)' }}
                                                       onMouseLeave={() => handleDropdownClick(index)}


                                                  >
                                                       <Box sx={{
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
                                                            gap: 0, // Gap between items
                                                            padding: 2, // Optional padding

                                                       }}>
                                                            {item.subItems.map((subItem, subIndex) => (
                                                                 <Link key={subIndex} href={subItem.path} passHref legacyBehavior>
                                                                      <Typography sx={{ mr: 3, my: 2, color: '#444444', display: 'block', cursor: 'pointer', '&:hover': { borderBottom: '1px solid', borderColor: '#007aff' } }}>

                                                                           {subItem.label}
                                                                      </Typography>
                                                                 </Link>
                                                            ))}
                                                       </Box>
                                                  </Dropdown>
                                             )
                                             }
                                        </Box>
                                   </DropdownWrapper>


                              ))}
                         </Box>

                         <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                              {isLoggedIn ? (
                                   <Box>
                                        <Box display={'flex'} alignItems={'center'}>
                                             <Tooltip title="Open settings">
                                                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                       <Avatar src="/assets/images/avatars/avatar_default.jpg" alt="photoURL" />
                                                  </IconButton>
                                             </Tooltip>
                                             <Box textAlign={'left'} ml={1}>
                                                  <Typography sx={{ color: 'gray', fontSize: '12px', fontWeight: '700' }} >Solomon Vendy</Typography>
                                                  <Typography sx={{ color: 'gray', fontSize: '10px' }}>Freelancer</Typography>
                                             </Box>
                                        </Box>

                                        <Menu
                                             anchorEl={anchorElUser}
                                             open={Boolean(anchorElUser)}
                                             onClose={handleCloseUserMenu}
                                             slotProps={{
                                                  paper: {
                                                       elevation: 0,
                                                       sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                 width: 32,
                                                                 height: 32,
                                                                 ml: -0.5,
                                                                 mr: 1,
                                                            },
                                                            '&::before': {
                                                                 content: '""',
                                                                 display: 'block',
                                                                 position: 'absolute',
                                                                 top: 0,
                                                                 right: 14,
                                                                 width: 10,
                                                                 height: 10,
                                                                 bgcolor: 'background.paper',
                                                                 transform: 'translateY(-50%) rotate(45deg)',
                                                                 zIndex: 0,
                                                            },
                                                       },
                                                  },
                                             }}
                                             transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                             anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                             {settings.map((setting, index) => (
                                                  <Link key={index} href={setting.path} passHref legacyBehavior>
                                                       <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                                            <ListItemIcon>
                                                                 {setting.label === 'Profile' && <AccountCircleIcon fontSize="small" />}
                                                                 {setting.label === 'Dashboard' && <DashboardIcon fontSize="small" />}
                                                                 {setting.label === 'Settings' && <Settings fontSize="small" />}
                                                                 {setting.label === 'Logout' && <Logout fontSize="small" />}
                                                            </ListItemIcon>

                                                            <Typography>{setting.label}</Typography>

                                                       </MenuItem>
                                                  </Link>
                                             ))}
                                        </Menu>
                                   </Box>
                              ) : (
                                   <Box>
                                        <Link href="/login" passHref>
                                             <Button variant="outlined" sx={{ mr: 2 }}>
                                                  Signin
                                             </Button>
                                        </Link>
                                        <Link href="/signup" passHref>
                                             <Button variant="contained">
                                                  Signup
                                             </Button>
                                        </Link>
                                   </Box>
                              )}
                         </Box>

                         {/* Mobile Menu Icon */}
                         <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                              <IconButton color="gray" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
                                   <HorizontalSplitIcon />
                              </IconButton>
                         </Box>
                    </Toolbar>
               </Container>
               <Drawer
                    container={props.window !== undefined ? () => props.window().document.body : undefined}
                    anchor="right"
                    variant="temporary" // Use 'temporary' for standard mobile drawer behavior
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                         display: { xs: 'block', sm: 'none' }, // Ensure visibility on mobile
                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
               >
                    {drawer}
               </Drawer>

          </StyledAppBar>
     );
};

export default ResponsiveAppBar;
