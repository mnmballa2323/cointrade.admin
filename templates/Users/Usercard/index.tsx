'use client';
import React, { useState } from 'react';
import { UserCardProps } from '../types';
import Icon from '@/components/Icon';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import TooltipEle from '@/components/TooltipEle';
import { Divider } from '@chakra-ui/react';

const UserCard = ({ user }: { user: UserCardProps }) => {
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
      <div className="text-title-1s mb-3 flex items-center space-x-2 text-lg font-bold">
        <span >
          { trimAddress(user.address)}
        </span>
        <button
          className="group relative"
          onClick={() => copyToClipboard(user.address)}
        >
          <Icon 
          className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
          name="copy"
          />
          {/* Tooltip */}
          {tooltipVisible && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md">
              Copied!
            </div>
          )}
        </button>
      </div>

        <Divider className='mb-4'/>
      <div className="text-body-2s mb-4 flex justify-between w-full">
        <span className="font-semibold">Email:</span>{' '}
        <span className="text-gray-600">{user.email}</span>
      </div>
      <div className="text-body-2s mb-4 flex justify-between w-full">
        <span className="font-semibold">Joining Date:</span> 
        <span className="text-gray-600">{user.joiningDate}</span>
      </div>

      <div className="text-body-2s mb-4 flex justify-between w-full">
        <span className="font-semibold">Total Transactions:</span>{' '}
        <span className="text-gray-600">{user.transactions}</span>
      </div>

      <div className="text-body-2s mb-4 flex justify-between w-full">
        <span className="font-semibold">Trade Volume:</span>{' '}
        <span className="text-gray-600">${user.volume}</span>
      </div>

      

   
      <Link href={`/user/${user.address}`} className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
        <button className="mt-auto inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          More Details
        </button>
      </Link>


    </div>
  );
};

export default UserCard;
