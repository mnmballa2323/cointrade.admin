import { useColorMode } from '@chakra-ui/color-mode';
import Icon from '@/components/Icon';
import { useEffect } from 'react';

type ToggleThemeProps = {
  visible?: boolean;
};

const ToggleTheme = ({ visible }: ToggleThemeProps) => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const items = [
    {
      icon: 'sun',
      active: colorMode === 'light',
      onClick: () => {
        if (isDarkMode) toggleColorMode(); // Switch to light mode
      },
    },
    {
      icon: 'moon',
      active: colorMode === 'dark',
      onClick: () => {
        if (!isDarkMode) toggleColorMode(); // Switch to dark mode
      },
    },
  ];

  return (
    <div
      className={`rounded-xl bg-theme-n-8 p-1 ${
        visible
          ? `relative flex w-full before:absolute before:bottom-1 before:left-1 before:top-1 before:w-[calc(50%-0.25rem)] before:rounded-lg before:bg-theme-on-surface-1 before:shadow-[0_0.125rem_0.25rem_0_rgba(0,0,0,0.15)] before:transition-[transform] ${
              isDarkMode && 'before:translate-x-full'
            }`
          : ''
      }`}
    >
      {items.map((item, index) => (
        <button
          className={`group relative z-1 flex items-center justify-center ${
            visible
              ? 'h-8 basis-1/2'
              : `flex h-10 w-full rounded-lg bg-theme-on-surface-1 ${
                  item.active ? '!hidden' : ''
                }`
          }`}
          key={index}
          onClick={()=> toggleColorMode()}
        >
          <Icon
            className={`fill-theme-secondary transition-colors group-hover:fill-theme-primary ${
              item.active && visible && '!fill-theme-primary'
            }`}
            name={item.icon}
          />
        </button>
      ))}
    </div>
  );
};

export default ToggleTheme;
