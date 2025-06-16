'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { NewsItems, dataProp } from '../../../data/NewsItem';

export default function LatestNews() {
  const [latestNews, setLatestNews] = useState<dataProp[]>([]);
  const [selectedNews, setSelectedNews] = useState<dataProp | null>(null);
  const router = useRouter();

  useEffect(() => {
    const sortedNews = [...NewsItems]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
      
    setLatestNews(sortedNews);
  }, []);

  const handleNewsClick = (id: number) => {
    const news = NewsItems.find(item => item.id === id);
    if (news) {
      setSelectedNews(news);
    }
  };

  const handleAllNewsClick = () => {
    router.push('/NewsDetail');
  };

  const handleBackClick = () => {
    setSelectedNews(null);
  };

  if (latestNews.length === 0) return null;

  // Show full news view if a news item is selected
  if (selectedNews) {
    return (
      <section className="w-full bg-[#1B1B1B] py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden">
            <Image
              src={selectedNews.image}
              alt={selectedNews.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-6">
              <button
                onClick={handleBackClick}
                className="text-[#e6a54c] hover:text-white transition-colors duration-300 mb-4 text-sm uppercase"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                ← Back to Latest News
              </button>
              <span
                className="inline-block bg-[#e6a54c] text-black px-3 py-1 text-xs font-bold rounded mb-4"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {selectedNews.type}
              </span>
              <h1 
                className="text-white text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {selectedNews.title}
              </h1>
              <p 
                className="text-[#e6a54c] mb-4"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {selectedNews.date}
              </p>
              <p 
                className="text-white leading-relaxed"
                style={{ fontFamily: 'Germania One, cursive' }}
              >
                {selectedNews.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const [featuredNews, ...secondaryNews] = latestNews;

  return (
    <section className="w-full bg-[#1B1B1B] py-8 px-4">
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
        <div className="flex flex-col gap-4">
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
    </section>
  );
}
