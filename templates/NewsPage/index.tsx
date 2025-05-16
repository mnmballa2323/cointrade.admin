'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import Tabs from '@/components/Tabs';
import Image from '@/components/Image';
import Select from '@/components/Select';

import { news } from '@/mocks/news';

const tabs = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'Announcements',
  },
  {
    id: '2',
    title: 'Crypto',
  },
  {
    id: '3',
    title: 'AI features',
  },
  {
    id: '4',
    title: 'Change logs',
  },
];

const NewsPage = () => {
  const [type, setType] = useState(tabs[0]);

  return (
    <Layout title="News">
      <div className="card min-h-[calc(100vh-8.5rem)] px-28 py-10 3xl:px-12 2xl:py-12 xl:p-10 md:min-h-fit md:p-4">
        <div className="">
          {news.map(article => (
            <div
              className="relative pb-32 pl-64 before:absolute before:bottom-0 before:left-40 before:top-0 before:w-0.25 before:bg-theme-stroke last:pb-0 2xl:pb-20 2xl:pl-40 2xl:before:hidden xl:pl-0 md:pb-12"
              key={article.id}
            >
              <div className="text-h5 mb-10 xl:pr-32 md:mb-0 md:pr-0">
                {article.title}
              </div>
              <div className="absolute left-0 top-0 xl:left-auto xl:right-0 xl:text-right md:static md:mb-6 md:mt-2 md:flex md:items-center">
                <div className="text-base-1s md:text-caption-2m md:text-theme-secondary">
                  {article.date}
                </div>
                <div className="text-caption-2m text-theme-secondary md:ml-2">
                  {article.time}
                </div>
              </div>
              <div className="relative mb-10 h-[26.25rem] md:mb-6 md:h-[22.5rem]">
                <Image
                  className="rounded-3xl object-cover"
                  src={article.image}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  alt=""
                />
              </div>
              <div className="text-base-1s text-theme-secondary md:line-clamp-3">
                {article.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
