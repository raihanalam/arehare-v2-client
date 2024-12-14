
import {
     Typography,
     Box,
     Card,
     CardContent, Button,
     Avatar,
     Stack,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

const freelancer =
{
     id: 6,
     name: 'Lucy Haley',
     role: 'Human Resources',
     rating: 4.5,
     price: '$60/day',
     tags: ['Recruitment', 'Software'],
     avatar: '/path-to-avatar4.jpg',
     location: 'Los Angeles, USA',
     languages: 'English, German',
     intro: 'Experienced in recruitment processes.',
     featured: true,
}


const ProfileCard = () => (
     <Card sx={{ mt: 3 }} variant="outlined">
          <CardContent>
               <Box display={'flex'} alignItems={'center'}>
                    <Avatar
                         alt={freelancer.name}
                         src={freelancer.avatar}
                         sx={{ width: 80, height: 80, mb: 2 }}
                    />
                    <Box ml={'20px'}>
                         <Typography variant="h5">{freelancer.name}</Typography>

                         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left ' }}>
                              <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                                   {freelancer.role}
                              </Typography>
                              <div style={{ display: "flex" }}>
                                   <StarIcon sx={{ color: '#faaf00', fontSize: 20 }} />
                                   <Typography variant="body2" sx={{ ml: 1 }}>
                                        {freelancer.rating}
                                   </Typography>
                              </div>

                         </Box>
                    </Box>
               </Box>

               <Box>
                    <Stack direction="row" justifyContent="left" spacing={1} sx={{ mt: 2 }}>
                         <LocationOnIcon fontSize="small" />
                         <Typography variant="body2">{freelancer.location}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="left" spacing={1} sx={{ mt: 1 }}>
                         <LanguageIcon fontSize="small" />
                         <Typography variant="body2">{freelancer.languages}</Typography>
                    </Stack>
               </Box>

               <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                    {freelancer.intro}
               </Typography>
               <Box mt={2} display="flex" gap={2}>
                    <Button variant="outlined">See Profile</Button>
                    <Button variant="contained">Send Message</Button>
               </Box>
          </CardContent>
     </Card>
)

export default ProfileCard;