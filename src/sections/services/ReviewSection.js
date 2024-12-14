import React from 'react';
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Avatar,
  Card,
  CardContent,
  Rating,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const ReviewSection = ({ reviewStats, reviews }) => {
  return (
    <Box sx={{ mt: 5 }}>
      {/* Review Header */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Customer Reviews
      </Typography>

      <Grid container spacing={4} mt={1}>
        {/* Review Breakdown */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{padding: '30px'}}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary">
                {reviewStats.averageRating} <StarIcon />
              </Typography>
              {/* <Rating
              value={reviewStats.averageRating}
              precision={0.5}
              readOnly
              sx={{ mt: 1 }}
            /> */}
              <Typography variant="body2" color="text.secondary">
                Based on {reviewStats.totalReviews} reviews
              </Typography>
            </Box>

            {/* Star Breakdown */}
            <Box sx={{ mt: 2 }}>
              {reviewStats.breakdown.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  sx={{ mb: 1 }}
                >
                  <Typography variant="body2">{item.stars} Stars</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(item.count / reviewStats.totalReviews) * 100}
                    sx={{
                      flexGrow: 1,
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: '#eee',
                    }}
                  />
                  <Typography variant="body2">{item.count}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* Customer Reviews */}
        <Grid item xs={12} md={8}>
          {reviews.map((review, index) => (
            <Card key={index} sx={{ mb: 3 }}>
              <CardContent>
                {/* Reviewer Info */}
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={review.avatar} alt={review.name} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.date}
                    </Typography>
                  </Box>
                </Box>

                {/* Review Content */}
                <Box sx={{ mt: 1 }}>
                  <Rating value={review.rating} precision={0.5} readOnly />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {review.comment}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewSection;
