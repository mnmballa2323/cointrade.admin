import React from 'react';

import Image from '@/components/Image';
import Icon from '@/components/Icon';
import Tooltip from '@/components/Tooltip';
import TooltipEle from '@/components/TooltipEle';

type ItemType = {
  id: string;
  avatar: string;
  wallet: string;
  tx: string;
  type: string;
  price: string;
  status: string;
};

type TransactionProps = {
  item: ItemType;
};

const Transaction = ({ item }: TransactionProps) => {

    const trimTx = (tx: string) => {
      if (tx.length < 44) {
        return `${tx.slice(0, 6)}...${tx.slice(-4)}`;
      }
      else{
        return `${tx.slice(0, 8)}...${tx.slice(-10)}`;
      }
    }
  return (
    <div className="text-base-1s flex h-15 items-center justify-between px-4 md:px-2 rounded-2xl hover:bg-theme-n-8 ">
    
    <div className="font-semibold cursor-pointer">
      <TooltipEle title={item.tx}>
          <div className="">{trimTx(item.tx)}</div>
      </TooltipEle>
    </div>

    <div className="font-semibold cursor-pointer">
      {/* <button className="group ml-3 h-5 w-5 shrink-0 rounded-full bg-theme-brand-100 text-0">
        <Icon
          className="!h-3 !w-3 fill-theme-brand transition-transform group-hover:rotate-45"
          name="arrow-up-right"
        />
      </button> */}
      <TooltipEle title={item.wallet}>
          <div className="">{trimTx(item.wallet)}</div>
      </TooltipEle>
     
    </div>

    <div className="font-semibold">{item.type}</div>

    <div className="font-semibold">{item.price}</div>

  </div>
  )
};

export default Transaction;
