import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import { Search, KeyboardArrowDown } from "@mui/icons-material";

// Custom Styling
const Hero = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: "linear-gradient(135deg, #FAEFEF 0%, #EBFFFE 100%)",
  height: "580px",
  textAlign: "center",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent:'center'
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: theme.shadows[6],
  },
  transition: "transform 0.3s ease-in-out",
}));

// const Navbar = () => (
//   <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
//     <Container maxWidth="xl">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1, color: "#000", fontWeight: "bold" }}>
//           Felan
//         </Typography>
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//           <Button>Demo</Button>
//           <Button>Cats</Button>
//           <Button>Listings</Button>
//           <Button>Users</Button>
//           <Button>Pages</Button>
//         </Box>
//         <Box sx={{ flexGrow: 1, textAlign: "right" }}>
//           <Button sx={{ textTransform: "capitalize" }}>Sign In</Button>
//         </Box>
//       </Toolbar>
//     </Container>
//   </AppBar>
// );

export default function HeroSection() {

  return (
    <Hero>
      <Typography variant="h1"  gutterBottom  sx={{fontFamily: "DM Sans, Sans-serif", fontSize: "56px", fontWeight: "500",lineWeight: "1.1em"}}>
        Find The Best <br/> <span style={{ color:'transparent', backgroundImage: 'linear-gradient(90deg, #0A4EFB 0%, #F77991 100%)', backgroundClip: "text", fontWeight: "500"}}>Freelance Talent</span>
      </Typography>
      <Typography variant="body1" paragraph>
        Find the perfect talent exactly when you need
      </Typography>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            gap: 1,
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: 2,
            padding: 1,
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Freelancer title"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Select defaultValue="" displayEmpty variant="outlined" sx={{ minWidth: 150 }}>
            <MenuItem value="">All Cities</MenuItem>
            <MenuItem value="Dhaka">Dhaka</MenuItem>
            <MenuItem value="Chittagong">Chittagong</MenuItem>
          </Select>
          <Button variant="contained" sx={{ padding: "0 30px", height: "56px" }}>
            Search
          </Button>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
        Popular Searches: <span style={{ fontWeight: "bold" }}>Motion Graphics, Social Media Marketing</span>
        </Typography>
      </Container>
    </Hero>
  );
}

// const ServiceCategories = () => {
//   const categories = [
//     { title: "Finance Accounting", services: "4 Services" },
//     { title: "Photography & Editor", services: "4 Services" },
//     { title: "Marketing & Sales", services: "4 Services" },
//     { title: "AI Services", services: "5 Services" },
//     { title: "Programming & Tech", services: "4 Services" },
//   ];

//   return (
//     <Container maxWidth="xl" sx={{ marginTop: 5 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Browse Service by Category
//         </Typography>
//         <Button>View All Categories</Button>
//       </Box>
//       <Grid container spacing={3} sx={{ marginTop: 2 }}>
//         {categories.map((category, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <StyledCard>
//               <CardContent>
//                 <Typography variant="h6">{category.title}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {category.services}
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default App;
