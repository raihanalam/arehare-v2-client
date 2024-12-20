import Head from 'next/head';
// Sections
import Navbar from '../sections/index/NavSection';
import HeroSection from '../sections/index/HeroSection';
import SolutionsSection from '../sections/index/SolutionSection';
import ServiceSection from '../sections/index/ServiceSections';
import HoverCardComponent from '../sections/index/ImageCardSection';
import BuilderSection from '../sections/index/BuilderSection';
import ReviewSlider from '../sections/index/ReviewSlider';
import BlogSection from '../sections/index/BlogSection';
import Footer from '@/sections/index/FooterSection';
import LatestProjectsSection from '@/sections/projects/LatestProjectsSection';
import TopRatedFreelancers from '@/sections/index/TopRatedFreelancers'
// ----------------------------------------------------------------------

// Main HomePage Component

export default function HomePage() {
     return (
          <>
               <Head>
                    <title>AreHare Inc.</title>
                    <meta name="description" content="Leading Digital Solutions for Your Business" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <Navbar />
               <HeroSection />
               <SolutionsSection />
               <TopRatedFreelancers/>
               <ServiceSection />
               <LatestProjectsSection />
               <HoverCardComponent/>
               <ReviewSlider/>
               {/* <BuilderSection/> */}
               <BlogSection />
               <Footer/>
          </>
     );
}
