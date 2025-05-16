'use client';

import Layout from '@/components/Layout';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import Table from '@/components/Divider';
import Select from '@/components/Select';
import TsxTable from './Tables/Txs';
import AssetTalbe from './Tables/Assets';
import Dvider from '@/components/Divider';
import TooltipEle from '@/components/TooltipEle';
import { Icon as QuestionMart } from '@chakra-ui/react';

const duration = [
  {
    id: '0',
    title: 'Amount (High to Low)',
  },
  {
    id: '1',
    title: 'Amount (Low to High)',
  },
  {
    id: '2',
    title: 'Recent',
  },
  {
    id: '3',
    title: 'Oldest',
  },
];

const UserDetails = ({ address }: { address: string }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isTradingPaused, setIsTradingPaused] = useState(false);
  const [time, setTime] = useState(duration[0]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
  };

  const trimAddress = (address: string) => {
    if (typeof address === 'string' && address.length > 13) {
      return `${address.slice(0, 6)}...${address.slice(-7)}`;
    }
    return address;
  };

  const handlePauseResumeTrading = () => {
    setIsTradingPaused(!isTradingPaused);
  };

  return (
    <Layout title="User Details">
      <div className="card rounded-lg p-6 shadow-md">
        <h1 className="mb-6 text-2xl text-center font-bold">USER DETAILS</h1>
        <Dvider />
        {/* User Details Section */}
        <div className="space-y-4">
          {/* Address */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The user's wallet address.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Address:</span>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipEle title={address}>{trimAddress(address)}</TooltipEle>
              <button
                className="group relative"
                onClick={() => copyToClipboard(address)}
              >
                <Icon
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                  name="copy"
                />
                {tooltipVisible && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md">
                    Copied!
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The user's email address.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Email:</span>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipEle title="user@example.com">user@example.com</TooltipEle>
              <button
                className="group relative"
                onClick={() => copyToClipboard('user@example.com')}
              >
                <Icon
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                  name="copy"
                />
              </button>
            </div>
          </div>

          {/* Joined */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The date the user joined.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Joined:</span>
            </div>
            <span className="text-gray-500">2023-01-15</span>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The user's current status.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Status:</span>
            </div>
            <span className="text-gray-500">Active</span>
          </div>

          {/* Total Transactions */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total number of transactions performed by the user.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Total Transactions:</span>
            </div>
            <span className="text-gray-500">100</span>
          </div>

          {/* Total Wallet Balance */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The user's total wallet balance.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Total Wallet Balance:</span>
            </div>
            <span className="text-gray-500">$440</span>
          </div>

          {/* Total Volume */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total volume of transactions performed by the user.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Total Volume:</span>
            </div>
            <span className="text-gray-500">$1000</span>
          </div>

          {/* Total Buy Transactions */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total number of buy transactions performed by the user.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Total Buy Transactions:</span>
            </div>
            <span className="text-gray-500">60</span>
          </div>

          {/* Total Sell Transactions */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total number of sell transactions performed by the user.">
                <QuestionMart
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                />
              </TooltipEle>
              <span className="font-semibold">Total Sell Transactions:</span>
            </div>
            <span className="text-gray-500">40</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            className={`rounded-lg px-4 py-2 text-white ${
              isTradingPaused
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-red-500 hover:bg-red-600'
            }`}
            onClick={handlePauseResumeTrading}
          >
            {isTradingPaused ? 'Resume Trading' : 'Pause Trading'}
          </button>
          <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
            Blacklist User
          </button>
        </div>

        {/* Transactions Table */}
        <div className="mt-17">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Transactions</h2>
            <Select
              className="min-w-[8.5rem] shrink-0 lg:hidden"
              value={time}
              onChange={setTime}
              items={duration}
            />
          </div>
          <TsxTable />
        </div>

        {/* Assets Table */}
        <div className="mt-17">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Assets</h2>
            <Select
              className="min-w-[8.5rem] shrink-0 lg:hidden"
              value={time}
              onChange={setTime}
              items={duration}
            />
          </div>
          <AssetTalbe />
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;