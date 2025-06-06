import Image from '@/components/Image';
import Icon from '@/components/Icon';
import Option from '@/components/Option';

type ReceiveProps = {};

const Receive = ({}: ReceiveProps) => {
  return (
    <>
      <div className="mb-6 p-6 text-center md:py-0">
        <Image
          className="max-w-full opacity-100"
          src="/images/qr-code.png"
          width={180}
          height={180}
          alt=""
        />
      </div>
      <div className="space-y-1">
        <Option classTitle="2xl:mr-3" title="Network" stroke>
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
        </Option>
        <Option
          classTitle="2xl:mr-3"
          title="Address"
          color="bg-theme-green"
          stroke
        >
          0x1e8...d533B
          <button className="group ml-auto text-0">
            <Icon
              className="!h-5 !w-5 fill-theme-tertiary transition-colors group-hover:fill-theme-primary"
              name="copy"
            />
          </button>
        </Option>
        <div className="text-caption-1 rounded-xl border border-theme-stroke bg-theme-on-surface p-5 text-theme-secondary">
          This address can only receive ETH from Ethereum network. Don&apos;t
          send ETH from other networks, other ERC-20s or NFTs, or it may result
          in a loss of funds.
        </div>
      </div>
      <button className="btn-secondary mt-6 w-full">Copy ETH address</button>
    </>
  );
};

export default Receive;
