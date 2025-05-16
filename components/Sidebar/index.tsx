import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import Image from '@/components/Image';
import Icon from '@/components/Icon';
import ToggleTheme from '@/components/ToggleTheme';
import Switch from '@/components/Switch';
import NavLink from './NavLink';
import { navigation } from '@/constants/navigation';
import { ConnectWalletMoblie } from '../ConnectWallet';
import Dvider from '../Divider';
import { useAccount } from 'wagmi';

type SidebarProps = {
  className?: string;
  visible: boolean;
  onClick: () => void;
};

const Sidebar = ({ className, visible, onClick }: SidebarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { address } = useAccount();
  const isLightMode = colorMode === 'light';

  const trimAddress = (address: string | undefined) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-7)}`;
  };

  return (
    <div
      className={`fixed bottom-0 left-0 top-0 z-20 flex flex-col bg-theme-on-surface-1 pt-24 md:pt-20 ${
        visible
          ? 'w-[20.25rem] pb-20 2xl:w-76 xl:shadow-depth-1 md:w-full md:pb-0'
          : 'w-20 pb-[9.25rem]'
      } ${className || ''}`}
    >
      <div
        className={`absolute left-0 right-0 top-0 flex h-24 items-center md:hidden ${
          visible ? 'px-7' : 'px-4'
        }`}
      >
        <Link
          className="flex h-12 w-12 items-center justify-center"
          href="/"
          onClick={onClick}
        >
          <Image
            className="w-10 opacity-100"
            src={
              colorMode === 'light'
                ? '/images/Cointrade.png'
                : '/images/Cointrade.png'
            }
            width={40}
            height={40}
            alt=""
          />
        </Link>
      </div>

      <button
        className={`group absolute h-12 w-12 md:hidden ${
          visible ? 'right-7 top-6' : 'bottom-20 left-4'
        }`}
        onClick={onClick}
      >
        <Icon
          className="fill-theme-secondary opacity-50 transition-[fill,opacity] group-hover:fill-theme-primary group-hover:opacity-100"
          name="toggle"
        />
      </button>

      {/* Sidebar Content */}
      <div
        className={`flex grow flex-col overflow-auto scroll-smooth scrollbar-none md:pb-6 ${
          visible ? 'px-6 md:px-4' : 'px-4'
        }`}
      >
        {/* User Profile Section */}
        {/* <Link href={`/user/${address}`} className="flex items-center">
          <div className="mb-4 mt-4 flex content-center items-center justify-between space-x-4">
            <Image
              src={'/images/user.png'}
              width={45}
              height={45}
              className="cursor-pointer rounded-full"
              alt="User Profile"
            />
            <div className="flex cursor-pointer flex-col items-end">
              <span
                className={`text-sm font-semibold ${visible ? '' : 'hidden'}`}
              >
                yourEmailAddress@gmail.com
              </span>
              <span
                className={`text-sm font-semibold ${visible ? '' : 'hidden'}`}
              >
                {trimAddress(address)}
            
              </span>
            </div>
          </div>
        </Link> */}

        {/* Divider */}
        <Dvider />

        {/* Navigation Links */}
        <div className="mb-auto mt-4 flex flex-col space-y-2">
          {navigation.map(link => (
            <NavLink
              title={link.title}
              icon={link.icon}
              imageurl={''}
              url={link.url}
              key={link.id}
              visible={visible}
            />
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-6 hidden flex-col space-y-1 border-t border-theme-stroke pt-4 md:flex">
          <div className="w-full">
            <ConnectWalletMoblie className="w-full" />
          </div>
          <div className="group flex h-12 items-center rounded-xl px-4 transition-colors hover:bg-theme-on-surface-2 md:hover:bg-transparent">
            <Icon
              className="mr-4 shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary md:group-hover:fill-theme-secondary"
              name={isLightMode ? 'moon' : 'sun'}
            />
            <div className="text-base-1s mr-auto text-theme-secondary transition-colors group-hover:text-theme-primary md:group-hover:text-theme-secondary">
              {isLightMode ? 'Dark' : 'Light'}
            </div>
            <Switch value={colorMode} setValue={toggleColorMode} small theme />
          </div>
        </div>
      </div>

      {/* Bottom Toggle Theme */}
      <div
        className={`absolute bottom-0 left-0 right-0 pb-6 md:hidden ${
          visible ? 'px-6 pt-4' : 'px-4 pt-2'
        }`}
      >
        <ToggleTheme visible={visible} />
      </div>
    </div>
  );
};

export default Sidebar;
