import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Modal from '@/components/Modal';
import Trade from '@/components/Trade';
import User from '@/components/User';
import Image from '@/components/Image';
import Notifications from './Notifications';
import Search from './Search';
import ConnectWallet from '../ConnectWallet';

type HeaderProps = {
  title: string;
  visible?: boolean;
  showMenu?: boolean;
  onClickBurger?: () => void;
};

const Header = ({ title, visible, showMenu, onClickBurger }: HeaderProps) => {
  const router = useRouter();
  const [visibleModalSearch, setVisibleModalSearch] = useState<boolean>(false);
  const [visibleModalTrade, setVisibleModalTrade] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  return (
    <>
      <div
        className={`fixed right-0 top-0 z-10 bg-theme-n-8 md:z-30 md:px-4 md:py-2 md:transition-colors ${
          visible
            ? 'left-[21.25rem] 2xl:left-76 xl:left-20 md:left-0'
            : 'left-20 md:left-0'
        } ${showMenu ? 'md:!bg-theme-on-surface-1' : ''}`}
      >
        <div
          className={`mx-auto flex h-24 max-w-[80rem] items-center px-10 lg:px-6 md:h-16 md:rounded-2xl md:bg-theme-on-surface-1 md:px-4 md:transition-shadow ${
            showMenu
              ? 'shadow-depth-1 dark:shadow-[inset_0_0_0_0.125rem_#272B30]'
              : ''
          }`}
        >
          <Link className="mr-auto hidden md:block" href="/">
            <Image
              className="w-9 opacity-100"
              src={
                colorMode === 'light'
                  ? '/images/Cointrade.png'
                  : '/images/Cointrade.png'
              }
              width={36}
              height={36}
              alt=""
            />
          </Link>
          <button className="group inline-flex items-center justify-between md:hidden">
          {/* <ConnectWallet/> */}
            {/* <button
              className="btn-primary md:hidden ml-3"
              onClick={() => setVisibleModalTrade(true)}
            >
              Trade
            </button> */}
          </button>
          
          <div className="ml-auto flex items-center space-x-6">
          {/* <Notifications /> */}
          <button
              className="group h-12 w-12 outline-none md:h-8 md:w-8"
              onClick={() => setVisibleModalSearch(true)}
            >
              <Icon
                className="fill-theme-secondary transition-colors group-hover:fill-theme-primary"
                name="search"
              />
            </button>
          <ConnectWallet className='sm:hidden'/>
  
       
  
           
          
            <button
              className={`hidden rounded-full transition-shadow md:block ${
                showMenu ? 'shadow-[0_0_0_0.125rem_#0C68E9]' : ''
              }`}
              onClick={onClickBurger}
            >
               <Icon
                className="fill-theme-secondary transition-colors group-hover:fill-theme-primary ui-open:fill-theme-primary"
                 name="menu"
                />
            </button>
            {/* <User className="md:hidden" /> */}
          </div>
        </div>
      </div>
      <Modal
        classWrap="max-w-[40rem] !p-0 rounded-3xl overflow-hidden"
        visible={visibleModalSearch}
        onClose={() => setVisibleModalSearch(false)}
      >
        <Search />
      </Modal>
      <Modal
        classWrap="p-8 md:!px-4 md:!py-6"
        visible={visibleModalTrade}
        onClose={() => setVisibleModalTrade(false)}
      >
        <Trade />
      </Modal>
    </>
  );
};

export default Header;
