import Icon from '@/components/Icon';

type PercentProps = {
  className?: string;
  value: number;
};

const Percent = ({ className, value }: PercentProps) => (
  <div className={`inline-flex items-center ${className || ''}`}>
    <Icon
      className={`${
        value > 0 ? 'fill-theme-green' : 'rotate-180 fill-theme-red'
      }`}
      name="triangle-up"
    />
    <div
      className={`ml-1 ${value > 0 ? 'text-theme-green' : 'text-theme-red'}`}
    >
      {value > 0 ? value : value.toString().slice(1)}%
    </div>
  </div>
);

export default Percent;
