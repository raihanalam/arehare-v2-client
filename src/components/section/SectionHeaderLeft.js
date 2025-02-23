import PropTypes from 'prop-types';
import { Typography, Stack, useTheme } from '@mui/material';

const SectionHeaderLeft = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Stack spacing={1} alignItems="flex-start" sx={{ mb: 4 }} >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }, // Responsive font size
          color: theme.palette.text.primary, // Minimal color
        }}

      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' }, // Slightly smaller on mobile
          maxWidth: '600px', // Keep it readable
        }}
      >
        {subtitle}
      </Typography>
    </Stack>
  );
};

SectionHeaderLeft.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeaderLeft;
