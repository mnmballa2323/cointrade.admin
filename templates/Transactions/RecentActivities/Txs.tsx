import React from 'react';
import Icon from '@/components/Icon';
import { Icon as QuestionMart } from '@chakra-ui/react';
import TooltipEle from '@/components/TooltipEle';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AllTsxTable = () => {
  const tx = [
    {
      id: '123abc456def789',
      type: 'Sell',
      amount: '100 BNB',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Binance',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '1 BTC',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
    {
      id: '123abc456def789',
      type: 'Buy',
      amount: '100 ETH',
      wallet: '0x85D70633b90e03e0276B98880286D0D055685ed7',
      exchange: 'Kucoin',
      date: '2023-05-01',
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const trimAddress = (address: string) => {
    if (typeof address === 'string' && !isMobile) {
      return `${address.slice(0, 6)}...${address.slice(-7)}`;
    } else {
      return `${address.slice(0, 6)}...${address.slice(-7)}`;
    }
  };

  return (
    <div className="shadow-default relative mt-5 w-full overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-4  text-sm font-semibold">
              <div className="flex items-center  space-x-2">
                <TooltipEle title="The unique transaction ID.">
                  <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span >Tx ID</span>
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              <div className="flex items-center text-left space-x-2">
                <TooltipEle title="The type of transaction (e.g., Buy or Sell).">
                  <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span>Type</span>
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              <div className="flex items-center text-left space-x-2">
                <TooltipEle title="The wallet address involved in the transaction.">
                  <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span>Wallet</span>
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              <div className="flex items-center space-x-2">
                <TooltipEle title="The amount of cryptocurrency involved in the transaction.">
                  <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span>Amount</span>
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              <div className="flex items-center space-x-2">
                <TooltipEle title="The exchange where the transaction occurred.">
                  <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span>Exchange</span>
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              <div className="flex items-center space-x-2">
                <TooltipEle title="The date and time of the transaction.">
                  <QuestionMart className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100" />
                </TooltipEle>
                <span>Time</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tx.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-theme-n-8"
            >
              <td className="flex gap-1 px-6 py-4 text-sm font-light">
                <Link href={`/transactiondetails/${item.id}`}>
                  <TooltipEle title={item.id}>
                    {trimAddress(item.id)}
                  </TooltipEle>
                </Link>
                <Icon
                  className="cursor-pointer fill-theme-secondary opacity-50 transition-[fill,opacity]"
                  name="copy"
                />
              </td>
              <td className="px-6 py-4 text-sm font-light">{item.type} </td>
              <td className="flex gap-1 px-6 py-4 text-sm font-light">
                <Link href={`/user/${item.wallet}`}>
                  <TooltipEle title={item.wallet}>
                    {trimAddress(item.wallet)}
                  </TooltipEle>{' '}
                </Link>
                <Icon
                  className="cursor-pointer fill-theme-secondary opacity-50 transition-[fill,opacity]"
                  name="copy"
                />
              </td>
              <td className="px-6 py-4 text-sm font-light">{item.amount}</td>
              <td className="px-6 py-4 text-sm font-light">{item.exchange}</td>
              <td className="px-6 py-4 text-sm font-light">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTsxTable;
