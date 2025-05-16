import Image from '@/components/Image';

type DetailsProps = {
  title: string;
  desciption?: string;
  colorImage?: string;
  image?: string;
  children: React.ReactNode;
};

const Details = ({
  title,
  desciption,
  colorImage,
  image,
  children,
}: DetailsProps) => (
  <div className="">
    <div className="mb-1 md:mb-8">
      <div className="text-h4 border-b text-center border-theme-stroke pb-4 md:text-title-1s">
        {title}
      </div>
      {desciption && (
        <div className="text-body-2s mt-6 max-w-[30rem] text-theme-secondary">
          {desciption}
        </div>
      )}
      <div
        className={`mt-10 overflow-hidden rounded-[1.25rem] md:mt-8 ${
          colorImage || 'bg-theme-purple-100'
        }`}
      >
        {/* <Image
          className="w-full rounded-[1.25rem] md:min-h-[11.25rem] md:object-cover md:object-[70%_50%]"
          src={image}
          width={646}
          height={240}
          alt=""
        /> */}
      </div>
    </div>
    {children}
  </div>
);

export default Details;
