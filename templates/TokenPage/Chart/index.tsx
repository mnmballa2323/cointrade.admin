import React, { useState } from 'react';
import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import { useColorMode } from '@/components/NativeUI';
import CurrencyFormat from '@/components/CurrencyFormat';
import Image from '@/components/Image';
import Percent from '@/components/Percent';

import { chartToken } from '@/mocks/charts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-theme-stroke bg-theme-on-surface-1 p-5 shadow-depth-1 md:p-3">
        <div className="text-caption-2m mb-0.5 flex text-theme-secondary opacity-75 dark:opacity-100">
          <div className="mr-4.5">4/4/2024</div>
          <div className="">10:00 PM</div>
        </div>
        <CurrencyFormat
          className="text-h5 md:text-title-1s"
          value={payload[0].value}
          currency="$"
        />
      </div>
    );
  }

  return null;
};

type ChartProps = {
  token: string;
};

const Chart = ({token}: ChartProps) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const [range, setRange] = useState('');

  return (
    <div className="mb-6">
      <div className="mb-6 flex items-start">
        <div className="mr-auto">
          <div className="mb-3 flex items-center">
            <div className="mr-3">
              <Image
                className="crypto-logo w-6"
                src="/images/eth.png"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="text-title-1s">
              Ethereum
              <span className="ml-2 text-theme-tertiary">ETH</span>
            </div>
          </div>
          <CurrencyFormat
            className="text-h2 mb-2 md:text-h3"
            value={3273.7}
            currency="$"
          />
          <Percent className="text-base-2" value={12.32} />
        </div>
      </div>
      <div className="h-[18.5rem] md:h-60">
        <AreaPlot data={chartToken} dataKey="price" color="#0C68E9" height="100%" compact />
      </div>
    </div>
  );
};

export default Chart;
