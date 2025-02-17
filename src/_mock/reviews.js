
const packages = [
     { name: 'Basic', price: 50, delivery: '1 day', revisions: '-', source: 1, prototype: 1, features: ['Introduce and demonstrate'] },
     { name: 'Standard', price: 100, delivery: '7 days', revisions: 2, source: 1, prototype: 1, features: ['Engage and connect'] },
     { name: 'Premium', price: 140, delivery: '10 days', revisions: '-', source: 1, prototype: 1, features: ['Explain and Excite'] },
   ];
 
   const reviewStats = {
     averageRating: 4.8,
     totalReviews: 56,
     breakdown: [
       { stars: 5, count: 45 },
       { stars: 4, count: 8 },
       { stars: 3, count: 2 },
       { stars: 2, count: 1 },
       { stars: 1, count: 0 },
     ],
   };
 
   const reviews = [
     {
       name: 'John Doe',
       avatar: '/assets/images/avatars/user1.jpg',
       date: 'December 10, 2024',
       rating: 5,
       comment: 'Absolutely outstanding service! Highly recommend.',
     },
     {
       name: 'Jane Smith',
       avatar: '/assets/images/avatars/user2.jpg',
       date: 'December 5, 2024',
       rating: 4.5,
       comment: 'Great work, very professional. Would hire again.',
     },
     {
       name: 'Michael Johnson',
       avatar: '/assets/images/avatars/user3.jpg',
       date: 'November 20, 2024',
       rating: 4,
       comment: 'Good overall, but delivery could be faster.',
     },
   ];

   export default packages;