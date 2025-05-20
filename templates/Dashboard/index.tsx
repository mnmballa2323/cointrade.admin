'use client';
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

const Dashboard = () => {
  // Example data for the Total Volume chart
  const volumeData = [
    { name: 'Jan', volume: 120000 },
    { name: 'Feb', volume: 150000 },
    { name: 'Mar', volume: 180000 },
    { name: 'Apr', volume: 200000 },
    { name: 'May', volume: 170000 },
    { name: 'Jun', volume: 190000 },
  ];

  // Example data for the User Growth chart
  const userGrowthData = [
    { month: 'Jan', users: 500 },
    { month: 'Feb', users: 700 },
    { month: 'Mar', users: 600 },
    { month: 'Apr', users: 800 },
    { month: 'May', users: 1000 },
    { month: 'Jun', users: 1800 },
    { month: 'Jul', users: 1400 },
  ];

  return (
    <Layout title="Dashboard">
      <div className="mt-3 grid grid-cols-3 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {/* Total Users */}
        <Link
          href="/users"
          className="card flex flex-col items-center justify-center rounded-lg bg-theme-on-surface p-6 shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-theme-primary">
            Total Users
          </h3>
          <p className="text-2xl font-bold text-blue-500">12,345</p>
        </Link>

        {/* Total Agents */}
        <Link
          href="/agents"
          className="card flex flex-col items-center justify-center rounded-lg bg-theme-on-surface p-6 shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-theme-primary">
            Total Agents
          </h3>
          <p className="text-2xl font-bold text-green-500">567</p>
        </Link>

        {/* Total Transactions */}
        <Link
          href="/transactions"
          className="card flex flex-col items-center justify-center rounded-lg bg-theme-on-surface p-6 shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-theme-primary">
            Total Transactions
          </h3>
          <p className="text-2xl font-bold text-red-500">89,123</p>
        </Link>

        {/* Total Coins Listed */}
        <Link
          href="/trade"
          className="card flex flex-col items-center justify-center rounded-lg bg-theme-on-surface p-6 shadow-md hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-theme-primary">
            Total Coins Listed
          </h3>
          <p className="text-2xl font-bold text-purple-500">45</p>
        </Link>

        {/* Total Volume */}
        <div className="card flex flex-col items-center justify-center rounded-lg bg-theme-on-surface p-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold text-theme-primary">
            Total Volume
          </h3>
          <p className="text-2xl font-bold text-teal-500">$344355</p>
        </div>

        {/* Total Buy/Sell Transactions */}
        <div className="card flex flex-col items-center justify-center rounded-lg bg-theme-on-surface p-6 shadow-md">
          <h3 className="text-lg font-semibold text-theme-primary">
            Total Buy/Sell Transactions
          </h3>
          <p className="text-2xl font-bold text-teal-500">567/11</p>
        </div>
      </div>

      {/* Total Volume Chart */}
      <div className="card mt-5 w-full">
        <div className="h-64 w-full p-4 pb-5">
          <h3 className="mb-4 text-lg font-semibold text-theme-primary">
            Total Volume Chart
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={volumeData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="volume" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User Growth Chart */}
      <div className="card mt-5 w-full">
        <div className="h-64 w-full p-4 pb-5">
          <h3 className="mb-4 text-lg font-semibold text-theme-primary">
            User Growth
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;