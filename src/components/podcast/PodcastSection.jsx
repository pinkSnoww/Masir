"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PodcastCard from "./PodcastCard";
import SlideControls from "./SlideControls";

const API_BASE_URL = 'http://171.22.25.164/api/';
const LOGIN_URL = `${API_BASE_URL}login/`;
const PODCASTS_URL = `${API_BASE_URL}podcasts/v1/`;

function PodcastSection() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
      const fetchPodcasts = async () => {
        try {
          setLoading(true);
          const response = await axios.get(PODCASTS_URL);
          console.log("p",response.data.results);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          
          setPodcasts(response.data?.results || []);
          setError(null);
        } catch (error) {
          console.error('Error fetching podcasts:', error);
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
  
      fetchPodcasts();
    }, [retryCount]); // Add retryCount as dependency
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-lg">Loading podcasts...</div>
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
        <main className="flex flex-col items-center px-20 w-full mt-4 max-md:px-5">
            <section className="flex flex-col mx-auto  max-w-full w-full max-md:mt-10">
                <header className="flex flex-wrap gap-10 justify-between items-end w-full max-md:max-w-full">
                    <h1 className="text-5xl font-medium text-right leading-[70px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[65px]">
                        پادکست‌های آموزشی <br /> برای رشد و موفقیت در کسب‌وکار
                    </h1>
                    <h2 className="text-3xl font-light text-zinc-600 max-md:max-w-full">
                        بهترین توصیه‌ها از برترین متخصصان <br /> برای توسعه و پیشرفت حرفه‌ای شما
                    </h2>
                </header>

                    <div className="flex mt-20">
                        {podcasts?.length > 0 ? (
                            podcasts.map(podcast => (
                                <PodcastCard key={podcast.id} 
                                    title={podcast.title}
                                    cover_file={podcast?.cover_file}
                                    duration={podcast.duration}
                                    producers={podcast.producers}
                                />
                            ))
                        ) : (
                            <div>No podcasts available</div>
                        )}
                    </div>
                    <SlideControls />
              
            </section>
        </main>
    );
}

export default PodcastSection;
