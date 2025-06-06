'use client';

import Layout from '@/components/Layout';
import BuyAndSell from '@/components/BuyAndSell';
import Chart from './Chart';
import Details from './Details';

const AssetPage = ({token}:{token:string}) => {
  return (
    <Layout title="Ethereum">
      <div className="flex items-start lg:block">
        <div className="card grow">
          <Chart token={token}/>
          <Details token={token}/>
        </div>
        {/* <BuyAndSell /> */}
      </div>
    </Layout>
  );
};

export default AssetPage;
