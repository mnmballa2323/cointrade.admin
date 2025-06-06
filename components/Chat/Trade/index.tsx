import CurrencyInput from 'react-currency-input-field';
import Icon from '@/components/Icon';
import Percent from '@/components/Percent';

type TradeProps = {};

const Trade = ({}: TradeProps) => (
  <div className="mt-8 max-w-[25rem] rounded-2xl border border-theme-stroke bg-theme-on-surface md:mt-6">
    <CurrencyInput
      className="text-h2 h-32 w-full bg-transparent px-4 text-center outline-none input-caret-color placeholder:text-theme-primary"
      name="price"
      prefix="$"
      placeholder="$0.00"
      decimalsLimit={2}
      decimalSeparator="."
      groupSeparator=","
      onValueChange={(value, name, values) => console.log(value, name, values)}
    />
    <div className="">
      <div className="flex min-h-[4rem] items-center border-t border-theme-stroke px-6 py-4 md:px-4">
        <div className="text-base-2 flex w-22 items-center text-theme-secondary">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-green"></div>
          Best time
        </div>
        <div className="flex grow items-center pl-6 md:pl-4">
          <div className="text-base-2">
            10:31AM <span className="md:hidden"> Tue 9 Apr 2024</span>
          </div>
          <button className="btn-square ml-auto rounded-full">
            <Icon name="refresh" />
          </button>
        </div>
      </div>
      <div className="flex min-h-[4rem] items-center border-t border-theme-stroke px-6 py-4 md:px-4">
        <div className="text-base-2 flex w-22 items-center text-theme-secondary">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-purple"></div>
          Buy
        </div>
        <div className="flex grow items-center pl-6 md:pl-4">
          <div className="text-base-2">ETH</div>
          <button className="btn-square ml-auto rounded-full">
            <Icon name="arrow-down" />
          </button>
        </div>
      </div>
      <div className="flex min-h-[4rem] items-center border-t border-theme-stroke px-6 py-4 md:px-4">
        <div className="text-base-2 flex w-22 items-center text-theme-secondary">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-brand"></div>
          Target
        </div>
        <div className="flex grow items-center pl-6 md:pl-4">
          <div className="text-base-2">+10%</div>
        </div>
      </div>
      <div className="flex min-h-[4rem] items-center border-t border-theme-stroke px-6 py-4 md:px-4">
        <div className="text-base-2 flex w-22 items-center text-theme-secondary">
          <div className="mr-2 h-3 w-3 shrink-0 rounded bg-theme-yellow"></div>
          Estimate
        </div>
        <div className="flex grow items-center pl-6 md:pl-4">
          <div className="text-base-2 md:hidden">0,030214426289846993</div>
          <div className="text-base-2 hidden md:block">0,03021</div>
          <Percent className="text-base-2 ml-auto" value={10} />
        </div>
      </div>
    </div>
    <div className="flex space-x-4 p-6 md:block md:space-x-0 md:space-y-4 md:px-4">
      <button className="btn-gray flex-1 px-4 md:w-full">Re-generate</button>
      <button className="btn-secondary flex-1 px-4 md:w-full">
        Set smart trade
      </button>
    </div>
  </div>
);

export default Trade;
