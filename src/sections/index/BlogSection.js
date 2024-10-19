import { useState, useEffect } from 'react';
import { Button, Typography, Container, Grid, Divider } from '@mui/material';
import { BlogPostCard } from '../@dashboard/blog';

// mock
import POSTS from '../../_mock/blog';

// ----------------------------------------------------------------------

// Blog Component
export default function BlogSection() {

     const [blogData, setBlogData] = useState([]);

     useEffect(() => {

          if (POSTS) {
               setBlogData(POSTS.slice(0,7));
          }

     }, [POSTS])

     return (

          <Container maxWidth="xl">
               <Typography variant="h3" sx={{ mb: 5, mt: 10 }}>
                    Latest Release Blogs
               </Typography>
               <Grid container spacing={3}>
                    {blogData.map((post, index) => (
                         <BlogPostCard key={post.id} post={post} index={index} />
                    ))}
               </Grid>

               <Divider sx={{ mt: 3, mb: 3 }}>
                    <Button variant="outlined" color="inherit" sx={{ color: 'black' }}>See More</Button>

               </Divider>
          </Container>
     );
}
