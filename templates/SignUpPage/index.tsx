'use client';

import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import Login from '@/components/Login';
import Field from '@/components/Field';

const SignUpPage = () => {
  const { colorMode, setColorMode } = useColorMode();
  const [email, setEmail] = useState('');

  return (
    <Login
      title="Crypto Intelligence"
      description="Gain an edge in crypto trading with artificial intelligence. "
      image="/images/login-pic-1.png"
    >
      <div className="text-base-2 mb-5">Sign up with</div>
      <div className="mb-8 flex space-x-2 border-b-2 border-theme-stroke pb-8">
        <button className="btn-stroke flex-1 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.451 12.672c.023 2.361 1.395 3.705 2.375 4.365.521.351.833.971.59 1.539a13.34 13.34 0 0 1-1.345 2.422c-1.039 1.472-2.117 2.939-3.816 2.969-1.669.03-2.206-.959-4.114-.959s-2.504.929-4.084.989c-1.64.06-2.888-1.592-3.936-3.059-2.141-3-3.776-8.478-1.58-12.176C4.634 6.927 6.584 5.764 8.7 5.735c1.61-.03 3.13 1.05 4.114 1.05s2.83-1.299 4.772-1.108c.667.027 2.325.224 3.707 1.444.525.463.338 1.251-.168 1.734-.77.734-1.69 1.993-1.674 3.817zm-3.137-8.98c.639-.749 1.124-1.714 1.274-2.734.093-.629-.494-1.111-1.116-.913-.946.301-1.895.895-2.533 1.62-.618.693-1.177 1.704-1.319 2.763-.076.566.425 1.025 1 .905 1.048-.219 2.033-.864 2.695-1.641z"
              fill={colorMode === 'light' ? '#1a1d1f' : '#fff'}
            />
          </svg>
          <span>Apple ID</span>
        </button>
      </div>
      <div className="text-base-2 mb-5">Or continue with email address</div>
      <Field
        className="mb-3"
        placeholder="Enter your email"
        icon="envelope"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Link className="btn-primary mb-3 w-full" href="/verify-code">
        Continue
      </Link>
      <div className="text-caption-1 text-theme-secondary">
        By signing up, you agree to the{' '}
        <Link
          className="text-theme-primary transition-colors hover:text-primary-1"
          href="/"
        >
          Terms of Use
        </Link>
        ,{' '}
        <Link
          className="text-theme-primary transition-colors hover:text-primary-1"
          href="/"
        >
          Privacy Notice
        </Link>
        , and{' '}
        <Link
          className="text-theme-primary transition-colors hover:text-primary-1"
          href="/"
        >
          Cookie Notice
        </Link>
        .
      </div>
    </Login>
  );
};

export default SignUpPage;
