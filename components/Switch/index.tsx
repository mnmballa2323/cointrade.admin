import { Switch as SwitchReact } from '@headlessui/react';

type SwitchProps = {
  className?: string;
  value: any;
  setValue: any;
  small?: boolean;
  theme?: boolean;
};

const Switch = ({ className, value, setValue, small, theme }: SwitchProps) => (
  <div className={`inline-flex shrink-0 ${className || ''}`}>
    <SwitchReact
      className={`relative inline-flex cursor-pointer rounded-full outline-none transition-colors ${
        small ? 'h-6 w-12 border-2' : 'h-8 w-14 border-4'
      } ${
        (theme ? value === 'dark' : value)
          ? 'border-theme-brand bg-theme-brand'
          : 'border-theme-on-surface-3 bg-theme-on-surface-3'
      }`}
      checked={value}
      onChange={setValue}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block rounded-full bg-theme-white-fixed transition-all ${
          small ? 'h-5 w-5' : 'h-6 w-6'
        } ${
          (theme ? value === 'dark' : value) ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </SwitchReact>
  </div>
);

export default Switch;
