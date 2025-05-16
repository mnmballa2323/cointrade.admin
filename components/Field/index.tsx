import { ChangeEvent } from 'react';
import Icon from '@/components/Icon';

type FieldProps = {
  className?: string;
  classInput?: string;
  label?: string;
  note?: string;
  icon?: string;
  textarea?: boolean;
  type?: string;
  success?: boolean;
  error?: boolean;
};

const Field = ({
  className,
  classInput,
  label,
  note,
  icon,
  textarea,
  type,
  success,
  error,
  ...inputProps
}: FieldProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className={`${className || ''}`}>
      {label && <div className="text-base-2 mb-2">{label}</div>}
      <div className={`relative ${textarea ? 'text-0' : ''}`}>
        {icon && (
          <Icon
            className="pointer-events-none absolute left-3 top-1/2 z-2 -translate-y-1/2 fill-theme-secondary"
            name={icon}
          />
        )}
        {textarea ? (
          <textarea
            className={`text-base-2 h-[8.75rem] w-full resize-none rounded-xl border border-transparent bg-theme-on-surface px-4 py-3 font-sans text-theme-primary outline-none transition-colors placeholder:text-theme-tertiary focus:border-brand-500 focus:bg-theme-on-surface-1 md:text-[1rem] ${
              classInput || ''
            } ${
              success
                ? '!border-primary-2 !bg-theme-green-100 !text-primary-2 placeholder:!text-primary-2'
                : ''
            } ${
              error
                ? '!border-primary-3 !bg-theme-red-100 !text-theme-red placeholder:!text-theme-red'
                : ''
            } ${icon ? 'pl-12' : ''}`}
            {...inputProps}
          ></textarea>
        ) : (
          <input
            className={`text-base-2 h-12 w-full rounded-xl border border-transparent bg-theme-on-surface px-4 font-sans text-theme-primary outline-none transition-colors placeholder:text-theme-tertiary focus:border-brand-500 focus:bg-theme-on-surface-1 md:text-[1rem] ${
              classInput || ''
            } ${
              success
                ? '!border-primary-2 !bg-theme-green-100 !text-primary-2 placeholder:!text-primary-2'
                : ''
            } ${
              error
                ? '!border-primary-3 !bg-theme-red-100 !text-theme-red placeholder:!text-theme-red'
                : ''
            } ${icon ? 'pl-12' : ''}`}
            type={type || 'text'}
            {...inputProps}
          />
        )}
      </div>
      {note && (
        <div className="text-caption-2m mt-2 text-theme-tertiary">{note}</div>
      )}
    </div>
  );
};

export default Field;
