'use client';

import Layout from '@/components/Layout';
import Prices from './Prices';

const TradePage = () => {
  return (
    <Layout title="Trade">
      <div className="flex items-center lg:block">
        <div className="card grow">
          <Prices />
        </div>
      </div>
    </Layout>
  );
};

export default TradePage;
