import Image from '@/components/Image';

type QuestionProps = {
  content: string;
};

const Question = ({ content }: QuestionProps) => (
  <div className="flex">
    <div className="mr-4 shrink-0">
      <Image
        className="h-8 w-8 rounded-full opacity-100"
        src="/images/avatar-4.png"
        width={32}
        height={32}
        alt=""
      />
    </div>
    <div className="text-body-1m grow self-center text-theme-secondary">
      {content}
    </div>
  </div>
);

export default Question;
