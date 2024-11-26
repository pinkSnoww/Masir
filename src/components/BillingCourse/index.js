
import React from 'react';
import CourseHeader from '@/components/BillingCourse/CourseHeader';
import CourseBanner from '@/components/BillingCourse/CourseBanner';
import CourseHighlights from '@/components/BillingCourse/CourseHighlights';
import CourseOverview from '@/components/BillingCourse/CourseOverview';
import CourseSyllabus from '@/components/BillingCourse/CourseSyllabus';
import CourseInstructors from '@/components/BillingCourse/CourseInstructors';
import CourseMentors from '@/components/BillingCourse/CourseMentors';
import CourseReviews from '@/components/BillingCourse/CourseReviews';
import CourseProjects from '@/components/BillingCourse/CourseProject';
import CourseFAQ from '@/components/BillingCourse/CourseFAQ';
import Footer from '@/components/Footer/Footer';
const BillingCourse = () => {
    return (
        
               
      <main className='flex flex-col items-center w-full'>
      <CourseHeader />
        <CourseBanner />
        <CourseHighlights />
        <CourseOverview />
        <CourseSyllabus />
        <CourseInstructors />
        <CourseMentors />
        <CourseReviews />
        <CourseProjects />
        <CourseFAQ />
        <Footer/>
      </main>
    

        
    );
};

export default BillingCourse;