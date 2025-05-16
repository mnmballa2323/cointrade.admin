import { useState } from 'react';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

import { history } from '@/mocks/chat';

type HistoryProps = {
  visible: boolean;
  onClose: () => void;
};

const History = ({ visible, onClose }: HistoryProps) => {
  const [search, setSearch] = useState('');
  const [activeId, setActiveId] = useState('0');

  return (
    <div
      className={`relative ml-2 w-[21.25rem] shrink-0 rounded-2xl bg-theme-on-surface-1 pb-24 pt-16 2xl:w-80 xl:absolute xl:bottom-0 xl:right-0 xl:top-0 xl:w-[21rem] xl:rounded-none xl:border-l xl:border-theme-stroke xl:transition-all md:w-full md:border-l-0 ${
        visible ? 'xl:translate-x-0 xl:shadow-depth-1' : 'xl:translate-x-full'
      }`}
    >
      <div className="absolute left-0 right-0 top-0 shadow-[inset_0_-0.0625rem_0_0_#EFEFEF] dark:shadow-[inset_0_-0.0625rem_0_0_#272b30] xl:flex xl:pr-3">
        <div className="relative xl:grow">
          <input
            className="text-base-1s h-16 w-full bg-transparent pl-14 pr-4 text-theme-primary outline-none placeholder:text-theme-tertiary md:text-[1rem]"
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
        <button
          className="relative hidden h-6 w-6 shrink-0 self-center text-0 before:absolute before:inset-0.5 before:rounded-md before:border-2 before:border-theme-secondary before:opacity-40 xl:inline-block"
          onClick={onClose}
        >
          <Icon className="fill-theme-secondary" name="arrow-right-fat" />
        </button>
      </div>
      <div className="max-h-full overflow-auto scroll-smooth px-3 pt-3 scrollbar-none">
        <div className="space-y-2 md:space-y-0">
          {history.map(item => (
            <div
              className={`flex cursor-pointer items-center rounded-xl border border-transparent p-3 transition-all tap-highlight-color hover:bg-theme-n-8 ${
                activeId === item.id
                  ? '!border-theme-stroke !bg-transparent shadow-[0_0_0.875rem_-0.25rem_rgba(0,0,0,0.05),0_2rem_3rem_-0.5rem_rgba(0,0,0,0.05)]'
                  : ''
              }`}
              key={item.id}
              onClick={() => setActiveId(item.id)}
            >
              <div className="grow">
                <div className="text-base-2 line-clamp-1">{item.title}</div>
                <div className="mt-1 line-clamp-2 text-[0.75rem] font-medium leading-[1rem] text-theme-secondary">
                  {item.content}
                </div>
              </div>
              {item.image && (
                <div className="ml-3 shrink-0">
                  <Image
                    className="h-16 w-16 rounded-xl object-cover"
                    src={item.image}
                    width={64}
                    height={64}
                    alt=""
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <button className="btn-secondary w-full">New chat</button>
      </div>
    </div>
  );
};

export default History;
