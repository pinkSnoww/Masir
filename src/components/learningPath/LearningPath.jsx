"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import { useRouter } from "next/navigation";

const LearningPath = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/categories', {
          timeout: 30000, // 30 seconds
        });
        console.log(response);
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        
        setCategories(response.data?.results || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error.response?.data?.details || error.message);
        
        // Retry logic (up to 3 times)
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000); // Wait 2 seconds before retrying
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [retryCount]); // Add retryCount as dependency

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Loading categories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-red-500 mb-4">Error: {error}</div>
        {retryCount < 3 && (
          <div className="text-gray-500">Retrying... ({retryCount + 1}/3)</div>
        )}
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center px-20 w-full mt-32 max-md:px-5">
      <section className="flex flex-wrap gap-6 items-center px-2 w-full rounded-3xl min-h-[128px] text-slate-500 max-md:max-w-full">
        <h1 className="flex-1 shrink gap-2 self-stretch my-auto text-4xl text-right leading-[64px] min-w-[240px] max-md:max-w-full">
          <span className="font-medium">مسیر یادگیری تخصصی</span>
          <br />
          <span className="font-medium text-slate-500">خود را انتخاب کنید</span>
        </h1>
        <p className="gap-2 self-stretch my-auto text-2xl font-light min-w-[240px]">
          با توجه به هدف و تخصص خود، <br />
          مسیر یادگیری مناسبی را از بین دوره‌های <br />
          مختلف انتخاب کنید.
        </p>
      </section>
      
      <section className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
        {categories?.map(category => (
          <div 
            key={`${category.id}-${category.name}`}
           
            className="cursor-pointer"
          >
            <CategoryCard
              name={category.name}
              englishTitle={category.englishTitle}
              number={category.id}
              onClick={() => router.push('/BillingCourse')}
            />
          </div>
        ))}   </section>
    </main>
  );
}

export default LearningPath;
