import Image from '@/components/Image';

const items = [
  {
    title: 'Trade Execution',
    image: '/images/chart-breakout-circle.svg',
    color: '#FBA94B',
  },
  {
    title: 'Real-Time Alerts',
    image: '/images/bell-ringing.svg',
    color: '#0C68E9',
  },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
  <div className="flex space-x-4 md:-mx-4 md:overflow-auto md:scroll-smooth md:scrollbar-none md:before:w-4 md:before:shrink-0 md:after:w-4 md:after:shrink-0">
    {items.map((item, index) => (
      <div
        className="text-title-1s flex flex-1 items-center rounded-xl border-2 border-theme-stroke p-5.5 2xl:p-3 md:w-72 md:flex-none md:shrink-0 md:p-5 md:text-[1.125rem]"
        key={index}
      >
        <div
          className="mr-5 flex h-10 w-10 items-center justify-center rounded-xl 2xl:mr-3"
          style={{ backgroundColor: item.color }}
        >
          <Image
            className="w-6 opacity-100"
            src={item.image}
            width={24}
            height={24}
            alt=""
          />
        </div>
        {item.title}
      </div>
    ))}
  </div>
);

export default Details;
