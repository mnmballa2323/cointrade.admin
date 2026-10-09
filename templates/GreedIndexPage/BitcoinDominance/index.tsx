import { useState } from 'react';
import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import { useColorMode } from '@/components/NativeUI';
import Card from '@/components/Card';

import { chartBitcoinDominance } from '@/mocks/charts';

const duration = [
  {
    id: '0',
    title: '7d',
  },
  {
    id: '1',
    title: '14d',
  },
  {
    id: '2',
    title: '21d',
  },
];

const legend = [
  {
    title: 'BTC',
    color: '#B981DA',
  },
  {
    title: 'ETH',
    color: '#0C68E9',
  },
  {
    title: 'USDT',
    color: '#32AE60',
  },
];

type BitcoinDominanceProps = {};

const BitcoinDominance = ({}: BitcoinDominanceProps) => {
  const [time, setTime] = useState(duration[0]);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Card
      className="flex-1"
      title="Bitcoin dominance"
      tooltip="Tooltip bitcoin dominance"
      option={time}
      setOption={setTime}
      options={duration}
    >
      <div className="mt-2 flex items-center space-x-4">
        {legend.map((item, index) => (
          <div
            className="text-caption-2m flex items-center text-theme-secondary"
            key={index}
          >
            <div
              className="mr-2 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            {item.title}
          </div>
        ))}
      </div>
      <div className="-mb-5 mt-4 h-[26.6rem] md:-mb-3">
        <BarPlot data={chartBitcoinDominance} series={[{ key: 'btc', color: '#B981DA' }, { key: 'eth', color: '#0C68E9' }, { key: 'usdt', color: '#32AE60' }]} />
      </div>
    </Card>
  );
};

export default BitcoinDominance;
