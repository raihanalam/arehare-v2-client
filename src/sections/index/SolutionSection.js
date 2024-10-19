import { Typography, Box, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Brush, Code, BarChart, ContentCopy, Search, Campaign } from '@mui/icons-material';

// New Section Style
const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: '#f7f7f7',
  textAlign: 'center',
}));

// Card style
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[6],
  },
}));

// Icon style
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 60,
  height: 60,
  margin: '0 auto',
  marginBottom: theme.spacing(2),
}));

// Category data
const categories = [
  { title: 'AI Integration', description: 'Innovative AI research and development services.', icon: <BarChart /> },
  { title: 'Web Development', description: 'Top-notch web design and development services.', icon: <Code /> },
  { title: 'Graphic Design', description: 'Creative and unique graphic design solutions .', icon: <Brush /> },
  { title: 'SEO Services', description: 'Improve your search engine rankings with expert SEO.', icon: <Search /> },
  { title: 'Content Writing', description: 'Engaging and high-quality content for your business.', icon: <ContentCopy /> },
  { title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies.', icon: <Campaign /> },
];

// New Section Component - Top-notch Digital Solutions
export default function SolutionsSection() {
  return (
    <StyledSection>
      <Container maxWidth="xl">
        <Typography variant="h3" gutterBottom>
          Top-notch Digital Solutions
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our diverse range of digital services to help grow your business.
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <StyledAvatar>
                  {category.icon}
                </StyledAvatar>
                <CardContent>
                  <Typography variant="h5" gutterBottom>{category.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
}
