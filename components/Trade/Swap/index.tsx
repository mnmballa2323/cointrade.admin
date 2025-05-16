import CurrencyInput from 'react-currency-input-field';
import Image from '@/components/Image';
import Icon from '@/components/Icon';
import { useState } from 'react';

type SwapProps = {
  onSelect?: () => void;
  onContinue?: () => void;
};

const Swap = ({ onSelect, onContinue }: SwapProps) => {
  const [swap, setSwap] = useState(false);

  return (
    <>
      <div className="space-y-1">
        <div className="relative">
          <CurrencyInput
            className="text-h2 h-[8.5rem] w-full rounded-3xl border-2 border-theme-stroke bg-transparent pb-5 text-center outline-none transition-colors input-caret-color placeholder:text-theme-primary focus:border-theme-brand"
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
          <div className="text-base-2 pointer-events-none absolute bottom-7 left-0 right-0 text-center text-theme-tertiary">
            0,028331501229587153
          </div>
        </div>
        <div className="relative">
          <div
            className={`flex gap-1 ${swap ? 'flex-col-reverse' : 'flex-col'}`}
          >
            <div
              className="text-base-2 flex h-28 cursor-pointer items-center rounded-[1.25rem] border border-theme-stroke px-5"
              onClick={onSelect}
            >
              <div className="relative z-2 mr-3">
                <Image
                  className="crypto-logo w-10"
                  src="/images/eth.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="text-base-2 mr-auto">
                <div className="text-theme-tertiary">From</div>
                <div>Ethereum</div>
              </div>
              <div className="mr-12 text-right">
                <div className="text-theme-tertiary">Available</div>
                <div>1,234 USD </div>
              </div>
              <Icon className="fill-theme-secondary" name="arrows" />
            </div>
            <div
              className="text-base-2 flex h-28 cursor-pointer items-center rounded-[1.25rem] border border-theme-stroke px-5"
              onClick={onSelect}
            >
              <div className="relative z-2 mr-3">
                <Image
                  className="crypto-logo w-10"
                  src="/images/sol.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="text-base-2 mr-auto">
                <div className="text-theme-tertiary">From</div>
                <div>Solana</div>
              </div>
              <Icon className="fill-theme-secondary" name="arrows" />
            </div>
          </div>
          <button
            className="group absolute left-6 top-1/2 z-1 h-8 w-8 -translate-y-1/2 rounded-full border border-theme-stroke bg-theme-on-surface-1 text-0 transition-colors before:absolute before:bottom-full before:left-1/2 before:h-10 before:w-0.25 before:-translate-x-1/2 before:bg-theme-stroke after:absolute after:left-1/2 after:top-full after:h-10 after:w-0.25 after:-translate-x-1/2 after:bg-theme-stroke hover:bg-theme-stroke"
            onClick={() => setSwap(!swap)}
          >
            <Icon
              className="!h-3 !w-3 fill-theme-primary transition-colors group-hover:fill-theme-primary"
              name="arrow-swap"
            />
          </button>
        </div>
      </div>
      <button className="btn-primary mt-4 w-full" onClick={onContinue}>
        Preview order
      </button>
    </>
  );
};

export default Swap;
