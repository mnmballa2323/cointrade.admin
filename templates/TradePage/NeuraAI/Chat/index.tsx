import Answer from '@/components/Chat/Answer';
import Question from '@/components/Chat/Question';
import Image from '@/components/Image';

type ChatProps = {};

const Chat = ({}: ChatProps) => (
  <div className="space-y-6">
    <Question content="Show me the top 5 cryptocurrencies by market cap." />
    <Answer
      content="The top 5 cryptocurrencies by market cap as of April 2024
                    are:"
    >
      <div className="mt-4 flex flex-wrap gap-3">
        {[
          'Bitcoin (BTC)',
          'Tether (USDT)',
          'BNB (BNB)',
          'Solana (SOL)',
          'Bitcoin (BTC)',
        ].map((item, index) => (
          <div
            className="text-caption-1 rounded-full bg-theme-brand-100 px-4 py-1 text-theme-brand"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </Answer>
  </div>
);

export default Chat;
