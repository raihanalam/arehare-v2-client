import { Box, Typography, Container, Link, Grid, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2E2E2E, #1A1A1A)", // Modern Gray Gradient
        color: "#F5F5F5", // Eye-catching text color
        py: 6,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="600" gutterBottom sx={{ color: "#D1D1D1" }}>
              AreHare
            </Typography>
            <Typography variant="body2" sx={{ color: "#D1D1D1", lineHeight: 1.6 }}>
              Elevate your business with cutting-edge digital solutions in development, marketing, and beyond.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" fontWeight="600" gutterBottom sx={{ color: "#D1D1D1" }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["About Us", "Services", "Contact", "Blog"].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  underline="none"
                  sx={{
                    color: "#D1D1D1",
                    transition: "color 0.3s, transform 0.2s",
                    "&:hover": { color: "#D1D1D1", transform: "translateX(4px)" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" fontWeight="600" gutterBottom sx={{ color: "#D1D1D1" }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: "#D1D1D1",
                    transition: "color 0.3s, transform 0.3s",
                    "&:hover": { color: "#D1D1D1", transform: "scale(1.2)" },
                  }}
                  href="#"
                  target="_blank"
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Payment Methods */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="600" gutterBottom sx={{ color: "#D1D1D1" }}>
              We Accept
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
              {["Visa1.png", "Mastercard.png", "Stripe.png"].map((img, index) => (
                <Image
                  key={index}
                  src={`/assets/images/${img}`}
                  alt={img.split(".")[0]}
                  width={40}
                  height={25}
                  style={{ filter: "grayscale(100%)", transition: "filter 0.3s", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider & Copyright */}
        <Divider sx={{ backgroundColor: "#444", my: 4 }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#D1D1D1" }}>
            © {new Date().getFullYear()} AreHare Inc. | All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
