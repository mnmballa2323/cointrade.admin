'use client';
import React from 'react';
import Dvider from '@/components/Divider';
import Layout from '@/components/Layout';
import TooltipEle from '@/components/TooltipEle';
import Icon from '@/components/Icon';
import { Divider, Icon as QuestionMart } from '@chakra-ui/react';
import { useState } from 'react';

const TransactionsDetails = ({ id }: { id: string }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
  };

  // Trims address only on mobile screens
  const trimAddress = (address: string) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768 && address.length > 13) {
      return `${address.slice(0, 6)}...${address.slice(-7)}`;
    }
    return address;
  };
  const goBack=()=>{
    window.history.back();
  }

  const creatorAddress = '0x85D70633b90e03e0276B98880286D0D055685ed7';
  return (
    <Layout title="Transactions">
      <div className="card flex-row">
        <div className='mb-5'>
          {/* back button */}
          <div className="flex items-center space-x-2 mb-2">
            <button className="flex items-center space-x-2 text-gray-500" onClick={goBack}>
              <Icon name="arrow-left" className="h-4 w-4 fill-theme-secondary" />
              <span className="text-sm font-semibold">Back</span>
            </button>
            </div>
          <Divider/>
        </div>
        <div className="space-y-4 mb-5">
          {/* Tx ID */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="This is the unique Agent ID.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Agent ID:</span>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipEle title={"Agent ID"}>{id}</TooltipEle>
              {/* <button
                className="group relative"
                onClick={() => copyToClipboard(txid)}
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
              </button> */}
            </div>
          </div>

            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="Name of the Agent.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Agent name:</span>
            </div>
            <span className="text-gray-500">Trading Bot</span>
          </div>

          {/* Wallet */}
         <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="This is the wallet address involved in the transaction.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Creator Address:</span>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipEle title="Agent creator address">
                {trimAddress(creatorAddress)}
              </TooltipEle>
              <button
                className="group relative"
                onClick={() => copyToClipboard(creatorAddress)}
              >
                <Icon
                  className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
                  name="copy"
                />
              </button>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The date and time when the agaent were created.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Created at:</span>
            </div>
            <span className="text-gray-500">2023-01-15</span>
          </div>

          {/* Type */}
       

          {/* Asset Sold */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="Number of transactions made by the agent.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Agents Tx:</span>
            </div>
            <span className="text-gray-500">13</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <TooltipEle title="The current status of agent.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span className="font-semibold">Status:</span>
            </div>
            <span className="text-green-400">Active</span>
            </div>

          {/* Total Amount Sold */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total amount sold by the agent.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Total Amount Sold:</span>
            </div>
            <span className="text-gray-500">1 ETH ($1440)</span>
          </div>

          {/* Total Volume */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total amount bought by the agent">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Total Amount Bought </span>
            </div>
            <span className="text-gray-500">3 ETH ($4240)</span>
          </div>

          {/* Platform */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The platform agents created for">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Platform:</span>
            </div>
            <span className="text-gray-500">Kucoin</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="Buy and sell amount of the agent.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Total Volume:</span>
            </div>
            <span className="text-gray-500">$40000</span>
          </div>
        </div>

    <Dvider />
        <div className="flex flex-col items-center justify-center">
          <button className="mt-auto inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            Stop Agent
          </button>
          </div>
     
      </div>
    </Layout>
  );
};

export default TransactionsDetails;
