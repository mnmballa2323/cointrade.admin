'use client';
import React from 'react';
import Layout from '@/components/Layout';
import AgentsCard from './AgentsCard';
import { AgentCardProps } from './types';

const Agents = () => {
  const AgentCardDetails: AgentCardProps[] = [
    {
      Creator: '0x1234567890abcdef1234567890abcdef12345678',
      status: 'Active',
      agentName: 'Ben Trading Agent',
      createAt: '2023-01-15',
      id: '1',
    },
    {
      Creator: '0x1234567890abcdef1234567890abcdef12345678',
      status: 'Inactive',
      agentName: 'Tom AI Trader',
      createAt: '2023-01-15',
        id: '2',
    },
    {
      Creator: '0x1234567890abcdef1234567890abcdef12345678',
      status: 'Active',
     agentName: 'Tom AI Trader',
      createAt: '2023-01-15',
    id: '3',
    },
    {
      Creator: '0x1234567890abcdef1234567890abcdef12345678',
      status: 'Active',
      agentName: 'Gem Coin Agent',
      createAt: '2023-01-15',
        id: '4',
    },
  ];

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {AgentCardDetails.map((user, index) => (
          <AgentsCard key={index} user={user} />
        ))}
      </div>
    </Layout>
  );
};

export default Agents;