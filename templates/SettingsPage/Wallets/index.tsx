import { useState } from 'react';
import Field from '@/components/Field';
import Image from '@/components/Image';
import Icon from '@/components/Icon';
import Details from '../Details';

type WalletsProps = {};

const Wallets = ({}: WalletsProps) => {
  const [walletCoinbase, setWalletCoinbase] = useState('0x2e55...4a435C');

  return (
    <Details
      title="Wallets"
      desciption="Your Coinbase account, connected with Sign in with Coinbase."
      image="/images/profile-wallets.png"
      colorImage="bg-theme-brand-100"
    >
      <div className="space-y-6">
        <div className="">
          <div className="text-base-2 mb-2 flex items-center">
            <div className="mr-3">
              <Image
                className="w-6 opacity-100"
                src="/images/coinbase.png"
                width={24}
                height={24}
                alt=""
              />
            </div>
            Coinbase
          </div>
          <div className="relative">
            <button className="group absolute bottom-0 left-0 top-0 z-1 w-12 pl-1 text-0">
              <Icon
                className="!h-5 !w-5 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
                name="copy-1"
              />
            </button>
            <Field
              className="flex-1"
              classInput="pl-12 pr-42 truncate"
              value={walletCoinbase}
              onChange={e => setWalletCoinbase(e.target.value)}
              required
            />
            <button className="btn-secondary absolute bottom-1 right-1 h-10 w-38 rounded-lg px-2">
              Connect wallet
            </button>
          </div>
        </div>
      </div>
    </Details>
  );
};

export default Wallets;
