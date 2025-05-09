import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Avatar,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';

// Card Component
const ProjectCard = ({ project }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
      boxShadow: 3,
      borderRadius: 2,
      maxWidth: 800,
      width: '100%', // Full width of parent container
    }}
  >
    {/* Left Section: Image */}
    <Box
      sx={{
        flex: { xs: '0 0 auto', sm: '0 0 180px' }, // Fixed width for larger screens
        width: { xs: '100%', sm: 'auto' }, // Full width on small screens
        height: { xs: 200, sm: 'auto' }, // Fixed height for small screens
        overflow: 'hidden',
        borderTopLeftRadius: { xs: 8, sm: 0 },
        borderBottomLeftRadius: { sm: 8 },
        position: 'relative', // Required for Image to work properly
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill // Automatically fills the parent Box while maintaining aspect ratio
        style={{
          objectFit: 'cover', // Ensures the image covers the box without distortion
        }}
      />
    </Box>

    {/* Right Section: Content */}
    <Box sx={{ flex: 1, p: { xs: 2, sm: 3 }, position: 'relative' }}>
      <CardContent>
        {/* Company Logo */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Avatar src={project.companyLogo} alt={project.companyName} sx={{ width: 40, height: 40 }} />
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            noWrap
            fontSize={{ xs: '0.875rem', sm: '1rem' }} // Adjust font size for responsiveness
          >
            {project.companyName}
          </Typography>
        </Stack>

        {/* Project Title */}
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          sx={{ mb: 1, mt:3, fontSize: { xs: '1rem', sm: '1rem' },  
          lineHeight: '1.5', // Adjust to control spacing between lines
          height: '3rem', // Ensures two lines of height
          overflow: 'hidden', // Prevents extra content from showing
          display: '-webkit-box', // Enables webkit box model for line control
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
        }}
        >
          {project.title}
        </Typography>

        {/* Category & Time */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {project.category} • {project.timeAgo}
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Price and Button */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
            >
              {project.priceType}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              {project.priceRange}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              padding: { xs: '8px', sm: '10px' },
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            Send Proposal
          </Button>
        </Stack>
      </CardContent>

      {/* Favorite Icon */}
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>
    </Box>
  </Card>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
    proposalsCount: PropTypes.number.isRequired,
    priceRange: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
