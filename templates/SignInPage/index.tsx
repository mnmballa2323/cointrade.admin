'use client';

import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import Login from '@/components/Login';
import Field from '@/components/Field';

const SignInPage = () => {
  const { colorMode } = useColorMode();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Login
      title="Admin Login"
      description="Gain an edge in crypto trading with artificial intelligence."
      image="/images/login-pic-1.png"
      signIn
    >
      <Field
        className="mb-3"
        placeholder="Enter your email"
        icon="envelope"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Field
        className="mb-3"
        placeholder="Enter your password"
        icon="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button className="btn-primary mb-3 w-full">Sign In</button>
    </Login>
  );
};

export default SignInPage;
