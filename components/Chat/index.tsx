import { useState } from 'react';
import Message from '@/components/Message';
import Icon from '@/components/Icon';
import NewChat from './NewChat';

type ChatProps = {
  children?: React.ReactNode;
};

const Chat = ({ children }: ChatProps) => {
  const [message, setMessage] = useState('');

  return (
    <div className="relative flex h-[calc(100svh-8.5rem)] sm:h-[calc(105svh-8.5rem)] xl:overflow-hidden xl:rounded-2xl md:-mb-2 md:h-[calc(100svh-11rem)]">
      <div className="card flex w-full flex-col ">
        <div className="mb-6 flex md:mb-4">
          {/* <button className="relative ml-auto hidden h-6 w-6 shrink-0 self-center text-0 before:absolute before:inset-0.5 before:rounded-md before:border-2 before:border-theme-secondary before:opacity-40 xl:inline-block">
            <Icon
              className="rotate-180 fill-theme-secondary"
              name="arrow-right-fat"
            />
          </button> */}
        </div>
        <div className="-mx-6 flex grow overflow-auto">
          {children ? (
            <div className="space-y-6 px-12 py-4 3xl:px-6 3xl:py-0">
              {children}
            </div>
          ) : (
            <NewChat />
          )}
        </div>
        <Message
          className="mt-6 shrink-0 md:mt-4"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          autoFocus
          logo
        />
      </div>
    </div>
  );
};

export default Chat;
