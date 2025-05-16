'use client';

import Icon from '@/components/Icon';
import Layout from '@/components/Layout';
import { variantsChat } from '@/mocks/variantsChat';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout title="Agents">
      <div className="mt-4 grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
        {variantsChat.map(variant => (
          <Link
            className="card-color flex flex-col rounded-[1.25rem] p-8"
            key={variant.id}
            href={variant.url}
          >
            <div className="text-title-1s mb-2">{variant.title}</div>
            <div className="text-body-2s mb-12 md:mb-8">{variant.content}</div>
            <div className="card-icon-color relative mt-auto inline-flex h-10 w-10 items-center justify-center rounded-xl">
              <Image
                className="w-6 opacity-100 group-hover:opacity-0"
                src={variant.icon}
                width={24}
                height={24}
                alt=""
              />
              <Icon
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-theme-white-fixed opacity-0 transition-opacity group-hover:opacity-100"
                name="arrow-up-right-thin"
              />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
