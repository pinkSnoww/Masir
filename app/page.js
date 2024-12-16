import Hero from '../src/components/hero/Hero';
import BannerSection from '../src/components/HeroSection/BannerSection';
import {Features} from '../src/components/features/Features';
import CoursesSection from '../src/components/courses/CoursesSection';
import PodcastSection from '../src/components/podcast/PodcastSection';
import LearningPath from '../src/components/learningPath/LearningPath';
import MentorCourseSection from '../src/components/ProfessionalCourse/MentorCourseSection';
import CourseSectionPage from '../src/components/CourseSection/CourseSectionPage';
import TestimonialsSection from '../src/components/testimonials/TestimonialsSection';
import dynamic from 'next/dynamic';
import Footer from '../src/components/Footer/Footer';
import {NextUIProvider} from "@nextui-org/react";
import CourseSections from '../src/components/CourseCard/CourseSections';
import BlogSection from '../src/components/blog/BlogSection';
import RootLayout from './layout';
export default function Home() {
  return (
    <RootLayout>
    <NextUIProvider>
    <main className="flex flex-col items-center ">
 
    <Hero/>
     <BannerSection/>
       <Features/>
     <CoursesSection/>
       
        <PodcastSection/>
        <LearningPath/>
          <MentorCourseSection />
        <TestimonialsSection/>
      <CourseSectionPage/>
        <BlogSection/>
         <Footer/>
        </main>
        </NextUIProvider>
        </RootLayout>
  )
}
