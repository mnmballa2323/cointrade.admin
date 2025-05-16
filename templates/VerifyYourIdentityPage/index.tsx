'use client';

import { useState } from 'react';
import Login from '@/components/Login';
import Field from '@/components/Field';

const VerifyYourIdentityPage = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [nationality, setNationality] = useState('');

  return (
    <Login
      title="Verify your identity"
      description="Check your email to get verify coded"
      image="/images/login-pic-2.png"
    >
      <div className="space-y-6">
        <Field
          className="mb-3"
          label="Full name"
          placeholder="Display name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <div className="flex space-x-6 md:block md:space-x-0 md:space-y-6">
          <Field
            className="flex-1"
            label="NRIC/FIN"
            placeholder="NRIC/FIN"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
          <Field
            className="flex-1"
            label="Nationality"
            placeholder="Nationality"
            value={nationality}
            onChange={e => setNationality(e.target.value)}
            required
          />
        </div>
        <div className="">
          <div className="text-base-2 mb-2">Upload your ID photo</div>
          <div className="group relative">
            <input
              className="absolute inset-0 cursor-pointer opacity-0"
              type="file"
            />
            <div className="text-base-2 flex h-38 items-center justify-center rounded-xl bg-theme-n-8 text-theme-tertiary transition-colors group-hover:text-theme-primary">
              Drag & drop or click to upload
            </div>
          </div>
        </div>
      </div>
      <button className="btn-primary mt-6 w-full">Verify with NeuPass</button>
    </Login>
  );
};

export default VerifyYourIdentityPage;
