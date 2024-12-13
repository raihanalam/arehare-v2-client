import React from "react";
import {

  Typography,
  Container,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Card,
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
            placeholder="Search for..."
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
            <MenuItem value="">Services</MenuItem>
            <MenuItem value="Dhaka">Freelancers</MenuItem>
            <MenuItem value="Chittagong">Projects</MenuItem>
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

