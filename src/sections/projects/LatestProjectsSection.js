import { useState, useEffect } from 'react';

import { Container, Box } from '@mui/material';
import SectionHeader from '../../components/section/SectionHeader';
import ProjectList from './ProjectList';
import SectionFooter from '../../components/section/SectionFooter';
import PROJECTS from '../../_mock/projects';

// Mock data


export default function LatestProjectsSection() {

  const [projects, setProjects] = useState([]);



  useEffect(() => {
    if (PROJECTS) {
      setProjects(PROJECTS.slice(0, 4));
    }
  }, [PROJECTS]);

  return (

    <Container maxWidth="xl">
      <Box sx={{display: "flex" , justifyContent: "space-between"}}>
      <SectionHeader
        title="Latest Projects"
        subtitle="Explore the best projects that benefit you"
      />
      <SectionFooter />
      </Box>
      <ProjectList projects={projects} />
      
    </Container>
  )
};