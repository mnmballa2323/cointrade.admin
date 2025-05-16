import Card from '@/components/Card';
import Icon from '@/components/Icon';

import { recentActivities } from '@/mocks/recentActivities';
import { useEffect, useState } from 'react';
import AllTsxTable from './Txs';
import Select from '@/components/Select';
import Dvider from '@/components/Divider';

type RecentActivitiesProps = {};

const Tx = [
  {
    id: '0',
    title: 'Latest',
  },

  {
    id: '1',
    title: 'Oldest',
  },
  {
    id: '2',
    title: 'Amount (High to Low)',
  },
  {
    id: '3',
    title: 'Amount (Low to High)',
  },
];

const RecentActivities = ({}: RecentActivitiesProps) => {
  const [Txvalue, setTxvalue] = useState(Tx[0]);

  return (
    <div className="mx-1 w-[calc(100%-0.5rem)] lg:mx-0 lg:w-full ">
      <div className="mt-1">
      <h1 className="mb-6 text-2xl text-center font-bold">TRANSACTIONS</h1>
       <Dvider/>
        <div className="flex justify-end">
          <div className="">
            <Select
              className="min-w-[8.5rem] shrink-0 lg:hidden"
              value={Txvalue}
              onChange={setTxvalue}
              items={Tx}
            />
          </div>
        </div>
        <AllTsxTable />
      </div>
    </div>
  );
};

export default RecentActivities;
