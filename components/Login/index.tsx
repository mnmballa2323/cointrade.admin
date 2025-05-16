import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import Image from '@/components/Image';

type LoginProps = {
  title: string;
  description?: string;
  image: string;
  signIn?: boolean;
  verifyCode?: boolean;
  children: React.ReactNode;
};

const Login = ({
  title,
  description,
  image,
  signIn,
  verifyCode,
  children,
}: LoginProps) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className="relative flex min-h-svh bg-theme-on-surface-1 p-4 lg:pb-12 lg:pt-24 md:px-6 md:pb-8 md:pt-20">
      <div className="text-base-1s absolute right-12 top-12 text-theme-secondary 2xl:right-10 2xl:top-10 xl:right-6 xl:top-6 lg:right-12 lg:top-12 md:right-6 md:top-8">
        {signIn ? 'Dont have an account?' : 'Already a member?'}&nbsp;
        <Link
          className="text-theme-primary transition-colors hover:text-primary-1"
          href={signIn ? '/sign-up' : '/sign-in'}
        >
          {signIn ? 'Sign up' : 'Sign in'}
        </Link>
      </div>
      <div className="relative w-[37.5rem] overflow-hidden rounded-[2rem] bg-theme-dune 2xl:w-[30rem] xl:w-[24.375rem] lg:hidden">
        <Image className="object-cover" src={image} fill alt="" />
      </div>
      <div className="flex grow items-center justify-center px-12 py-14 lg:p-0">
        <div className="w-full max-w-[32.5rem] 2xl:max-w-[24rem]">
          <div className="mb-10 2xl:mb-8">
            <Link
              className="absolute left-10 top-10 z-2 2xl:right-8 2xl:top-8 lg:right-10 lg:top-10 md:static md:mb-5 md:inline-block"
              href="/"
            >
              <Image
                className="opacity-100"
                src={
                  colorMode === 'light'
                    ? '/images/Cointradetext.png'
                    : '/images/Cointradetext.png'
                }
                width={170}
                height={40}
                alt=""
              />
            </Link>
            <div className="text-h1 relative 2xl:text-h2 md:text-h3">
              {title}
              {verifyCode && (
                <div className="pointer-events-none absolute -top-12 right-4.5 md:hidden">
                  <Image
                    src="/images/confetti.svg"
                    width={213}
                    height={163}
                    alt=""
                  />
                </div>
              )}
            </div>
            {description && (
              <div className="text-title-1s mt-5 text-theme-tertiary md:text-base-1s md:mt-4">
                {description}
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Login;
