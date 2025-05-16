import Link from 'next/link';
import Image from '@/components/Image';
import Icon from '@/components/Icon';

import { variantsChat } from '@/mocks/variantsChat';

type NewChatProps = {};

const NewChat = ({}: NewChatProps) => (
  <div className="my-auto w-full px-12 2xl:px-6">
    <div className="flex justify-center items-center mb-16 2xl:mb-8 md:mb-4">
      <Image
        src="/images/Cointradetxt.png" // Path to your image
        alt="CoinTrade Text"
        width={200} // Adjust width as needed
        height={100} // Adjust height as needed
        className="object-contain"
      />
    </div>
    <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* {variantsChat.map(variant => (
        <Link
          className="card-color group mr-4 flex w-66 shrink-0 flex-col rounded-[1.25rem] p-8 last:mr-0 md:p-4"
          key={variant.id}
          href={variant.url}
        >
          <div className="text-title-1s mb-2">{variant.title}</div>
          <div className="text-body-2s mb-5 2xl:mb-10">{variant.content}</div>
          <div className="card-icon-color relative mt-auto inline-flex h-8 w-8 items-center justify-center rounded-xl">
            <Image
              className="w-6 opacity-100 group-hover:opacity-0"
              src={variant.icon}
              width={24}
              height={24}
              alt=""
            />
            <Icon
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-theme-white-fixed opacity-0 transition-opacity group-hover:opacity-100"
              name="arrow-up-right-thin"
            />
          </div>
        </Link>
      ))} */}
    </div>
  </div>
);

export default NewChat;