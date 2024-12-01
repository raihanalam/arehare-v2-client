import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PROJECT_TITLES = [
     "Write professional resume, cover letter, and LinkedIn profile",
     "Edit travel and vacation footage to an amazing & professional level",
     "Write the best Dutch SEO blog, website content, or landing page",
     "Build WordPress Website Design, Elementor, Landing Pages",
     "Create a stunning corporate brand identity package",
     "Develop a fully functional e-commerce store",
     "Design engaging social media posts for your brand",
     "Optimize your website for on-page SEO",
     "Translate and localize your website into multiple languages",
     "Design a responsive and modern portfolio website",
     "Craft a compelling business pitch or proposal",
     "Edit and produce professional-quality YouTube videos",
     "Create a custom mobile app UI/UX prototype",
     "Provide consultancy for AI-driven business solutions",
     "Develop a SaaS platform with secure user authentication",
     "Create a chatbot for customer support automation",
     "Manage your digital marketing campaigns for higher ROI",
     "Write engaging blog posts on various trending topics",
     "Develop an API for seamless integration with third-party tools",
     "Deliver a high-quality motion graphics animation",
];

// ----------------------------------------------------------------------

const projects = [...Array(20)].map((_, index) => {
     
     const setIndex = index + 1;
     const priceMin = faker.datatype.number({ min: 50, max: 300 });
     const priceMax = priceMin + faker.datatype.number({ min: 50, max: 300 });

     return {
          id: faker.datatype.uuid(),
          companyName: "arehare",
          image: `/assets/images/products/service-${setIndex}.jpg`,
          title: PROJECT_TITLES[index % PROJECT_TITLES.length], // Cycles through the titles
          category: sample([
               "Resume Writing",
               "Video Editing",
               "SEO & Content Writing",
               "Web Development",
               "Graphic Design",
               "Translation & Localization",
               "Digital Marketing",
               "App Development",
          ]),
          timeAgo: `${faker.datatype.number({ min: 1, max: 6 })} months ago`,
          proposalsSent: faker.datatype.number({ min: 1, max: 15 }),
          priceType: sample(["Fixed Price", "Hourly Rate"]),
          priceRange: `$${priceMin} - $${priceMax}`,
     };
});

export default projects;

