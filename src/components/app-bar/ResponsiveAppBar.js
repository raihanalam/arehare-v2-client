import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, {label: 'Businesses', path: '/Businesses' }, { label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }, { label: 'Blog', path: '/blog' }];
const settings = [{ label: 'Profile', path: '/profile' }, { label: 'Dashboard', path: '/dashboard' }, { label: 'Settings', path: '/settings' }, { label: 'Logout', path: '/logout' }];

const ResponsiveAppBar = (props) => {
     const [mobileOpen, setMobileOpen] = useState(false);
     const [anchorElUser, setAnchorElUser] = useState(null);
     const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
     const [appBarBg, setAppBarBg] = useState('transparent'); // AppBar background state

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
               if (window.scrollY > window.innerHeight) {
                    setAppBarBg('white'); // Set your minimal background color here
               } else {
                    setAppBarBg('transparent');
               }
          };

          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const drawer = (
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
               <IconButton onClick={handleDrawerToggle} sx={{ mx: 'auto', my: 2, height: '25px' }}>
                    <CloseIcon />
               </IconButton>
               <Divider />
               <List>
                    {navItems.map((item) => (
                         <ListItem key={item.label} disablePadding>
                              <Link href={item.path} passHref legacyBehavior>
                                   <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={item.label} />
                                   </ListItemButton> 
                              </Link>
                         </ListItem>
                    ))}
               </List>
               {/* Sign In / Sign Up buttons inside drawer */}
               <Box sx={{ mt: 2 }}>
                    {isLoggedIn ? (
                         <Tooltip title="Open settings">
                              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                   <Avatar src="/assets/images/avatars/avatar_default.jpg" alt="photoURL" />
                              </IconButton>
                         </Tooltip>
                    ) : (
                         <>
                              <Link href="/login" passHref >
                                   <Button variant="outlined" sx={{ my: 1, mr: 2}}>
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
          <AppBar position="fixed" sx={{ backgroundColor: appBarBg, transition: 'background-color 0.3s ease' }}>
               <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <Typography
                              variant="h3"
                              noWrap
                              component="a"
                              href="/"
                              sx={{
                                   mr: 2,
                                   // fontFamily: 'monospace',
                                   fontWeight: 700,
                                   letterSpacing: '.3rem',
                                   color: 'inherit',
                                   textDecoration: 'none',
                                   color:'#444444'
                              }}
                         >
                              AreHare
                         </Typography>

                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                              {navItems.map((page) => (
                                   <Link href={page.path} passHref key={page.label} legacyBehavior>
                                        <Button sx={{ my: 2, color: '#444444', display: 'block' }}>
                                             {page.label}
                                        </Button>
                                   </Link>
                              ))}
                         </Box>

                         <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                              {isLoggedIn ? (
                                   <>
                                        <Tooltip title="Open settings">
                                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                  <Avatar src="/assets/images/avatars/avatar_default.jpg" alt="photoURL" />
                                             </IconButton>
                                        </Tooltip>
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
                                             {settings.map((setting) => (
                                                  <Link href={setting.path} passHref legacyBehavior>
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
                                   </>
                              ) : (
                                   <>
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
                                   </>
                              )}
                         </Box>

                         {/* Mobile Menu Icon */}
                         <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                              <IconButton color="gray" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
                                   <MenuIcon />
                              </IconButton>
                         </Box>
                    </Toolbar>
               </Container>
               <nav>
                    <Drawer
                         container={props.window !== undefined ? () => props.window().document.body : undefined}
                         anchor="right"
                         variant="persistent"
                         open={mobileOpen}
                         onClose={handleDrawerToggle}
                         ModalProps={{ keepMounted: true }}
                         sx={{
                              display: { xs: 'block', sm: 'none' },
                              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                         }}
                    >
                         {drawer}
                    </Drawer>
               </nav>
          </AppBar>
     );
};

export default ResponsiveAppBar;
