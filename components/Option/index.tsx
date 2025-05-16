import Image from '@/components/Image';

type OptionProps = {
  classTitle?: string;
  title?: string;
  color?: string;
  image?: string;
  stroke?: boolean;
  children: React.ReactNode;
};

const Option = ({
  classTitle,
  title,
  color,
  image,
  stroke,
  children,
}: OptionProps) => (
  <div
    className={`flex items-center ${
      stroke
        ? 'min-h-[4rem] rounded-xl border border-theme-stroke px-4 py-4'
        : 'min-h-[3.5rem] border-t border-theme-stroke'
    }`}
  >
    <div
      className={`text-base-2 mr-6 flex w-20 items-center text-theme-secondary xl:mr-3 ${
        classTitle || ''
      }`}
    >
      {image ? (
        <Image
          className="crypto-logo w-6"
          src={image}
          width={24}
          height={24}
          alt=""
        />
      ) : (
        <>
          <div
            className={`mr-2 h-3 w-3 shrink-0 rounded ${
              color || 'bg-theme-yellow'
            }`}
          ></div>
          {title}
        </>
      )}
    </div>
    <div className="text-base-2 flex grow items-center">{children}</div>
  </div>
);

export default Option;
