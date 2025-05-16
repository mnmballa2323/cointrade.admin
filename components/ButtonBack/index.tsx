import Icon from '@/components/Icon';

type ButtonBackProps = {
  className?: string;
  title: string;
  onClick: () => void;
};

const ButtonBack = ({ className, title, onClick }: ButtonBackProps) => (
  <button
    className={`group text-h5 mb-6 inline-flex h-14 items-center md:text-title-1s md:h-10 ${
      className || ''
    }`}
    onClick={onClick}
  >
    <div className="mr-3 flex h-10 w-10 items-center justify-center">
      <Icon
        className="fill-theme-secondary transition-transform group-hover:-translate-x-0.5"
        name="arrow-left"
      />
    </div>
    {title}
  </button>
);

export default ButtonBack;
