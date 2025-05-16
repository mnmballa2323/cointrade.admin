import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import NavLink from './NavLink';

type UserProps = {
  className?: string;
};

const User = ({ className }: UserProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <Menu className={`relative ${className || ''}`} as="div">
      <MenuButton className="group h-12 w-12">
        <Image
          className="h-12 w-12 rounded-full object-cover opacity-100"
          src="/images/avatar.jpg"
          width={48}
          height={48}
          alt=""
        />
      </MenuButton>
      <Transition
        enter="duration-200 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <MenuItems
          className="absolute -right-4 top-full mt-2 w-[19.75rem] rounded-2xl border border-theme-stroke bg-theme-surface-pure p-3 shadow-depth-1 lg:right-0"
          modal={false}
        >
          <div className="mb-2 flex items-center rounded-xl bg-theme-n-8 p-3">
            <div className="">
              <Image
                className="h-16 w-16 rounded-full opacity-100"
                src="/images/avatar.jpg"
                width={64}
                height={64}
                alt=""
              />
            </div>
            <div className="grow pl-4.5">
              <div className="text-title-1s">Display Name</div>
              <div className="text-body-1m text-theme-secondary">@username</div>
            </div>
          </div>
          <div className="mb-2 space-y-1">
            <NavLink title="Plans" icon="wallet" url="/pricing" />
            <NavLink title="Settings" icon="settings" url="/settings" />
          </div>
          <NavLink title="Log out" icon="logout" url="/sign-up" />
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default User;
