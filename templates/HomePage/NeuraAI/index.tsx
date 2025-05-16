import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Image from '@/components/Image';
import Icon from '@/components/Icon';
import Message from '@/components/Message';

import { variantsChat } from '@/mocks/variantsChat';

const modes = [
  {
    id: '0',
    title: 'Expert mode',
  },
  {
    id: '1',
    title: 'Expert mode 1',
  },
  {
    id: '2',
    title: 'Expert mode 2',
  },
];

type NeuraAIProps = {};

const NeuraAI = ({}: NeuraAIProps) => {
  const [mode, setMode] = useState(modes[0]);
  const [message, setMessage] = useState('');

  return (
    <Card
      className="mx-1 w-[calc(50%-0.5rem)] lg:mx-0 lg:w-full"
      title="Neura AI"
      tooltip="Tooltip Neura AI"
      option={mode}
      setOption={setMode}
      options={modes}
    >
      <div className="-mx-6 mt-8 flex overflow-auto scroll-smooth scrollbar-none before:w-6 before:shrink-0 after:w-6 after:shrink-0 md:-mx-4 md:mt-6 md:before:w-4 md:after:w-4">
        {variantsChat.map(variant => (
          <Link
            className="card-color group mr-4 flex w-80 shrink-0 flex-col rounded-[1.25rem] p-8 last:mr-0 md:w-66 md:p-6"
            key={variant.id}
            href={variant.url}
          >
            <div className="text-title-1s mb-2">{variant.title}</div>
            <div className="text-body-2s mb-12 md:mb-8">{variant.content}</div>
            <div className="card-icon-color relative mt-auto inline-flex h-10 w-10 items-center justify-center rounded-xl">
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
        ))}
      </div>
      <Message
        className="mt-6"
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
      />
    </Card>
  );
};

export default NeuraAI;
