import { useState } from 'react';
import Icon from '@/components/Icon';
import TooltipEle from '@/components/TooltipEle';
import { Icon as QuestionMart } from '@chakra-ui/react';
import { toast } from 'sonner';

type DetailsProps = {
  token: string;
};

const Details = ({token}: DetailsProps) => {
  const [showText, setShowText] = useState<boolean>(false);

  const handleToast=()=>{
    toast.success("Token delisted successfully")
  }

  return (
    <div>
      <div className="mb-6 mt-6 rounded-xl border border-theme-stroke bg-theme-on-surface p-6">
        <div className="text-title-1s mb-5">Actions</div>
        <div className="flex space-x-4">
          <button
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={handleToast}
          >
            Delist Token
          </button>
          <button
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
           onClick={handleToast}
          >
            Pause Token Trading
          </button>
        </div>
      </div>

      {/* Stats Section */}

      <div className="rounded-xl border border-theme-stroke bg-theme-on-surface p-6">
        <div className="text-title-1s mb-5">Stats</div>
        <div className="flex space-x-5 md:block md:space-x-0 md:space-y-5">
          <div className="flex-1">
            <div className="text-body-2s mb-3 flex items-center space-x-2 text-theme-secondary">
              <TooltipEle title="The total market capitalization of the cryptocurrency.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span>Market Cap</span>
            </div>
            <div className="text-h5">$393,049,577,059</div>
          </div>
          <div className="flex-1">
            <div className="text-body-2s mb-3 flex items-center space-x-2 text-theme-secondary">
              <TooltipEle title="The total trading volume in the last 24 hours.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span>Volume (24h)</span>
            </div>
            <div className="text-h5">$15,333,208,883</div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="mt-6 rounded-xl border border-theme-stroke bg-theme-on-surface p-6">
        <div className="text-title-1s mb-5">Additional Details</div>
        <div className="space-y-4">
          {/* Circulating Supply */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The total number of coins currently in circulation.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Circulating Supply:</span>
            </div>
            <span className="text-gray-500">120,456,789 ETH</span>
          </div>

          {/* Max Supply */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The maximum number of coins that will ever exist.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Max Supply:</span>
            </div>
            <span className="text-gray-500">Unlimited</span>
          </div>

          {/* All-Time High */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The highest price ever recorded for this cryptocurrency.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">All-Time High:</span>
            </div>
            <span className="text-gray-500">$4,878.26 (Nov 10, 2021)</span>
          </div>

          {/* All-Time Low */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The lowest price ever recorded for this cryptocurrency.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">All-Time Low:</span>
            </div>
            <span className="text-gray-500">$0.31 (Oct 20, 2015)</span>
          </div>

          {/* Consensus Mechanism */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The consensus mechanism used by the blockchain.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Consensus Mechanism:</span>
            </div>
            <span className="text-gray-500">Proof of Stake (PoS)</span>
          </div>

          {/* Launch Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipEle title="The date when the cryptocurrency was launched.">
                <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
              </TooltipEle>
              <span className="font-semibold">Launch Date:</span>
            </div>
            <span className="text-gray-500">July 30, 2015</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6 rounded-xl border border-theme-stroke bg-theme-on-surface p-6">
        <div className="text-title-1s mb-5">About Ethereum</div>
        <div
          className={`text-theme-secondary ${
            showText ? 'line-clamp-none' : 'line-clamp-4'
          }`}
        >
          Ethereum is a decentralized open-source blockchain system that
          features its own cryptocurrency, Ether. ETH works as a platform for
          numerous other cryptocurrencies, as well as for the execution of
          decentralized smart contracts. Ethereum was first described in a 2013
          whitepaper by Vitalik Buterin...
        </div>
        <button
          className="text-button-1 mt-3 inline-flex items-center text-theme-brand"
          onClick={() => setShowText(!showText)}
        >
          View {showText ? 'less' : 'more'}
          <Icon
            className={`ml-2 !h-4 !w-4 fill-theme-brand transition-transform ${
              showText ? 'rotate-180' : ''
            }`}
            name="arrow-down"
          />
        </button>
      </div>
    </div>
  );
};

export default Details;
