import { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import Icon from '@/components/Icon';
import CurrencyFormat from '@/components/CurrencyFormat';
import Image from '@/components/Image';
import Percent from '@/components/Percent';
import Modal from '@/components/Modal';
import SetAlert from '@/components/SetAlert';

import { chartBestToBuy } from '@/mocks/charts';

type BestPriceProps = {};

const BestPrice = ({}: BestPriceProps) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <div className="mt-8 max-w-[33rem] rounded-2xl bg-theme-on-surface p-6 md:mt-6 md:p-4">
        <div className="mb-4 flex items-center">
          <div className="text-title-1s">Best price to sell</div>
          <button className="group ml-auto h-9 w-9 rounded-xl border-2 border-theme-stroke text-0 transition-colors hover:bg-theme-stroke">
            <Icon
              className="!h-5 !w-5 fill-theme-secondary transition-colors group-hover:fill-theme-primary"
              name="refresh"
            />
          </button>
        </div>
        <div className="">
          <CurrencyFormat
            className="text-h3 mb-3"
            value={3326.18}
            currency="$"
          />
          <div className="flex flex-wrap items-center">
            <div className="mr-2 flex items-center">
              <div className="mr-2">
                <Image
                  className="w-6"
                  src="/images/crypto-icon-gray-2.png"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div className="text-base-1s">
                Ethereum <span className="text-theme-tertiary">ETH</span>
              </div>
            </div>
            <Percent className="text-base-2" value={12.32} />
          </div>
          <div className="-mx-6 my-2 h-32 md:-mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={730}
                height={250}
                data={chartBestToBuy}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#32AE60" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#32AE60" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="linear"
                  dataKey="price"
                  stroke="#32AE60"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#color)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="text-caption-1 mb-4 flex items-center font-medium text-theme-secondary">
            <div className="mr-3">
              <Image
                className="w-6"
                src="/images/logo-1.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>
            Method: LSTM, Accuracy: 87%
          </div>
          <div className="flex space-x-2 md:block md:space-x-0 md:space-y-2">
            <button className="btn-secondary flex-1 md:w-full">Sell ETH</button>
            <button
              className="btn-gray flex-1 md:w-full"
              onClick={() => setVisibleModal(true)}
            >
              Set Alert
            </button>
          </div>
        </div>
      </div>
      <Modal
        classWrap="max-w-[28.5rem] rounded-3xl"
        showButtonClose
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      >
        <SetAlert />
      </Modal>
    </>
  );
};

export default BestPrice;
