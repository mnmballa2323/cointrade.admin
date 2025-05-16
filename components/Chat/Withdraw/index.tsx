import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import Image from '@/components/Image';

type TradeProps = {};

const Trade = ({}: TradeProps) => {
  const [send, setSend] = useState('0x1e862Be...26b444d533B');

  return (
    <div className="mt-8 max-w-[25rem] rounded-2xl border border-theme-stroke bg-theme-on-surface p-6 pt-10 md:mt-6 md:p-4 md:pt-6">
      <div className="mb-6 space-y-6">
        <div className="">
          <div className="text-base-2 mb-3 text-theme-secondary">Goal</div>
          <div className="relative">
            <CurrencyInput
              className="text-base-1s h-12 w-full rounded-xl bg-theme-on-surface-1 pl-15 pr-6 outline-none input-caret-color placeholder:text-theme-primary md:pl-12"
              name="price"
              prefix="Ξ"
              placeholder="Ξ0.00"
              decimalsLimit={2}
              decimalSeparator="."
              groupSeparator=","
              onValueChange={(value, name, values) =>
                console.log(value, name, values)
              }
            />
            <Image
              className="crypto-logo absolute left-3 top-1/2 w-6 -translate-y-1/2"
              src="/images/crypto-icon-2.png"
              width={24}
              height={24}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="text-base-2 mb-3 text-theme-secondary">Send to</div>
          <div className="relative">
            <input
              className="text-base-1s h-12 w-full rounded-xl bg-theme-on-surface-1 pl-15 pr-6 outline-none input-caret-color placeholder:text-theme-primary md:pl-12 md:text-[1rem]"
              type="text"
              value={send}
              onChange={e => setSend(e.target.value)}
              required
              data-autofocus
            />
            <Image
              className="absolute left-3 top-1/2 w-6 -translate-y-1/2 opacity-100"
              src="/images/fox.png"
              width={24}
              height={24}
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="btn-secondary w-full">Set smart trade</button>
    </div>
  );
};

export default Trade;
