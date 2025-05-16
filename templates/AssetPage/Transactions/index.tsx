import Icon from '@/components/Icon';
import Tooltip from '@/components/Tooltip';

import { recentActivities } from '@/mocks/recentActivities';

type TransactionsProps = {};

const Transactions = ({}: TransactionsProps) => {
  return (
    <div>
      <div className="mb-6 flex h-10 items-center">
        <div className="text-title-1s">Transactions</div>
        <Tooltip className="-mb-0.5" title="Transactions tooltip" />
      </div>
      <div className="-mx-3 space-y-1">
        {recentActivities.map(item => (
          <div
            className="flex cursor-pointer items-center rounded-xl border border-transparent px-3 py-4 transition-all hover:border-theme-stroke hover:bg-theme-on-surface-1 hover:shadow-[0_0_0.875rem_-0.25rem_rgba(0,0,0,0.05),0_2rem_3rem_-0.5rem_rgba(0,0,0,0.05)]"
            key={item.id}
          >
            <div
              className={`mr-4 flex h-12 w-10 shrink-0 items-center justify-center rounded-[0.625rem] md:mr-2 ${
                item.balance ? 'bg-theme-brand-100' : 'bg-theme-purple-100'
              }`}
            >
              <Icon
                className={`!h-5 !w-5 ${
                  item.balance
                    ? 'fill-theme-brand'
                    : 'rotate-180 fill-theme-purple'
                }`}
                name="arrow-up-right-long"
              />
            </div>
            <div className="mr-auto">
              <div className="text-base-1s flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-theme-green"></div>
                {item.wallet}
              </div>
              <div
                className={`text-base-2 ${
                  item.status === 'Pending'
                    ? 'text-theme-yellow'
                    : 'text-theme-green'
                }`}
              >
                {item.status}
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base-1s flex items-center justify-end">
                {item.priceCrypto}
                <div className="ml-2 h-4 w-4 rounded-full bg-theme-on-surface-2"></div>
              </div>
              <div className="text-base-2 flex items-center justify-end text-theme-tertiary">
                {item.price}
                <div className="ml-2 h-4 w-4 rounded-full bg-theme-on-surface-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
