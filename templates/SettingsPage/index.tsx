'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import Select from '@/components/Select';
import Profile from './Profile';
import Security from './Security';
import Wallets from './Wallets';
import Card from './Card';
import Notifications from './Notifications';
import DeleteAccount from './DeleteAccount';

const settings = [
  {
    id: '0',
    title: 'Profile',
  },
  {
    id: '1',
    title: 'Password',
  },
  {
    id: '2',
    title: 'Wallets',
  },
  {
    id: '4',
    title: 'Notifications',
  },
  {
    id: '5',
    title: 'Delete Account',
  },
];

const SettingsPage = () => {
  const [active, setActive] = useState(settings[0]);

  return (
    <Layout title="Settings">
      <div className="card min-h-[calc(100vh-8.5rem)] md:-mb-2 md:min-h-[calc(100vh-11rem)] md:py-6">
        <div className="flex items-start lg:block">
          <Select
            className="hidden md:block"
            value={active}
            onChange={setActive}
            items={settings}
          />
          {/* <div className="w-66 shrink-0 space-y-3 2xl:w-46 lg:-mx-6 lg:flex lg:w-auto lg:space-x-3 lg:space-y-0 lg:overflow-auto lg:scroll-smooth lg:scrollbar-none lg:before:w-6 lg:before:shrink-0 lg:after:w-6 lg:after:shrink-0 md:hidden">
            {settings.map(item => (
              <button
                className={`text-base-2 flex h-12 w-full items-center rounded-full px-6 text-theme-secondary shadow-[inset_0_0_0_0.0625rem_#EFEFEF] transition-all hover:bg-theme-on-surface-2 hover:text-theme-primary hover:shadow-transparent dark:shadow-[inset_0_0_0_0.0625rem_#272B30] lg:w-auto lg:shrink-0 ${
                  active === item
                    ? '!bg-transparent !text-theme-primary !shadow-[inset_0_0_0_0.125rem_#0C68E9]'
                    : ''
                }`}
                key={item.id}
                onClick={() => setActive(item)}
              >
                {item.title}
              </button>
            ))}
          </div> */}
          <div className="grow pl-24 3xl:pl-15 lg:pl-0 lg:pt-15 md:pt-8">
          <Profile />
            {/* {active.id === '0' && <Profile />}
            {active.id === '1' && <Security />}
            {active.id === '2' && <Wallets />}
            {active.id === '4' && <Notifications />}
            {active.id === '5' && <DeleteAccount />} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
