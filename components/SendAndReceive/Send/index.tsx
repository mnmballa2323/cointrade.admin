import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import Image from '@/components/Image';
import Modal from '@/components/Modal';
import Option from '@/components/Option';
import Sending from '../Sending';
import Confirm from '../Confirm';

type SendProps = {};

const Send = ({}: SendProps) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <CurrencyInput
        className="text-h1 mb-6 h-40 w-full bg-transparent text-center outline-none input-caret-color xl:text-h2 lg:text-h1 md:text-h2 placeholder:text-theme-primary md:h-24"
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
        <Option classTitle="2xl:mr-3" title="Asset" stroke>
          <div className="flex grow items-center">
            <div className="mr-2 shrink-0">
              <Image
                className="crypto-logo w-6"
                src="/images/crypto-icon-2.png"
                width={24}
                height={24}
                alt=""
              />
            </div>
            Ethereum
            <span className="ml-2 text-theme-tertiary">ETH</span>
          </div>
        </Option>
        <Option classTitle="2xl:mr-3" title="To" color="bg-theme-green" stroke>
          <div className="text-theme-tertiary">Wallet address</div>
        </Option>
        <Option classTitle="2xl:mr-3" title="Note" color="bg-theme-red" stroke>
          <div className="text-theme-tertiary">Messages</div>
        </Option>
      </div>
      <button
        className="btn-primary mt-6 w-full"
        onClick={() => setVisibleModal(true)}
      >
        Send
      </button>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        {confirm ? (
          <Confirm />
        ) : (
          <Sending
            onClose={() => setVisibleModal(false)}
            onConfirm={() => setConfirm(true)}
          />
        )}
      </Modal>
    </>
  );
};

export default Send;
