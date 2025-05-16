import Link from 'next/link';
import Card from '@/components/Card';
import Image from '@/components/Image';
import CurrencyFormat from '@/components/CurrencyFormat';
import Icon from '@/components/Icon';

import { allAssets } from '@/mocks/assets';

type AllAssetsProps = {};

const AllAssets = ({}: AllAssetsProps) => {
  return (
    <Card className="grow" title="All assets" tooltip="Tooltip all assets">
      <div className="-mx-6 mt-5 md:-mx-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-caption-2m py-3 pl-6 text-left text-theme-secondary md:pl-4">
                Name
              </th>
              <th className="text-caption-2m py-3 pl-4 text-left text-theme-secondary">
                Balance
              </th>
              <th className="text-caption-2m py-3 pl-4 text-left text-theme-secondary md:hidden">
                USD
              </th>
              <th className="text-caption-2m py-3 pl-4 pr-6 text-left text-theme-secondary md:pr-4"></th>
            </tr>
          </thead>
          <tbody>
            {allAssets.map(asset => (
              <tr className="" key={asset.id}>
                <td className="border-t border-theme-stroke py-3 pl-6 md:pl-4">
                  <div className="text-base-1s inline-flex items-center">
                    <div className="crypto-logo mr-4 shrink-0">
                      <Image
                        className="w-8 opacity-100"
                        src={asset.logo}
                        width={32}
                        height={32}
                        alt=""
                      />
                    </div>
                    {asset.currency}
                  </div>
                </td>
                <td className="border-t border-theme-stroke py-3 pl-4">
                  <CurrencyFormat
                    className="text-base-1s"
                    value={asset.balance}
                    currency="$"
                  />
                </td>
                <td className="text-base-1s border-t border-theme-stroke py-3 pl-4 text-theme-secondary md:hidden">
                  ${asset.usd}
                </td>
                <td className="border-t border-theme-stroke py-3 pl-4 pr-6 text-right md:pr-4">
                  <div className="inline-flex space-x-2">
                    <Link
                      className="btn-gray h-10 min-w-[5.5rem] md:w-10 md:min-w-fit md:p-0"
                      href="/token"
                    >
                      <span className="md:hidden">Buy</span>
                      <Icon
                        className="hidden !fill-theme-secondary md:!m-0 md:inline-block"
                        name="plus"
                      />
                    </Link>
                    <Link
                      className="btn-gray h-10 min-w-[5.5rem] md:w-10 md:min-w-fit md:p-0"
                      href="/asset"
                    >
                      <span className="md:hidden">Send</span>
                      <Icon
                        className="hidden !fill-theme-secondary md:!m-0 md:inline-block"
                        name="arrow-up-right-thin"
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default AllAssets;
