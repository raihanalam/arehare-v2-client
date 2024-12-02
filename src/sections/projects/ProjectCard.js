import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button, Stack, Avatar, Box, Divider, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Card Component
const ProjectCard = ({ project }) => (
  <Card sx={{ display: 'flex', boxShadow: 3, borderRadius: 2, maxWidth: 800 }}>
    {/* Left Section: Image */}
    <Box sx={{ flex: '0 0 180px', overflow: 'hidden' }}>
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      />
    </Box>

    {/* Right Section: Content */}
    <Box sx={{ flex: 1, p: 2, position: 'relative' }}>
      <CardContent>
        {/* Company Logo */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Avatar src={project.companyLogo} alt={project.companyName} sx={{ width: 40, height: 40 }} />
          <Typography variant="subtitle2" fontWeight="bold" noWrap>
            {project.companyName}
          </Typography>
        </Stack>

        {/* Project Title */}
        <Typography variant="subtitle1" fontWeight="bold" noWrap sx={{ mb: 1 }}>
          {project.title}
        </Typography>

        {/* Category & Time */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {project.category} • {project.timeAgo}
        </Typography>

        {/* Proposals */}
        {/* <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.proposalsCount} sent proposal{project.proposalsCount > 1 ? 's' : ''}
        </Typography> */}

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Price and Button */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary">
              {project.priceType}
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {project.priceRange}
            </Typography>
          </Box>
          <Button variant="outlined" size="small" sx={{padding: "10px"}}>
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
