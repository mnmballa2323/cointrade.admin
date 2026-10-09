import { useState } from 'react';
import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import { useColorMode } from '@/components/NativeUI';
import Card from '@/components/Card';
import CurrencyFormat from '@/components/CurrencyFormat';
import Percent from '@/components/Percent';

import { chartBalanceHome } from '@/mocks/charts';

const duration = [
  {
    id: '0',
    title: 'All time',
  },
  {
    id: '1',
    title: 'Month',
  },
  {
    id: '2',
    title: 'Year',
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-theme-stroke bg-theme-on-surface-1 p-5 shadow-depth-1 md:p-3">
        <div className="text-caption-2m mb-0.5 text-theme-secondary opacity-75 dark:opacity-100">
          {label}
        </div>
        <CurrencyFormat
          className="text-h5 md:text-title-1s"
          currency="$"
          value={payload[0].value}
        />
      </div>
    );
  }

  return null;
};

type BalanceProps = {};

const Balance = ({}: BalanceProps) => {
  const [time, setTime] = useState(duration[0]);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Card
      title="Balance"
      arrowTitle
      option={time}
      setOption={setTime}
      options={duration}
    >
      <div className="flex items-end md:mt-4">
        <CurrencyFormat
          className="text-h1 md:text-h3"
          value={3200.8}
          currency="$"
        />
        <Percent className="text-title-1s ml-1" value={85.66} />
      </div>
      <div className="-mb-2 h-[14rem]">
        <AreaPlot data={chartBalanceHome} dataKey="price" color="#0C68E9" height="100%" />
      </div>
    </Card>
  );
};

export default Balance;
