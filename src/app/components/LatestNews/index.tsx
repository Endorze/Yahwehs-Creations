'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { NewsItems, dataProp } from '../../../data/NewsItem'; 
import Container from '../Container/container';

export default function LatestNews() {
  const [latestNews, setLatestNews] = useState<dataProp[]>([]); 
  const router = useRouter();

  useEffect(() => {
    const sortedNews = [...NewsItems]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
    
    setLatestNews(sortedNews);
  }, []);

  const handleNewsClick = (id: number) => {
    router.push(`/news/${id}`);
  };

  const handleAllNewsClick = () => {
    router.push('/blog');
  };

  if (latestNews.length === 0) return null;

  const [featuredNews, ...secondaryNews] = latestNews;

  return (
    <section className="w-full bg-[#1B1B1B] py-8 px-4 relative">
      <Container>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[#e6a54c] text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Germania One, cursive' }}>
              LATEST NEWS
            </h2>
            <p className="text-[#808080] text-sm" style={{ fontFamily: 'Germania One, cursive' }}>
              YAHWEH'S CREATIONS
            </p>
          </div>
          <button
            onClick={handleAllNewsClick}
            className="text-[#808080] hover:text-[#e6a54c] transition-colors duration-300 text-sm"
            style={{ fontFamily: 'Germania One, cursive' }}
          >
            ALL NEWS
          </button>
        </div>

        <div className="flex flex-col gap-4 pb-12">

          <div
            onClick={() => handleNewsClick(featuredNews.id)}
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer group"
          >
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span
                className="inline-block bg-[#e6a54c] text-black px-3 py-1 text-xs font-bold rounded mb-3"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {featuredNews.type}
              </span>
              <h3
                className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-[#e6a54c] transition-colors duration-300"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {featuredNews.title}
              </h3>
              <p
                className="text-[#808080] text-sm"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {featuredNews.date}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondaryNews.map((news: dataProp) => ( 
              <div
                key={news.id}
                onClick={() => handleNewsClick(news.id)}
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="inline-block bg-[#e6a54c] text-black px-2 py-1 text-xs font-bold rounded mb-2"
                    style={{ fontFamily: 'Germania One, cursive' }}
                  >
                    {news.type}
                  </span>
                  <h4
                    className="text-white text-sm md:text-base font-bold mb-1 group-hover:text-[#e6a54c] transition-colors duration-300 line-clamp-2"
                    style={{ fontFamily: 'Germania One, cursive' }}
                  >
                    {news.title}
                  </h4>
                  <p
                    className="text-[#808080] text-xs"
                    style={{ fontFamily: 'Germania One, cursive' }}
                  >
                    {news.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Container>
       <img src={"/images/effects/gradientline.png"} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </section>
  );
}
