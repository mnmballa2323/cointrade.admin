'use client';
import React from 'react';
import Layout from '@/components/Layout';
import UserCard from './Usercard';
import { UserCardProps } from './types';

const Users = () => {
  const userList: UserCardProps[] = [
    {
      address: '0x1234567890abcdef1234567890abcdef12345678',
      email: 'john@example.com',
      volume: 102,
      transactions: 45,
      joiningDate: '2023-01-15',
    },
    {
      address: '0xabcdef1234567890abcdef1234567890abcdef12',
      email: 'jane@example.com',
      volume: 3300,
      transactions: 30,
      joiningDate: '2022-11-10',
    },
    {
      address: '0x7890abcdef1234567890abcdef1234567890abcd',
      email: 'alice@example.com',
      volume: 1000,
      transactions: 20,
      joiningDate: '2021-05-20',
    },
    {
      address: '0x4567890abcdef1234567890abcdef1234567890',
      email: 'bob@example.com',
      volume: 12300,
      transactions: 50,
      joiningDate: '2020-08-25',
    },
  ];

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {userList.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </Layout>
  );
};

export default Users;
