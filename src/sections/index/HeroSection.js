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
  Avatar,
  Link
} from "@mui/material";
import { styled } from "@mui/system";
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";

// Custom Styling
const Hero = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: "linear-gradient(135deg, #FAEFEF 0%, #EBFFFE 100%)",
  height: "600px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  zIndex: '300'
}));

const StyledAvatar = styled(Avatar)({
  position: 'absolute',
  // border: '2px solid #fff',
});
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: theme.shadows[6],
  },
  transition: "transform 0.3s ease-in-out",
}));

import { containerVariants, itemVariants, searchBarVariants } from "../../components/animate/variants"

export default function HeroSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <StyledAvatar alt={'Avatar 1'} src={'/assets/images/avatars/avatar_3.jpg'} sx={{ height: '35px', width: '35px', left: '20%', top: '200px' }} />
          <StyledAvatar alt={'Avatar 1'} src={'/assets/images/avatars/avatar_4.jpg'} sx={{ height: '45px', width: '45px', left: '10%', top: '340px' }} />
          <StyledAvatar alt={'Avatar 1'} src={'/assets/images/avatars/avatar_1.jpg'} sx={{ height: '55px', width: '55px', left: '20%', top: '440px' }} />

          <StyledAvatar alt={'Avatar 1'} src={'/assets/images/avatars/avatar_6.jpg'} sx={{ height: '35px', width: '35px', right: '20%', top: '200px' }} />
          <StyledAvatar alt={'Avatar 1'} src={'/assets/images/avatars/avatar_5.jpg'} sx={{ height: '45px', width: '45px', right: '10%', top: '340px' }} />
          <StyledAvatar alt={'Avatar 1'} src={'/assets/images/avatars/avatar_2.jpg'} sx={{ height: '55px', width: '55px', right: '20%', top: '440px' }} />
        </Box>
      </motion.div>
      <Hero>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontFamily: "DM Sans, Sans-serif",
              fontSize: "40px",
              fontWeight: "500",
              lineHeight: "1.1em",
            }}
          >
            Hire The Best <br />
            <span
              style={{
                color: "transparent",
                backgroundImage:
                  "linear-gradient(90deg, #0A4EFB 0%, #F77991 100%)",
                backgroundClip: "text",
              }}
            >
              Freelance Talent
            </span>
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          {/* <Typography variant="body1" paragraph>
            Find the perfect talent exactly when you need
          </Typography> */}

          <Typography variant="body1" paragraph>

            The site is under maintenance, we will back soon.
          </Typography>
          <Box sx={{ textAlign: "center", py: 1, color: "Gray" }}>
            <Typography variant="body2">
              Need support?{" "}
              <Link
                href="https://www.facebook.com/arehare.inc"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5, "&:hover": { color: "secondary.light" } }}
              >
                Visit our Facebook <FacebookIcon fontSize="small" />
              </Link>
            </Typography>
          </Box>
        </motion.div>
        <Container maxWidth="md">
          <motion.div variants={searchBarVariants}>
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
              {/* <Select
                defaultValue=""
                displayEmpty
                variant="outlined"
                sx={{ minWidth: 150 }}
              >
                <MenuItem value="">Services</MenuItem>
                <MenuItem value="Freelancers">Freelancers</MenuItem>
                <MenuItem value="Projects">Projects</MenuItem>
              </Select> */}
              <Button
                variant="contained"
                sx={{ padding: "0 30px", height: "56px" }}
              >
                Search
              </Button>
            </Box>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Popular Searches:{" "}
              <span style={{ fontWeight: "bold" }}>
                Motion Graphics, Social Media Marketing
              </span>
            </Typography>
          </motion.div>
        </Container>
      </Hero>
    </motion.div>
  );
}
