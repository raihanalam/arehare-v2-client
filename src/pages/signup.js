import Image from 'next/image';
import Head from 'next/head';


// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Box } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
// import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { SignupForm } from '../sections/auth/signup'
import Navbar from '@/sections/index/NavSection';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
     [theme.breakpoints.up('md')]: {
          display: 'flex',
     },
}));

const StyledSection = styled('div')(({ theme }) => ({
     width: '100%',
     maxWidth: '40%',
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     boxShadow: theme.customShadows.card,
     backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
     maxWidth: 480,
     margin: 'auto',
     minHeight: '100vh',
     display: 'flex',
     justifyContent: 'center',
     flexDirection: 'column',
     padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function SignupPage() {
     const mdUp = useResponsive('up', 'md');

     return (
          <>
               <Head>
                    <title>AreHare Inc.</title>
                    <meta name="description" content="Leading Digital Solutions for Your Business" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <Navbar />


               <StyledRoot>


                    {mdUp && (
                         <StyledSection>
                              <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                                   Hi, Welcome Back
                              </Typography>
                              <Box sx={{ position: "relative", width: "80%", height: { xs: 300, sm: 400, md: 500 } }}>
                                   <Image
                                        src="/assets/illustrations/Work_from_home.png"
                                        alt="login"
                                        fill
                                        style={{ objectFit: "contain" }} // Ensures the image covers the container properly
                                   />
                              </Box>
                         </StyledSection>
                    )}

                    <Container maxWidth="sm">
                         <StyledContent>
                              <Typography variant="h4" gutterBottom>
                                   Sign up to AreHare
                              </Typography>

                              <Typography variant="body2" sx={{ mb: 5 }}>
                                   Have an account? {''}
                                   <Link variant="subtitle2">Login</Link>
                              </Typography>

                              <Stack direction="row" spacing={2}>
                                   <Button fullWidth size="large" color="inherit" variant="outlined">
                                        <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                                   </Button>

                                   <Button fullWidth size="large" color="inherit" variant="outlined">
                                        <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
                                   </Button>

                                   <Button fullWidth size="large" color="inherit" variant="outlined">
                                        <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
                                   </Button>
                              </Stack>

                              <Divider sx={{ my: 3 }}>
                                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        OR
                                   </Typography>
                              </Divider>

                              <SignupForm />
                         </StyledContent>
                    </Container>
               </StyledRoot>
          </>
     );
}
