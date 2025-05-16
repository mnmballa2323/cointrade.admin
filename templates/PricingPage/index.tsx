'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import TabsSame from '@/components/TabsSame';
import Image from '@/components/Image';
import CurrencyFormat from '@/components/CurrencyFormat';
import Icon from '@/components/Icon';

import { pricing } from '@/mocks/pricing';

const PricingPage = () => {
  const [type, setType] = useState<string>('monthly');

  const typeTasks = [
    {
      title: 'Monthly',
      value: 'monthly',
    },
    {
      title: 'Yearly',
      value: 'yearly',
    },
  ];

  return (
    <Layout title="Premium">
      <div className="pt-12 md:pt-6">
        <div className="mb-14 text-center 2xl:mb-10 md:mb-6 md:text-left">
          <div className="text-h1 mb-3 2xl:text-h2 md:text-h3">
            Simplify your trading
          </div>
          <div className="mb-6 text-[1.25rem] font-medium leading-[2rem] text-theme-secondary">
            Powerful tools to enhance your crypto trading experience.
          </div>
          <TabsSame
            className="mx-auto max-w-[18.5rem] shadow-[0_0_0_0.0625rem_#EFEFEF] dark:shadow-[0_0_0_0.0625rem_#272B30] md:max-w-full"
            items={typeTasks}
            value={type}
            setValue={setType}
          />
        </div>
        <div className="mx-auto flex max-w-[65.6875rem] space-x-2 lg:block lg:max-w-[25rem] lg:space-x-0 lg:space-y-2">
          {pricing.map(item => (
            <div
              className={`flex flex-1 flex-col rounded-2xl bg-theme-on-surface-1 p-1 ${
                item.popular ? 'shadow-depth-1' : ''
              }`}
              key={item.id}
            >
              <div
                className={`relative rounded-xl border border-theme-stroke px-7 py-6 md:px-4 ${
                  item.popular
                    ? 'border-transparent bg-theme-light shadow-depth-1'
                    : ''
                }`}
              >
                {item.popular && (
                  <div className="text-caption-2 absolute right-1 top-1 rounded-full bg-levender-300 px-5 py-0.5 font-bold text-theme-primary-fixed">
                    Popular
                  </div>
                )}
                <div className="text-title-1s mb-2 flex items-center">
                  <div className="mr-3 text-0">
                    <Image
                      className="crypto-logo w-6"
                      src={item.image}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  {item.title}
                </div>
                <div className="text-h3 mb-8 flex">
                  <div className="mr-3">$</div>
                  <CurrencyFormat
                    hideFraction={true}
                    value={
                      type === 'monthly' ? item.priceMonthly : item.priceYearly
                    }
                  />
                </div>
                <div className="text-body-2s mb-8 line-clamp-3 text-theme-secondary 2xl:line-clamp-4">
                  {item.description}
                </div>
                {item.active ? (
                  <div className="text-button-1 flex h-12 items-center justify-between rounded-full bg-theme-secondary px-6 text-theme-white-fixed">
                    Active
                    <Icon className="fill-theme-white-fixed" name="check" />
                  </div>
                ) : (
                  <button
                    className={`w-full ${
                      item.popular ? 'btn-secondary' : 'btn-gray'
                    }`}
                  >
                    Upgrade to {item.title}
                  </button>
                )}
              </div>
              <div className="grow space-y-5 px-7 pb-9 pt-8 md:px-4">
                {item.options.map((option, index) => (
                  <div className="text-body-2s flex" key={index}>
                    <Icon
                      className="mr-3 shrink-0 fill-primary-2"
                      name="check-circle"
                    />
                    <div className="flex grow items-center">{option}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
