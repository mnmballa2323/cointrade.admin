import { useState } from 'react';
import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import { useColorMode } from '@/components/NativeUI';
import Card from '@/components/Card';
import CurrencyFormat from '@/components/CurrencyFormat';

import { chartVolumes } from '@/mocks/charts';

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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-theme-stroke bg-theme-on-surface-1 p-5 shadow-depth-1">
        <div className="text-caption-2m mb-0.5 text-theme-secondary opacity-75 dark:opacity-100">
          04/07/2024 07:45:00 PM
        </div>
        <CurrencyFormat
          className="text-h5"
          currency="$"
          value={payload[0].value}
        />
      </div>
    );
  }

  return null;
};

type VolumesProps = {};

const Volumes = ({}: VolumesProps) => {
  const [time, setTime] = useState(duration[0]);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Card
      className="flex-1"
      title="Volumes"
      tooltip="Tooltip volumes"
      option={time}
      setOption={setTime}
      options={duration}
    >
      <div className="-mb-5 mt-4 h-[22.6rem] md:-mb-3">
        <AreaPlot data={chartVolumes} dataKey="price" color="#32AE60" height="100%" />
      </div>
    </Card>
  );
};

export default Volumes;
