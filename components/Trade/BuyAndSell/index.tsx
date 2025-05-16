import CurrencyInput from 'react-currency-input-field';
import Icon from '@/components/Icon';

type BuyAndSellProps = {
  type: string;
  onSelect?: () => void;
  onContinue?: () => void;
};

const BuyAndSell = ({ type, onSelect, onContinue }: BuyAndSellProps) => (
  <>
    <div className="space-y-1">
      <CurrencyInput
        className="text-h2 h-[6.75rem] w-full rounded-3xl border-2 border-theme-stroke bg-transparent text-center outline-none transition-colors input-caret-color placeholder:text-theme-primary focus:border-theme-brand"
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
      <div
        className="text-base-2 flex h-22 cursor-pointer items-center rounded-[1.25rem] border border-theme-stroke px-5 md:h-18"
        onClick={onSelect}
      >
        <div className="mr-6 flex w-24 shrink-0 items-center text-theme-secondary md:mr-3">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-yellow"></div>
          {type === 'buy' ? 'Buy' : 'Sell'}
        </div>
        Ethereum <span className="ml-2 text-theme-tertiary">ETH</span>
        <Icon className="ml-auto fill-theme-secondary" name="arrows" />
      </div>
      <div className="text-base-2 flex min-h-[4rem] items-center rounded-[1.25rem] border border-theme-stroke px-5 py-4">
        <div className="mr-6 flex w-24 shrink-0 items-center text-theme-secondary md:mr-3">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-purple"></div>
          Purchase
        </div>
        <div className="text-theme-secondary">
          You get <span className="text-theme-primary">0,014701 ETH</span> for{' '}
          <span className="text-theme-primary">US$48.16</span>
        </div>
      </div>
      <div
        className="text-base-2 flex h-22 cursor-pointer items-center rounded-[1.25rem] border border-theme-stroke px-5 md:h-18"
        onClick={onSelect}
      >
        <div className="mr-6 flex w-24 shrink-0 items-center text-theme-secondary md:mr-3">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-green"></div>
          Pay with
        </div>
        USD Balance
        <Icon className="ml-auto fill-theme-secondary" name="arrows" />
      </div>
    </div>
    <button className="btn-primary mt-4 w-full" onClick={onContinue}>
      Continue
    </button>
  </>
);

export default BuyAndSell;
