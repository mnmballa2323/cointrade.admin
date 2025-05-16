import { Tooltip as MyTooltip } from 'react-tooltip';
import Icon from '@/components/Icon';

type TooltipProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

const TooltipEle = ({ className, title, children }: TooltipProps) => (
  <div
    className={`group inline-flex cursor-pointer  ${className || ''}`}
    style={{
      zIndex: 9999,
    }}
    data-tooltip-id="my-tooltip"
    data-tooltip-content={title}
  >
    <MyTooltip id="my-tooltip" />
    {children}
  </div>
);

export default TooltipEle;
