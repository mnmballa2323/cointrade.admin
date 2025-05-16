'use client';

import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import Image from '@/components/Image';
import Icon from '@/components/Icon';
import User from '@/components/User';

const NotFoundPage = () => {
  const { colorMode } = useColorMode();

  return (
    <div className="flex min-h-svh flex-col">
      <div className="relative z-5 flex h-28 items-center pl-6 pr-8 md:h-24 md:pr-6">
        <Link
          className="mr-auto flex h-12 w-12 items-center justify-center"
          href="/"
        >
          <Image
            className="w-10 opacity-100"
            src={
              colorMode === 'light'
                ? '/images/logo-dark.svg'
                : '/images/logo-light.svg'
            }
            width={40}
            height={40}
            alt=""
          />
        </Link>
        <User />
      </div>
      <div className="flex grow items-center justify-center px-6 pb-24 pt-6 md:px-10 md:pb-12 md:pt-6">
        <div className="flex w-full max-w-[63rem] items-center xl:max-w-[47.5rem] md:block">
          <div className="w-[30.375rem] shrink-0 xl:w-[21.75rem] md:w-60">
            <Image
              className="w-full opacity-100"
              src="/images/404.png"
              width={486}
              height={522}
              alt=""
            />
          </div>
          <div className="grow pl-32 xl:pl-28 lg:pl-16 md:pl-0 md:pt-8">
            <div className="text-display mb-5 md:text-h2 md:mb-4">Oops!</div>
            <div className="text-h4 mb-10 text-theme-tertiary xl:text-h5 md:text-title-1s md:mb-8">
              We couldn&apos;t find the page you were looking for
            </div>
            <Link className="btn-secondary" href="/">
              <Icon name="arrow-left" />
              <span>Go home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
