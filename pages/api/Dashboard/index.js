import React from 'react';
import Header from './Header';
import CourseProgress from './CourseProgress';
import UserInfo from './UserInfo';
import ActiveDiscounts from './ActiveDiscount';

function Dashboard() {
  return (
    <div className="flex overflow-hidden flex-col pt-12 pb-96 mx-16  max-md:pb-24">
      <Header />
      <div className="flex flex-wrap gap-8 self-center bg-white mt-6 w-full max-w-[1312px] max-md:max-w-full">
      <div className="flex flex-col grow shrink min-w-[240px] w-[422px] max-md:max-w-full">
          <UserInfo />
          <ActiveDiscounts />
        </div>
        <CourseProgress />
       
      </div>
    </div>
  );
}

export default Dashboard;