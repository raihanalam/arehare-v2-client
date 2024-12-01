import PropTypes from 'prop-types';
import { Typography, Stack } from '@mui/material';

const SectionHeader = ({ title, subtitle }) => (
  <Stack spacing={1} alignItems="left" sx={{ mb: 4 }}>
    <Typography variant="h4" fontWeight="bold">
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {subtitle}
    </Typography>
  </Stack>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeader;
