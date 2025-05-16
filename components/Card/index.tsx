import Link from 'next/link';
import Select from '@/components/Select';
import Icon from '@/components/Icon';
import Tooltip from '@/components/Tooltip';

type CardProps = {
  className?: string;
  title?: string;
  arrowTitle?: boolean;
  option?: any;
  setOption?: any;
  options?: any;
  seeAllUrl?: string;
  tooltip?: string;
  children: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

const Card = ({
  className,
  title,
  arrowTitle,
  option,
  setOption,
  options,
  seeAllUrl,
  tooltip,
  children,
  leftContent,
  rightContent,
}: CardProps) => {
  return (
    <div className={`card ${className || ''}`}>
      <div className="relative z-2 flex min-h-[2.5rem] items-center justify-between">
        {leftContent}
        {title && (
          <div className="text-title-1s flex items-center md:text-[1.125rem]">
            <div className={`truncate ${options ? 'md:max-w-[33vw]' : ''}`}>
              {title}
            </div>{' '}
            {arrowTitle && (
              <Icon
                className="ml-3 fill-theme-primary md:ml-1.5"
                name="arrow-next"
              />
            )}
            {tooltip && (
              <Tooltip className="-mb-0.25 md:mb-0" title={tooltip} />
            )}
          </div>
        )}
        {options && (
          <Select
            className="min-w-[8.5rem] shrink-0"
            value={option}
            onChange={setOption}
            items={options}
          />
        )}
        {seeAllUrl && (
          <Link
            className="group text-button-1 inline-flex shrink-0 items-center text-primary-1"
            href={seeAllUrl}
          >
            See all
            <Icon
              className="ml-2 !h-4 !w-4 fill-primary-1 transition-transform group-hover:translate-x-0.5"
              name="arrow-next-fat"
            />
          </Link>
        )}
        {rightContent}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Card;
