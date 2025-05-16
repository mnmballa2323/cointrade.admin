import { useState } from 'react';
import ButtonBack from '@/components/ButtonBack';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

import { selectAsset } from '@/mocks/assets';

type SelectAssetProps = {
  onBack: () => void;
};

const SelectAsset = ({ onBack }: SelectAssetProps) => {
  const [search, setSearch] = useState('');
  const [activeId, setActiveId] = useState('2');

  return (
    <>
      <ButtonBack title="Select asset" onClick={onBack} />
      <div className="relative mb-4">
        <input
          className="text-base-1s h-14 w-full rounded-xl border border-theme-stroke bg-transparent pl-14 pr-4 text-theme-primary outline-none transition-colors placeholder:text-theme-tertiary focus:border-theme-brand md:text-[1rem]"
          type="text"
          placeholder="Search for asset"
          value={search}
          onChange={e => setSearch(e.target.value)}
          required
          data-autofocus
        />
        <div className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center">
          <Icon className="fill-theme-tertiary" name="search" />
        </div>
      </div>
      <div className="space-y-1">
        {selectAsset.map(asset => (
          <div
            className={`flex h-16 cursor-pointer items-center rounded-2xl pl-3 pr-6 transition-colors hover:bg-theme-n-8 ${
              asset.id === activeId ? 'bg-theme-n-8' : ''
            }`}
            key={asset.id}
            onClick={() => setActiveId(asset.id)}
          >
            <div className="mr-3">
              <Image
                className="crypto-logo w-8"
                src={asset.logo}
                width={32}
                height={32}
                alt=""
              />
            </div>
            <div className="grow">
              <div className="text-base-1s">{asset.currency}</div>
              <div className="text-caption-2 font-bold text-theme-secondary opacity-75 dark:opacity-100">
                {asset.currencyShort}
              </div>
            </div>
            {asset.id === activeId && (
              <Icon
                className="ml-6 !h-4 !w-4 shrink-0 fill-theme-primary"
                name="check"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectAsset;
