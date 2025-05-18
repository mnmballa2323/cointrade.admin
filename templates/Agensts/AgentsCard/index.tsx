'use client';
import React, { useState } from 'react';
import { AgentCardProps } from '../types';
import Icon from '@/components/Icon';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import TooltipEle from '@/components/TooltipEle';
import { Divider } from '@chakra-ui/react';

const AgentsCard = ({ user }: { user: AgentCardProps }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
  };

  const trimAddress = (address: string) =>
    `${address.slice(0, 7)}...${address.slice(-8)}`;

  return (
    <div className="card flex flex-col rounded-[1.25rem] p-8 shadow-md">
      <div className="text-title-1s mb-3 space-x-2 text-lg font-bold">
        <span className="">{user.agentName}</span>
      </div>

      <Divider className="mb-4" />
      <div className="text-body-2s mb-4 flex w-full justify-between">
        <span className="font-semibold">Creator:</span>{' '}
        <span className="flex gap-1 text-gray-600">
          <span className="text-gray-600">{trimAddress(user.Creator)}</span>
          <button
            className="group relative"
            onClick={() => copyToClipboard(user.Creator)}
          >
            <Icon
              className="h-3 w-3 fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
              name="copy"
            />
            {tooltipVisible && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md">
                Copied!
              </div>
            )}
          </button>
        </span>
      </div>
      <div className="text-body-2s mb-4 flex w-full justify-between">
        <span className="font-semibold">Created at:</span>
        <span className="text-gray-600">{user.createAt}</span>
      </div>

      <div className="text-body-2s mb-4 flex w-full justify-between">
        <span className="font-semibold">Status</span>{' '}
        <span
          className={` ${user.status === 'Active' ? 'text-green-500' : 'text-red-600'}`}
        >
          {user.status}
        </span>
      </div>

      <Link
        href={`/agent/${user.id}`}
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        <button className="mt-auto inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default AgentsCard;
