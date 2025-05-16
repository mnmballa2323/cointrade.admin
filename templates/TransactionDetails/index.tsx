'use client';
import React from 'react';
import Dvider from '@/components/Divider';
import Layout from '@/components/Layout';
import TooltipEle from '@/components/TooltipEle';
import Icon from '@/components/Icon';
import { Icon as QuestionMart } from '@chakra-ui/react';
import { useState } from 'react';

const TransactionsDetails = ({ txid }: { txid: string }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

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

  return (
    <Layout title="Transactions">
      <div className="card">
        <h1 className="mb-6 text-center text-2xl font-bold">
          TRANSACTION DETAILS
        </h1>
        <Dvider />
        <div className="space-y-4">
          {/* Tx ID */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="This is the unique transaction ID.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Tx ID:</span>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipEle title={txid}>{trimAddress(txid)}</TooltipEle>
              <button
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
              </button>
            </div>
          </div>

          {/* Wallet */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="This is the wallet address involved in the transaction.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Wallet:</span>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipEle title="user@example.com">
                0x85D7...55685ed7
              </TooltipEle>
              <button
                className="group relative"
                onClick={() => copyToClipboard('0x85D7...55685ed7')}
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
              <TooltipEle title="The date and time when the transaction occurred.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Timestamp:</span>
            </div>
            <span className="text-gray-500">2023-01-15</span>
          </div>

          {/* Type */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The type of transaction (e.g., Buy or Sell).">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Type:</span>
            </div>
            <span className="text-gray-500">Sell</span>
          </div>

          {/* Asset Sold */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The asset that was sold in this transaction.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Asset Sold:</span>
            </div>
            <span className="text-gray-500">ETH</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <TooltipEle title="The current status of this transaction.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span className="font-semibold">Status:</span>
            </div>
            <span className="text-gray-500">Completed</span>
            </div>

          {/* Total Amount Sold */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total amount of the asset sold.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Total Amount Sold:</span>
            </div>
            <span className="text-gray-500">1 ETH ($1440)</span>
          </div>

          {/* Total Volume */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total volume of the transaction in USD.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Total Volume:</span>
            </div>
            <span className="text-gray-500">$1000</span>
          </div>

          {/* Platform */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The platform where the transaction occurred.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Platform:</span>
            </div>
            <span className="text-gray-500">Kucoin</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The trading pair used in this transaction.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Trading Pair:</span>
            </div>
            <span className="text-gray-500">ETH/USDT</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The price of the asset at the time of the transaction.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Price at Execution:</span>
            </div>
            <span className="text-gray-500">$1440/ETH</span>
          </div>

          {/* Total Sell Transactions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total number of sell transactions by the user.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Total Sell Transactions:</span>
            </div>
            <span className="text-gray-500">40</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransactionsDetails;
