type TabType = {
  title: string;
  value: string;
  onClick?: () => void;
};

type TabsSameProps = {
  className?: string;
  items: TabType[];
  value: number | string;
  setValue: any;
};

const TabsSame = ({ className, items, value, setValue }: TabsSameProps) => {
  const handleClick = (value: string, onClick: any) => {
    setValue(value);
    onClick && onClick();
  };

  return (
    <div className={`rounded-xl bg-theme-n-8 p-1 ${className || ''}`}>
      <div
        className={`relative flex before:absolute before:left-0 before:top-0 before:h-8 before:rounded-lg before:bg-theme-on-surface-1 before:shadow-[0_0.125rem_0.25rem_0_rgba(0,0,0,0.15)] before:transition-all before:duration-300 ${
          items.length === 3
            ? `before:w-1/3 ${
                items[1].value === value
                  ? 'before:left-1/3'
                  : items[2].value === value
                    ? 'before:left-2/3'
                    : ''
              }`
            : items.length === 4
              ? `before:w-1/4 ${
                  items[1].value === value
                    ? 'before:left-1/4'
                    : items[2].value === value
                      ? 'before:left-2/4'
                      : items[3].value === value
                        ? 'before:left-3/4'
                        : ''
                }`
              : `before:w-1/2 ${
                  items[1].value === value ? 'before:left-1/2' : ''
                }`
        }`}
      >
        {items.map((item, index) => (
          <button
            className={`text-base-1s relative z-2 flex h-8 flex-1 items-center justify-center text-theme-secondary outline-none transition-colors hover:text-theme-primary ${
              item.value === value ? '!text-theme-primary' : ''
            }`}
            onClick={() => handleClick(item.value, item.onClick)}
            key={index}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsSame;
