import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import Image from '@/components/Image';
import Percent from '@/components/Percent';
import { prices } from '@/mocks/trade';
import { useRouter } from 'next/navigation';
import { Divider } from '@chakra-ui/react';

type PricesProps = {};

const Prices = ({}: PricesProps) => {
  return (
    <div>

      <div className="text-title-1s text-center mb-6 md:mb-4 md:text-[1.125rem]">
        COINS
      </div>
      <Divider/>
      <div className="-mx-3 space-y-2 md:-mx-2 max-h-[550px] overflow-y-auto pr-2">
        {prices.map(item => (
          <div
            className="flex h-20 cursor-pointer items-center justify-between rounded-2xl border border-transparent px-3 transition-all hover:border-theme-stroke hover:shadow-[0_0_0.875rem_-0.25rem_rgba(0,0,0,0.05),0_2rem_3rem_-0.5rem_rgba(0,0,0,0.05)] md:h-18 md:px-2"
            key={item.id}
          >
            <div className="flex w-44 items-center md:w-auto md:grow">
              <div className="mr-4">
                <Image
                  className="crypto-logo w-10 scale-[0.96]"
                  src={item.icon}
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="grow">
                <div className="text-base-1s">{item.currencyFull}</div>
                <div className="text-caption-2 text-theme-secondary opacity-75 dark:opacity-100">
                  {item.currencyShort}
                </div>
              </div>
            </div>
            <div className="mx-4 h-9 w-20 shrink-0 2xl:hidden lg:block md:hidden">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={300}
                  height={100}
                  data={item.itemsCharts}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Line
                    type="linear"
                    dataKey="price"
                    dot={false}
                    stroke={item.percent > 0 ? '#32AE60' : '#F04D1A'}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-base-1s w-24 shrink-0 md:hidden">
              {item.price}
            </div>
            <div className="w-24 shrink-0 md:hidden">
              <Percent className="text-base-2" value={item.percent} />
            </div>
            <div className="shrink-0">
              <Link className="btn-gray h-10" href={`/token/${item.currencyShort}`}>
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
