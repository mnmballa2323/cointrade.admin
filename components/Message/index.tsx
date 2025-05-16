import { ChangeEventHandler } from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

type MessageProps = {
  className?: string;
  value: any;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  logo?: boolean;
  autoFocus?: boolean;
};

const Message = ({
  className,
  value,
  onChange,
  placeholder,
  logo,
  autoFocus,
}: MessageProps) => {
  const { colorMode, setColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <div
      className={`flex min-h-[3rem] items-center rounded-3xl bg-theme-n-8 p-1 pl-4 transition-all hover:bg-theme-on-surface-1 hover:shadow-[inset_0_0_0_0.0625rem_#EFEFEF] dark:hover:shadow-[inset_0_0_0_0.0625rem_#272B30] md:pl-3 ${
        value !== ''
          ? '!bg-theme-on-surface-1 !shadow-[inset_0_0_0_0.0625rem_#0C68E9]'
          : ''
      } ${className || ''}`}
    >
      {/* {logo && (
        <div className="mr-4 shrink-0 md:mr-3">
          <Image
            className="w-6 opacity-100"
            src={
              isDarkMode
                ? '/images/message-logo-light.svg'
                : '/images/message-logo-dark.svg'
            }
            width={24}
            height={24}
            alt=""
          />
        </div>
      )} */}
      <TextareaAutosize
        className="text-body-1m w-full resize-none bg-transparent py-2 text-theme-primary outline-none placeholder:text-theme-tertiary md:text-[1rem]"
        maxRows={5}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'Chat cointrade'}
      />
      <button className="ml-6 h-10 w-10 shrink-0 rounded-full bg-theme-brand transition-colors hover:bg-primary-1/90 md:ml-3">
        <Icon className="fill-theme-white-fixed" name="arrow-right" />
      </button>
    </div>
  );
};

export default Message;
