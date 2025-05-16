import CurrencyInput from 'react-currency-input-field';
import Option from '@/components/Option';
import Icon from '@/components/Icon';

type SellProps = {};

const Sell = ({}: SellProps) => {
  return (
    <>
      <CurrencyInput
        className="text-h1 mb-6 h-40 w-full bg-transparent text-center outline-none input-caret-color md:text-h2 placeholder:text-theme-primary md:h-30"
        name="price"
        prefix="Ξ"
        placeholder="Ξ0.00"
        decimalsLimit={3}
        decimalSeparator="."
        groupSeparator=","
        onValueChange={(value, name, values) =>
          console.log(value, name, values)
        }
      />
      <div className="space-y-1">
        <Option classTitle="2xl:!mr-3" title="Sell" stroke>
          Ethereum
          <span className="ml-2 text-theme-tertiary">ETH</span>
        </Option>
        <Option
          classTitle="2xl:!mr-3"
          title="For"
          color="bg-theme-green"
          stroke
        >
          USDT
          <button className="btn-square ml-auto rounded-full">
            <Icon name="arrow-down" />
          </button>
        </Option>
        <Option classTitle="2xl:!mr-3" image="/images/crypto-icon-7.png" stroke>
          <div className="text-theme-secondary">
            You get <span className="text-theme-primary">0,014701 ETH</span>{' '}
            <br></br>for <span className="text-theme-primary">US$48.16</span>
          </div>
        </Option>
        <Option classTitle="2xl:!mr-3" title="ETH" color="bg-theme-red" stroke>
          3.99904874
        </Option>
      </div>
      <button className="btn-primary mt-6 w-full">Sell ETH</button>
    </>
  );
};

export default Sell;
