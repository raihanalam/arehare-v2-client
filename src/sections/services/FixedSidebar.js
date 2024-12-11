// components/FixedSidebar.js
import { Tabs, Tab, Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';

const FixedSidebar = ({ packages, profile }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <Box sx={{ position: 'sticky', top: 80 }}>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        {packages.map((pkg, index) => (
          <Tab label={pkg.name} key={index} />
        ))}
      </Tabs>
      {packages.map((pkg, index) => (
        <Card
          key={index}
          sx={{ mt: 2, border: selectedTab === index ? '2px solid #1976d2' : '1px solid #ccc' }}
        >
          <CardContent>
            <Typography variant="h6">{pkg.name}</Typography>
            <Typography variant="h4">${pkg.price}</Typography>
            <Typography variant="body2">Delivery Time: {pkg.delivery}</Typography>
            <Typography variant="body2">Revisions: {pkg.revisions}</Typography>
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              Continue
            </Button>
          </CardContent>
        </Card>
      ))}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">{profile.name}</Typography>
          <Typography variant="body2">{profile.location}</Typography>
          <Box mt={2} display="flex" gap={2}>
            <Button variant="outlined">See Profile</Button>
            <Button variant="contained">Send Message</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FixedSidebar;
