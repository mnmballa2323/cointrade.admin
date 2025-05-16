import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useColorMode } from '@chakra-ui/color-mode';
import Card from '@/components/Card';
import CurrencyFormat from '@/components/CurrencyFormat';
import Percent from '@/components/Percent';

import { chartTotalBalance } from '@/mocks/charts';

const duration = [
  {
    id: '0',
    title: 'Last 7 days',
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
        <div className="text-caption-2m mb-0.5 flex text-theme-secondary opacity-75 dark:opacity-100">
          28 Feb 2024
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

type TotalBalanceProps = {};

const TotalBalance = ({}: TotalBalanceProps) => {
  const [time, setTime] = useState(duration[0]);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Card
      className="grow"
      title="Total balance"
      option={time}
      setOption={setTime}
      options={duration}
    >
      <div className="mt-0.5 flex items-end md:mt-2">
        <CurrencyFormat
          className="text-h1 md:text-h3"
          value={3200.8}
          currency="$"
        />
        <Percent className="text-title-1s ml-1" value={85.66} />
      </div>
      <div className="-mb-6 mt-12 h-[17.5rem] md:-mb-2 md:mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={chartTotalBalance}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barSize={64}
          >
            <CartesianGrid
              horizontal={false}
              stroke={isDarkMode ? '#272B30' : '#EFEFEF'}
            />
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
                fill: isDarkMode ? '#222628' : '#F6F6F6',
              }}
              wrapperStyle={{ outline: 'none' }}
            />
            <Bar dataKey="price" fill="#B5E4CA" radius={2}>
              {chartTotalBalance.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index > 2 ? '#B5E4CA' : '#0C68E9'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TotalBalance;
