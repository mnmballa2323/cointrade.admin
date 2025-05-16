import Link from 'next/link';
import Image from '@/components/Image';
import Percent from '@/components/Percent';

type ItemType = {
  id: string;
  icon: string;
  currencyFull: string;
  currencyShort: string;
  number: number;
  price: number;
  percent: number;
};

type AssetProps = {
  item: ItemType;
};

const Asset = ({ item }: AssetProps) => (
  <Link
    className="text-base-1s flex cursor-pointer items-center rounded-xl px-4 py-3 transition-colors hover:bg-theme-n-8 md:px-2"
    href="/token"
  >
    <div className="mr-5 shrink-0 md:mr-3">
      <Image
        className="crypto-logo w-9 scale-[1.02]"
        src={item.icon}
        width={36}
        height={36}
        alt=""
      />
    </div>
    <div className="flex grow items-center">
      {item.currencyFull}
      <div className="ml-2 text-theme-tertiary">{item.currencyShort}</div>
      {/* <div className="ml-2 rounded bg-theme-n-8 px-1 text-theme-tertiary">
        #{item.number}
      </div> */}
    </div>
    <div className="w-34 text-right md:w-auto">${item.price}</div>
    <div className="flex w-36 justify-end md:hidden">
      <Percent value={item.percent} />
    </div>
  </Link>
);

export default Asset;
