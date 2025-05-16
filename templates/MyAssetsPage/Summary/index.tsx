import { useState } from 'react';
import Card from '@/components/Card';
import CurrencyFormat from '@/components/CurrencyFormat';
import Image from '@/components/Image';
import Tooltip from '@/components/Tooltip';
import Modal from '@/components/Modal';
import CashOut from '../CashOut';
import CashOutPreview from '../CashOutPreview';

const items = [
  {
    title: 'Available to trade',
    price: 3326.18,
    tooltip: 'Toolltip Available to trade',
    image: '/images/currency-dollar.svg',
  },
  {
    title: 'Available to cash out',
    price: 1467.56,
    tooltip: 'Toolltip Available to cash out',
    image: '/images/arrow-narrow-up-right.svg',
  },
];

type SummaryProps = {};

const Summary = ({}: SummaryProps) => {
  const [preview, setPreview] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <Card className="card-sidebar" title="Summary">
        <div className="pt-6">
          <CurrencyFormat
            className="text-h3 mb-4"
            value={3326.18}
            currency="$"
          />
          <div className="mb-8 space-y-8">
            {items.map((item, index) => (
              <div className="flex items-center" key={index}>
                <div
                  className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${
                    index === 0 ? 'bg-theme-brand-100' : 'bg-theme-green-100'
                  }`}
                >
                  <Image
                    className="w-6 opacity-100"
                    src={item.image}
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div className="grow">
                  <CurrencyFormat
                    className="text-title-1s"
                    value={item.price}
                    currency="$"
                    sameColor
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-base-2 text-theme-secondary">
                      {item.title}
                    </div>
                    <Tooltip title={item.tooltip} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="btn-gray w-full"
            onClick={() => setVisibleModal(true)}
          >
            Cash out
          </button>
        </div>
      </Card>
      <Modal
        classWrap="md:!p-4"
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      >
        {preview ? (
          <CashOutPreview onBack={() => setPreview(false)} />
        ) : (
          <CashOut
            onClose={() => setVisibleModal(false)}
            onContinue={() => setPreview(true)}
          />
        )}
      </Modal>
    </>
  );
};

export default Summary;
