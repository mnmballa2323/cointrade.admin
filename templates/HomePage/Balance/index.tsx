import { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useColorMode } from '@chakra-ui/color-mode';
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
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={chartBalanceHome}
            margin={{ top: 0, right: 6, left: 6, bottom: 0 }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9CC5FF" stopOpacity={0.13} />
                <stop offset="95%" stopColor="#B9D6FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              stroke={isDarkMode ? '#272B30' : '#EFEFEF'}
              tick={{
                fontSize: 12,
                fontWeight: '500',
                opacity: 0.75,
                fill: '#6F767E',
              }}
              dy={4}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: isDarkMode ? '#272B30' : '#EFEFEF',
                strokeWidth: 1,
                fill: 'transparent',
              }}
              wrapperStyle={{ outline: 'none' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#0C68E9"
              fillOpacity={1}
              fill="url(#color)"
              activeDot={{
                r: 6,
                stroke: isDarkMode ? '#1A1D1F' : '#FCFCFC',
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Balance;
