import React , { useState } from 'react';
import Icon from '@/components/Icon';
import Asset from './Asset';
import Transaction from './Transaction';

import { trendingAssets, recentTransactions } from '@/mocks/search';
import Dvider from '@/components/Divider';

type SearchProps = {};

const Search = ({}: SearchProps) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="relative">
        <input
          className="text-title-1m h-21 w-full bg-transparent pl-22 pr-8 text-theme-primary outline-none placeholder:text-theme-tertiary md:h-16 md:pl-16 md:text-[1rem]"
          type="text"
          placeholder="Search for an asset, users, or transactions"
          value={search}
          onChange={e => setSearch(e.target.value)}
          required
          data-autofocus
        />
        <div className="absolute left-8 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center md:left-5">
          <Icon className="fill-theme-tertiary" name="search" />
        </div>
      </div>
      <div className="border-t border-theme-stroke pb-6 pt-3">
        <div className="mb-3">
          <div className="text-caption-1 px-8 py-3 text-theme-secondary md:px-4">
            Assets
          </div>
          <div className="px-4 md:px-2">
            {trendingAssets.map(asset => (
              <Asset item={asset} key={asset.id} />
            ))}
          </div>
        </div>
        <Dvider/>
        <div className="">
          <div className="text-caption-1 px-8 text-theme-secondary md:px-4">
            Recent transactions
          </div>
          <div className="px-4 md:px-2">
            {recentTransactions.map(transaction => (
              <Transaction item={transaction} key={transaction.id} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex items-center space-x-6 bg-theme-n-8 px-8 py-4 md:p-4">
        <div className="text-caption-1 mr-auto text-theme-secondary">
          Showing 10 of 1000 results
        </div>
        <div className="flex items-center md:hidden">
          <div className="text-caption-1 mr-3 text-theme-secondary">
            Navigate
          </div>
          <div className="flex space-x-1">
            <div className="flex h-7 w-8 items-center justify-center rounded-lg border border-theme-stroke bg-theme-surface-pure text-0">
              <Icon
                className="!h-4 !w-4 fill-theme-primary"
                name="arrow-bottom"
              />
            </div>
            <div className="flex h-7 w-8 items-center justify-center rounded-lg border border-theme-stroke bg-theme-surface-pure text-0">
              <Icon className="!h-4 !w-4 fill-theme-primary" name="arrow-top" />
            </div>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <div className="text-caption-1 mr-3 text-theme-secondary">Select</div>
          <div className="flex h-7 w-10 items-center justify-center rounded-lg border border-theme-stroke bg-theme-surface-pure text-0">
            <Icon className="fill-theme-primary" name="arrow-select" />
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <div className="text-caption-1 mr-3 text-theme-secondary">Close</div>
          <button className="group text-caption-2 h-7 w-10 rounded-lg border border-theme-stroke bg-theme-surface-pure pt-0.5">
            ESC
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Search;
