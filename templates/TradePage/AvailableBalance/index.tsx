import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import CurrencyFormat from '@/components/CurrencyFormat';
import Percent from '@/components/Percent';

const data = [
  { name: 'ETH', color: '#FD8965', value: 100 },
  { name: 'XRP', color: '#FFB560', value: 300 },
  { name: 'SOL', color: '#E5C7F7', value: 250 },
  { name: 'BTC', color: '#FAD5F4', value: 200 },
  { name: 'GOM', color: '#C7DEFF', value: 400 },
];

const COLORS = ['#FD8965', '#FFB560', '#E5C7F7', '#FAD5F4', '#C7DEFF'];

type AvailableBalanceProps = {};

const AvailableBalance = ({}: AvailableBalanceProps) => (
  <div className="card-sidebar">
    <div className="text-title-1s mb-6 md:mb-4 md:text-[1.125rem]">
      Available balance
    </div>
    <CurrencyFormat className="text-h3" currency="$" value={3200.8} />
    <Percent className="text-base-2 mb-6" value={12.32} />
    <div className="relative mx-auto h-[15.75rem] w-[15.75rem]">
      <RatioPlot data={data} colors={COLORS} unit="" showLabels={false} />
      <div className="text-base-1s absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        0.5 BTC
      </div>
    </div>
    <div className="mt-6 flex flex-wrap justify-center gap-3 2xl:-mx-2 2xl:gap-2">
      {data.map((item, index) => (
        <div
          className="text-caption-2m flex items-center text-theme-secondary"
          key={index}
        >
          <div
            className="mr-2 h-3 w-3 shrink-0 rounded 2xl:mr-1.5"
            style={{ backgroundColor: item.color }}
          ></div>
          {item.name}
        </div>
      ))}
    </div>
    <button className="btn-gray mt-6 w-full">View all assets</button>
  </div>
);

export default AvailableBalance;
