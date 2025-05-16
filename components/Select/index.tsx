import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import Icon from '@/components/Icon';

type ItemsType = {
  id: string;
  title: string;
};

type SelectProps = {
  className?: string;
  classButton?: string;
  classOption?: string;
  label?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  items: ItemsType[];
};

const Select = ({
  className,
  classButton,
  classOption,
  label,
  placeholder,
  value,
  onChange,
  items,
}: SelectProps) => (
  <div className={`${className || ''}`}>
    {label && <div className="mb-2">{label}</div>}
    <Listbox className="relative" value={value} onChange={onChange} as="div">
      <ListboxButton
        className={`text-base-2 flex h-10 w-full items-center justify-between rounded-xl border-2 border-theme-stroke px-3.5 outline-none transition-colors ui-open:border-theme-border-brand ${
          value ? 'text-theme-secondary' : 'text-theme-secondary'
        } ${classButton || ''}`}
      >
        <div className="truncate">{value ? value.title : placeholder}</div>
        <Icon
          className="ml-4 !h-4 !w-4 shrink-0 fill-theme-secondary transition-transform ui-open:rotate-180"
          name="arrow-down"
        />
      </ListboxButton>
      <Transition
        enter="duration-200 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <ListboxOptions className="absolute left-0 right-0 top-full z-2 mt-0.5 overflow-hidden rounded-xl border-2 border-theme-stroke bg-theme-on-surface-1 outline-none">
          {items.map(item => (
            <ListboxOption
              className={`text-base-2 cursor-pointer px-3.5 py-2 text-theme-secondary transition-colors hover:bg-theme-on-surface ui-selected:bg-theme-on-surface-2 ui-selected:text-theme-primary ${
                classOption || ''
              }`}
              key={item.id}
              value={item}
            >
              {item.title}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </Listbox>
  </div>
);

export default Select;
