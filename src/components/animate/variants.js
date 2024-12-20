// Animation Variants
const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.25, // Reduced for smoother stagger
         delayChildren: 0.2, // Added delay for a smoother start
       },
     },
   };
   
   const itemVariants = {
     hidden: { opacity: 0, y: 50 },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         duration: 0.8,
         ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier easing
       },
     },
   };
   
   const searchBarVariants = {
     hidden: { opacity: 0, scale: 0.9 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: {
         duration: 0.8,
         ease: [0.25, 0.46, 0.45, 0.94],
       },
     },
   };