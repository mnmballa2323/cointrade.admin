import { useState } from 'react';
import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import { useColorMode } from '@/components/NativeUI';
import Card from '@/components/Card';

import { chartMarketCap } from '@/mocks/charts';

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

type MarketCapProps = {};

const MarketCap = ({}: MarketCapProps) => {
  const [time, setTime] = useState(duration[0]);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Card
      className="flex-1"
      title="Market cap"
      tooltip="Tooltip market cap"
      option={time}
      setOption={setTime}
      options={duration}
    >
      <div className="-mb-5 mt-4 h-[22.6rem] md:-mb-3 md:mt-0">
        <BarPlot data={chartMarketCap} series={[]} />
      </div>
    </Card>
  );
};

export default MarketCap;
