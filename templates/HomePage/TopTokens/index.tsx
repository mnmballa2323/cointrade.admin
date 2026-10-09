import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import Link from '@/platform/navigation';
import Card from '@/components/Card';
import Image from '@/components/Image';
import Percent from '@/components/Percent';

import { topTokens } from '@/mocks/topTokens';

type TopTokensProps = {};

const TopTokens = ({}: TopTokensProps) => {
  return (
    <Card
      className="flex-1"
      title="Top tokens"
      tooltip="Tooltip top tokens"
      seeAllUrl="/"
    >
      <div className="-mx-3 space-y-1 pt-6 md:-mx-2">
        {topTokens.map(item => (
          <Link
            className="flex h-20 items-center rounded-2xl border border-transparent px-3 transition-colors hover:border-theme-stroke md:px-2"
            key={item.id}
            href="/token"
          >
            <div className="mr-5 md:mr-2">
              <Image
                className="crypto-logo w-10 scale-[1.02]"
                src={item.icon}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="min-w-[6rem]">
              <div className="text-base-1s">{item.currencyFull}</div>
              <div className="text-caption-2 text-theme-secondary opacity-75">
                {item.currencyShort}
              </div>
            </div>
            <div className="mx-auto h-9 w-18 md:w-16">
              <AreaPlot data={item.itemsCharts} dataKey="price" color="#0052ff" height="100%" compact />
            </div>
            <div className="-mb-1.5 min-w-[5.5rem] text-right">
              <div className="text-base-1s">{item.price}</div>
              <Percent className="text-base-2" value={item.percent} />
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default TopTokens;
