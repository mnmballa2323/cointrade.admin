'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import RecentActivities from './RecentActivities';

const tabs = [
  {
    id: '0',
    title: 'TransactionPage',
  },
  {
    id: '1',
    title: 'TransactionPage',
  },
  {
    id: '2',
    title: 'Crypto',
  },
  {
    id: '3',
    title: 'AI TransactionPage',
  },
  {
    id: '4',
    title: 'Change logs',
  },
];

const Transactions = () => {

  return (
    <Layout title="Transactions">
      <div className="card rounded-lg px-6 shadow-md">
        <RecentActivities/>
      </div>
    </Layout>
  );
};

export default Transactions;
