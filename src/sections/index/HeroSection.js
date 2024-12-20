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
import { Search } from "@mui/icons-material";
import { motion } from "framer-motion";

// Custom Styling
const Hero = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: "linear-gradient(135deg, #FAEFEF 0%, #EBFFFE 100%)",
  height: "580px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
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

// import {containerVariants, itemVariants, searchBarVariants} from "../../components/animate/variants"

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Reduced for smoother stagger
      delayChildren: 0.2, // Added delay for a smoother start
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier easing
    },
  },
};

const searchBarVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HeroSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Hero>
        <motion.div variants={itemVariants}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontFamily: "DM Sans, Sans-serif",
              fontSize: "56px",
              fontWeight: "500",
              lineHeight: "1.1em",
            }}
          >
            Find The Best <br />
            <span
              style={{
                color: "transparent",
                backgroundImage:
                  "linear-gradient(90deg, #0A4EFB 0%, #F77991 100%)",
                backgroundClip: "text",
                fontWeight: "500",
              }}
            >
              Freelance Talent
            </span>
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="body1" paragraph>
            Find the perfect talent exactly when you need
          </Typography>
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
              <Select
                defaultValue=""
                displayEmpty
                variant="outlined"
                sx={{ minWidth: 150 }}
              >
                <MenuItem value="">Services</MenuItem>
                <MenuItem value="Freelancers">Freelancers</MenuItem>
                <MenuItem value="Projects">Projects</MenuItem>
              </Select>
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
