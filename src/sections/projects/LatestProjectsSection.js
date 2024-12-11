import { useState, useEffect } from 'react';

import { Container, Box } from '@mui/material';
import ProjectList from './ProjectList';
import PROJECTS from '../../_mock/projects';

import SectionHeaderLeft from '../../components/section/SectionHeaderLeft';
import SectionHeaderRight from '@/components/section/SectionHeaderRight';

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
      <SectionHeaderLeft
        title="Latest Projects"
        subtitle="Explore the best projects that benefit you"
      />
      <SectionHeaderRight text="Explore New Projects" />
      </Box>
      <ProjectList projects={projects} />
      
    </Container>
  )
};