import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import TabsSame from '@/components/TabsSame';
import Image from '@/components/Image';

type SetAlertProps = {};

const SetAlert = ({}: SetAlertProps) => {
  const [type, setType] = useState<string>('price');

  const typeTasks = [
    {
      title: 'Price',
      value: 'price',
    },
    {
      title: 'Change',
      value: 'change',
    },
  ];

  return (
    <div className="">
      <div className="text-h4 mb-6">Set alert</div>
      <TabsSame
        className="mb-4"
        items={typeTasks}
        value={type}
        setValue={setType}
      />
      <div className="mb-4 rounded-2xl border border-theme-stroke bg-theme-on-surface p-8 md:px-4">
        <div className="mb-3 text-center">
          <Image
            className="crypto-logo w-12"
            src="/images/crypto-icon-2.png"
            width={48}
            height={48}
            alt=""
          />
        </div>
        <div className="text-base-1s mb-3 text-center">
          Ethereum <span className="text-theme-tertiary">ETH</span>
        </div>
        <CurrencyInput
          className="text-h2 w-full bg-transparent text-center outline-none input-caret-color placeholder:text-theme-primary"
          name="price"
          prefix="$"
          placeholder="$0.00"
          decimalsLimit={2}
          decimalSeparator="."
          groupSeparator=","
          onValueChange={(value, name, values) =>
            console.log(value, name, values)
          }
          data-autofocus
        />
      </div>
      <button className="btn-secondary w-full">Set price alert</button>
    </div>
  );
};

export default SetAlert;
