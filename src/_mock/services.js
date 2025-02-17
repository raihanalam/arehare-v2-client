import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const SERVICE_NAME = [
  "Full-Stack Web Application Development",
  "Odoo ERP Development Customization & Deployment",
  "WordPress Theme & Plugin Development",
  "Shopify E-commerce Store Setup & Maintenance",
  "Cloud Solutions & DevOps Consulting",
  "API Development & Integration",
  "SaaS Application Development",
  "Mobile App Development (iOS/Android)",
  "Data Analysis & Business Intelligence",
  "Cybersecurity & Penetration Testing",
  "AI & Machine Learning Solutions",
  "Digital Product Design & Prototyping",
  "UI/UX Design and Prototyping",
  "Graphic Design & Branding Solutions",
  "Content Creation & Copywriting Services",
  "Video Editing & Animation Creation",
  "SEO & Digital Marketing Strategy",
  "Social Media Campaign Management",
  "Virtual Assistance & Project Management",
  "Translation & Localization Services",
  "IT Consulting & Infrastructure Setup",
];

// ----------------------------------------------------------------------

const services = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(), // Using faker.datatype.uuid() for version <= 7
    cover: `/assets/images/services/service-${setIndex}.jpg`,
    images: [`/assets/images/services/service-${setIndex}.jpg`, `/assets/images/services/service-${setIndex+1}.jpg`, `/assets/images/services/service-${setIndex+2}.jpg`],
    user: {name: faker.name.fullName(), avatar: `/assets/images/avatars/avatar_${index + 1}.jpg`,},
    rating: 5,
    ratingCount: 35,
    name: SERVICE_NAME[index],
    price: parseFloat(faker.finance.amount(4, 99, 2)), // Generate a price as a string and convert to float
    priceSale: setIndex % 3 ? null : parseFloat(faker.finance.amount(19, 29, 2)), // Same here
   
    status: sample(['Featured', 'Top Seller', '', '']),
  };
});

export default services;
