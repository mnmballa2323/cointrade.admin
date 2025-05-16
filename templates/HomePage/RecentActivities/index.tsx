import Card from '@/components/Card';
import Icon from '@/components/Icon';

import { recentActivities } from '@/mocks/recentActivities';

type RecentActivitiesProps = {};

const RecentActivities = ({}: RecentActivitiesProps) => {
  return (
    <Card
      className="mx-1 w-[calc(50%-0.5rem)] lg:mx-0 lg:w-full"
      title="Recent activities"
      tooltip="Tooltip recent activities"
      seeAllUrl="/"
    >
      <div className="space-y-1 pt-6">
        {recentActivities.map(item => (
          <div className="flex items-center py-4" key={item.id}>
            <div
              className={`mr-4 flex h-12 w-10 shrink-0 items-center justify-center rounded-[0.625rem] md:mr-3 ${
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
    </Card>
  );
};

export default RecentActivities;
