// Header Component
import {

  Typography,
  Box,

  IconButton,
  Avatar,



} from '@mui/material';
import StreetviewIcon from '@mui/icons-material/Streetview';

import ReceiptIcon from '@mui/icons-material/Receipt';
import { Favorite, Share, Star } from '@mui/icons-material';
const Header = () => (
     <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: '25px' }}>
       <Box>
         <Typography variant="h3">I will craft your ideas into reality.</Typography>
   
         <Box display="flex" gap={2} mt={1} sx={{ color: ' #8c8f8a', fontSize: '10px', alignItems: 'center' }}>
           <Typography variant="body6" color="text.secondary" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Avatar sx={{ width: 20, height: 20, marginRight: '5px' }} />   By Kianna Bie

           </Typography>
           <Typography variant="body6" display="flex" alignItems="center" >
             <Star sx={{ mr: '5px' }} />
             4.8 (50 ratings)
           </Typography>
           <Typography variant="body6" display="flex" alignItems="center" >
             <StreetviewIcon sx={{ marginRight: '5px' }} /> 1.2k views
           </Typography>
           <Typography variant="body6" display="flex" alignItems="center">
             <ReceiptIcon sx={{ marginRight: '5px' }} />120 sales</Typography>
         </Box>
       </Box>
       <Box>
         <IconButton>
           <Favorite />
         </IconButton>
         <IconButton>
           <Share />
         </IconButton>
       </Box>
     </Box>
   );

   export default Header;