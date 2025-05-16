import CurrencyInput from 'react-currency-input-field';
import Option from '@/components/Option';

type BuyProps = {};

const Buy = ({}: BuyProps) => {
  return (
    <>
      <CurrencyInput
        className="text-h1 mb-6 h-40 w-full bg-transparent text-center outline-none input-caret-color md:text-h2 placeholder:text-theme-primary md:h-30"
        name="price"
        prefix="$"
        placeholder="$0.00"
        decimalsLimit={2}
        decimalSeparator="."
        groupSeparator=","
        onValueChange={(value, name, values) =>
          console.log(value, name, values)
        }
      />
      <div className="space-y-1">
        <Option classTitle="2xl:!mr-3" title="Buy" stroke>
          Ethereum
          <span className="ml-2 text-theme-tertiary">ETH</span>
        </Option>
        <Option classTitle="2xl:!mr-3" image="/images/eth.png" stroke>
          <div className="text-theme-secondary">
            You get <span className="text-theme-primary">0,014701 ETH</span>{' '}
            <br></br>for <span className="text-theme-primary">US$48.16</span>
          </div>
        </Option>
        <Option
          classTitle="2xl:!mr-3"
          title="Pay with"
          color="bg-theme-green"
          stroke
        >
          USD Balance
        </Option>
        <Option classTitle="2xl:!mr-3" title="ETH" color="bg-[#FD8965]" stroke>
          3.99904874
        </Option>
      </div>
      <button className="btn-primary mt-6 w-full">Buy ETH</button>
    </>
  );
};

export default Buy;
