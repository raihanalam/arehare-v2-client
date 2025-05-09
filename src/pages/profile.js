import { useState } from "react";
import { Container, Grid, Paper, Avatar, Typography, Tabs, Tab, Box, Button, Chip, Divider, Card, CardMedia, CardContent, Rating, LinearProgress } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import Image from 'next/image';
import Navbar from '@/sections/index/NavSection';
import Breadcrumbs from '@/sections/services/Breadcrumbs';
import { Favorite, Share, Star } from '@mui/icons-material';



const ProfilePage = () => {
     const [tabValue, setTabValue] = useState(0);

     const handleChange = (event, newValue) => {
          setTabValue(newValue);
     };

     return (
          <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
               <Navbar />
               <Breadcrumbs path={"Home > Profile > Details"} />

               <Grid container spacing={4}>
                    {/* Left Profile Sidebar */}
                    <Grid item xs={12} md={4}>
                         <Box sx={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column' }}>
                              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                                   <Avatar
                                        src="/assets/images/avatars/avatar_1.jpg"
                                        sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                                   />
                                   <Typography variant="h6">Raihan Hridoy</Typography>
                                   <Typography color="text.secondary">Product Manager</Typography>


                                   <Typography variant="h6" sx={{ mt: 1 }}>$560/month</Typography>
                                   <Box sx={{ mt: 2 }}>
                                        <Button variant="contained" fullWidth sx={{ mb: 1 }}>Send Message</Button>
                                        <Button variant="outlined" fullWidth>Send Job Invitation</Button>
                                   </Box>
                                   <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                                        <Facebook fontSize="large" />
                                        <LinkedIn fontSize="large" />
                                        <Instagram fontSize="large" />
                                   </Box>
                                   <Divider sx={{ my: 2 }} />
                                   <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={'10px'}>
                                        <Star sx={{ mr: '5px', color: '#fc8c03', fontSize: '25px' }} />
                                        <Typography variant="body5" sx={{ color: 'gray' }} >
                                             4.8 (50 ratings)
                                        </Typography>
                                   </Box>
                                   <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>Skills</Typography>
                                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mt: 1 }}>
                                        <Chip label="Software" />
                                        <Chip label="Python" />
                                        <Chip label="Javascript" />
                                        <Chip label="Django" />
                                        <Chip label="React" />
                                        <Chip label="Odoo" />
                                        <Chip label="Frappe" />




                                   </Box>
                                   <Divider sx={{ my: 2 }} />
                                   <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>Insights</Typography>
                                   <Typography variant="body2">All-Time Earnings: $112</Typography>
                                   <Typography variant="body2">Services Completed: 0</Typography>
                                   <Typography variant="body2">Member Since: Jul 2024</Typography>
                              </Paper>
                         </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item xs={12} md={8}>
                         <Paper elevation={3} sx={{ p: 3 }}>
                              <Tabs value={tabValue} onChange={handleChange} centered>
                                   <Tab label="About Me" />
                                   <Tab label="Services" />
                                   <Tab label="Reviews" />
                              </Tabs>
                              <Box sx={{ mt: 3 }}>
                                   {tabValue === 0 && (
                                        <Box>
                                             <Typography variant="h6">About Me</Typography>
                                             <Typography>
                                                  Hi, I’m Marcus Rosser, a seasoned Product Manager with 6+ years of experience in operations,
                                                  audits, and compliance.
                                             </Typography>
                                             {/* Video Section */}
                                             <Box sx={{ width: '100%', position: 'relative', paddingBottom: '56.25%', height: 0, mt: '10px' }}>
                                                  <iframe
                                                       src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                                       style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                       frameBorder="0"
                                                       allowFullScreen
                                                  ></iframe>
                                             </Box>

                                             {/* Work Experience */}
                                             <Typography variant="h5" mt={3}>
                                                  Work Experience
                                             </Typography>
                                             <Card sx={{ mt: 2 }}>
                                                  <CardContent>
                                                       <Typography variant="h6">Software Engineer</Typography>
                                                       <Typography variant="body2" color="textSecondary">
                                                            October 2019 - Present
                                                       </Typography>
                                                       <Typography variant="body2" mt={1}>
                                                            Working as a web designer focusing on UI/UX and front-end development.
                                                       </Typography>
                                                  </CardContent>
                                             </Card>
                                             <Card sx={{ mt: 2 }}>
                                                  <CardContent>
                                                       <Typography variant="h6">Web Designer</Typography>
                                                       <Typography variant="body2" color="textSecondary">
                                                            October 2019 - Present
                                                       </Typography>
                                                       <Typography variant="body2" mt={1}>
                                                            Working as a web designer focusing on UI/UX and front-end development.
                                                       </Typography>
                                                  </CardContent>
                                             </Card>
                                             <Card sx={{ mt: 2 }}>
                                                  <CardContent>
                                                       <Typography variant="h6">Web Designer</Typography>
                                                       <Typography variant="body2" color="textSecondary">
                                                            October 2019 - Present
                                                       </Typography>
                                                       <Typography variant="body2" mt={1}>
                                                            Working as a web designer focusing on UI/UX and front-end development.
                                                       </Typography>
                                                  </CardContent>
                                             </Card>
                                             {/* Work Experience */}
                                             <Typography variant="h5" mt={3}>
                                                  Education Experience
                                             </Typography>
                                             <Card sx={{ mt: 2 }}>
                                                  <CardContent>
                                                       <Typography variant="h6">Web Designer</Typography>
                                                       <Typography variant="body2" color="textSecondary">
                                                            October 2019 - Present
                                                       </Typography>
                                                       <Typography variant="body2" mt={1}>
                                                            Working as a web designer focusing on UI/UX and front-end development.
                                                       </Typography>
                                                  </CardContent>
                                             </Card>
                                             <Card sx={{ mt: 2 }}>
                                                  <CardContent>
                                                       <Typography variant="h6">Web Designer</Typography>
                                                       <Typography variant="body2" color="textSecondary">
                                                            October 2019 - Present
                                                       </Typography>
                                                       <Typography variant="body2" mt={1}>
                                                            Working as a web designer focusing on UI/UX and front-end development.
                                                       </Typography>
                                                  </CardContent>
                                             </Card>
                                             <Card sx={{ mt: 2 }}>
                                                  <CardContent>
                                                       <Typography variant="h6">Web Designer</Typography>
                                                       <Typography variant="body2" color="textSecondary">
                                                            October 2019 - Present
                                                       </Typography>
                                                       <Typography variant="body2" mt={1}>
                                                            Working as a web designer focusing on UI/UX and front-end development.
                                                       </Typography>
                                                  </CardContent>
                                             </Card>

                                             {/* Portfolio */}
                                             <Typography variant="h5" mt={3}>
                                                  Portfolio
                                             </Typography>
                                             <Grid container spacing={2} mt={1}>
                                                  <Grid item xs={12} sm={6} md={4}>
                                                       <Image src="/assets/images/services/service-18.jpg" alt="Portfolio 1" width={300} height={200} style={{ borderRadius: 8 }} />
                                                  </Grid>
                                                  <Grid item xs={12} sm={6} md={4}>
                                                       <Image src="/assets/images/services/service-19.jpg" alt="Portfolio 2" width={300} height={200} style={{ borderRadius: 8 }} />
                                                  </Grid>
                                             </Grid>
                                        </Box>
                                   )}
                                   {tabValue === 1 && (
                                        <Box>
                                             <Typography variant="h6">Services</Typography>
                                             <Typography>Service 1 - Brand Identity Design</Typography>
                                             <Typography>Service 2 - UI/UX Consultation</Typography>
                                        </Box>
                                   )}
                                   {tabValue === 2 && (
                                        <Box>
                                             <>
                                                  {/* Overall Rating */}
                                                  <Typography variant="h6">Overall Rating</Typography>
                                                  <Rating value={5} readOnly />
                                                  <Typography variant="body2">Based on 1 review</Typography>
                                                  <Box sx={{ my: 2 }}>
                                                       <Typography>Clarity in Specification</Typography>
                                                       <LinearProgress variant="determinate" value={100} />
                                                  </Box>
                                                  <Box sx={{ my: 2 }}>
                                                       <Typography>Communication</Typography>
                                                       <LinearProgress variant="determinate" value={100} />
                                                  </Box>

                                                  {/* Reviews */}
                                                  <Box sx={{ mt: 3 }}>
                                                       <Typography variant="h6">Anna Kim</Typography>
                                                       <Rating value={5} readOnly />
                                                       <Typography color="textSecondary">7 months ago</Typography>
                                                       <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                                  </Box>
                                             </>
                                        </Box>
                                   )}
                              </Box>
                         </Paper>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default ProfilePage;
