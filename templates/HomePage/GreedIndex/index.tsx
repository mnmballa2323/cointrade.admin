import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import Card from '@/components/Card';

const data = [
  { name: 'Red', value: 400 },
  { name: 'Yellow', value: 250 },
  { name: 'Pink', value: 350 },
  { name: 'Green', value: 300 },
];

const COLORS = ['#F04D1A', '#FBA94B', '#B981DA', '#32AE60'];

type GreedIndexProps = {};

const GreedIndex = ({}: GreedIndexProps) => {
  return (
    <Card
      className="flex-1"
      title="Greed index"
      tooltip="Tooltip Greed index"
      seeAllUrl="/greed-index"
    >
      <div className="md:-mx-2">
        <div className="relative mx-auto mt-14 h-40 w-80 lg:my-8 md:mb-2 md:mt-6">
          <RatioPlot data={data} colors={COLORS} unit="" showLabels={false} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <div className="text-h1 md:text-h2">82</div>
            <div className="text-title-1m text-theme-secondary">Greed</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GreedIndex;
