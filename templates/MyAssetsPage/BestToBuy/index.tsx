import { useState } from 'react';
import { AreaPlot, BarPlot, RatioPlot } from '@/components/NativeCharts';
import Link from '@/platform/navigation';
import Card from '@/components/Card';
import Icon from '@/components/Icon';
import CurrencyFormat from '@/components/CurrencyFormat';
import Image from '@/components/Image';
import Percent from '@/components/Percent';
import Modal from '@/components/Modal';
import SetAlert from '@/components/SetAlert';

import { chartBestToBuy } from '@/mocks/charts';

type BestToBuyProps = {};

const BestToBuy = ({}: BestToBuyProps) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <Card
        className="card-sidebar"
        title="Best to buy"
        rightContent={
          <button className="group h-9 w-9 rounded-xl border-2 border-theme-stroke text-0 transition-colors hover:bg-theme-stroke">
            <Icon
              className="!h-5 !w-5 fill-theme-secondary transition-colors group-hover:fill-theme-primary"
              name="refresh"
            />
          </button>
        }
      >
        <div className="pt-6">
          <CurrencyFormat
            className="text-h3 mb-3"
            value={3326.18}
            currency="$"
          />
          <div className="flex items-center">
            <div className="mr-2">
              <Image
                className="w-6"
                src="/images/crypto-icon-gray-2.png"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="text-base-1s">
              Ethereum <span className="text-theme-tertiary">ETH</span>
            </div>
            <Percent className="text-base-2 ml-2" value={12.32} />
          </div>
          <div className="-mx-6 my-2 h-38 md:-mx-4">
            <AreaPlot data={chartBestToBuy} dataKey="price" color="#32AE60" height="100%" compact />
          </div>
          <div className="text-caption-1 mb-8 flex items-center text-theme-secondary md:mb-6">
            <div className="mr-3">
              <Image
                className="w-6"
                src="/images/logo-1.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>
            Method: LSTM, Accuracy: 87%
          </div>
          <div className="flex space-x-2">
            <Link className="btn-secondary flex-1 px-2" href="/trade">
              Smart trade
            </Link>
            <button
              className="btn-gray flex-1 px-2"
              onClick={() => setVisibleModal(true)}
            >
              Set Alert
            </button>
          </div>
        </div>
      </Card>
      <Modal
        classWrap="max-w-[28.5rem] rounded-3xl"
        showButtonClose
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      >
        <>
          <SetAlert />
        </>
      </Modal>
    </>
  );
};

export default BestToBuy;
