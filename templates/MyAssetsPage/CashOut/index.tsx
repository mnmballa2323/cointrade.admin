import CurrencyInput from 'react-currency-input-field';
import Icon from '@/components/Icon';
import ButtonBack from '@/components/ButtonBack';

type CashOutProps = {
  onClose: () => void;
  onContinue: () => void;
};

const CashOut = ({ onClose, onContinue }: CashOutProps) => (
  <div className="">
    <ButtonBack title="Cash out" onClick={onClose} />
    <CurrencyInput
      className="text-h1 mb-1 h-40 w-full bg-transparent text-center outline-none input-caret-color md:text-h2 placeholder:text-theme-primary md:h-30"
      name="price"
      prefix="$"
      placeholder="$0.00"
      decimalsLimit={2}
      decimalSeparator="."
      groupSeparator=","
      onValueChange={(value, name, values) => console.log(value, name, values)}
      data-autofocus
    />
    <div className="mb-3 flex h-14 items-center rounded-xl border-2 border-green-400 px-3">
      <Icon className="mr-3 fill-theme-primary" name="credit-card-search" />
      <div className="text-base-1s">•••••9911</div>
      <Icon className="ml-auto fill-primary-2" name="check-circle" />
    </div>
    <button className="btn-gray mb-3 w-full">Add new card</button>
    <button className="btn-primary mb-4 h-14 w-full" onClick={onContinue}>
      Continue
    </button>
    <div className="text-caption-1 rounded-xl border border-theme-stroke bg-theme-on-surface p-4 text-theme-secondary">
      To link and verify your bank account, please make a deposit. For your
      safety, withdrawals are only permitted to verified bank accounts.
    </div>
  </div>
);

export default CashOut;
