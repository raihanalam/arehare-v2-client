import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "Custom Website Design & Development Custom Website Design & Development Custom Website Design & Development",
  "Mobile App Development (iOS/Android)",
  "Full-Stack Web Application Development",
  "SEO & Digital Marketing Strategy",
  "Social Media Campaign Management",
  "UI/UX Design and Prototyping",
  "Graphic Design & Branding Solutions",
  "Content Creation & Copywriting Services",
  "Video Editing & Animation Creation",
  "E-commerce Store Setup & Maintenance",
  "Cloud Solutions & DevOps Consulting",
  "API Development & Integration",
  "CRM/ERP Implementation & Customization",
  "WordPress Theme & Plugin Development",
  "Data Analysis & Business Intelligence",
  "Cybersecurity & Penetration Testing",
  "Blockchain Development & Smart Contracts",
  "AI & Machine Learning Solutions",
  "Digital Product Design & Prototyping",
  "Virtual Assistance & Project Management",
 "Translation & Localization Services",
  "AR/VR Application Development",
  "SaaS Application Development",
  "Customer Support & Service Desk Solutions",
  "IT Consulting & Infrastructure Setup",
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(), // Using faker.datatype.uuid() for version <= 7
    cover: `/assets/images/products/service-${setIndex}.jpg`,
    images: [`/assets/images/products/service-${setIndex}.jpg`, `/assets/images/products/service-${setIndex+1}.jpg`, `/assets/images/products/service-${setIndex+2}.jpg`],
    user: {name: faker.name.fullName(), avatar: `/assets/images/avatars/avatar_${index + 1}.jpg`,},
    rating: 5,
    ratingCount: 35,
    name: PRODUCT_NAME[index],
    price: parseFloat(faker.finance.amount(4, 99, 2)), // Generate a price as a string and convert to float
    priceSale: setIndex % 3 ? null : parseFloat(faker.finance.amount(19, 29, 2)), // Same here
   
    status: sample(['Featured', 'Top Seller', '', '']),
  };
});

export default products;
