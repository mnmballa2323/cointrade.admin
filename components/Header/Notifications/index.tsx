import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

import { notifications } from '@/mocks/notifications';

type NotificationsProps = {};

const Notifications = ({}: NotificationsProps) => {
  return (
    <Menu className="relative md:static" as="div">
      <MenuButton className="group relative h-12 w-12 md:h-8 md:w-8">
        <Icon
          className="fill-theme-secondary transition-colors group-hover:fill-theme-primary ui-open:fill-theme-primary"
          name="notification"
        />
        <div className="absolute right-2.5 top-2.5 h-3.5 w-3.5 rounded-full border-2 border-theme-n-8 bg-theme-red md:right-1 md:top-0"></div>
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
          className="absolute -right-18 top-full mt-2 w-[21.25rem] rounded-2xl border border-theme-stroke bg-theme-surface-pure shadow-depth-1 md:left-4 md:right-4 md:mt-0 md:max-h-[calc(100vh-6.4375rem)] md:w-auto md:overflow-auto md:scroll-smooth md:scrollbar-none"
          modal={false}
        >
          <div className="">
            {notifications.map(notification => (
              <div
                className="flex border-b border-theme-stroke p-4 last:border-0"
                key={notification.id}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    notification.type === 'alert'
                      ? 'bg-theme-red-100'
                      : notification.type === 'update'
                        ? 'bg-theme-green-100'
                        : 'bg-theme-brand-100'
                  }`}
                >
                  <Image
                    className="w-5 opacity-100"
                    src={
                      notification.type === 'alert'
                        ? '/images/bell-red.svg'
                        : notification.type === 'update'
                          ? '/images/number-one.svg'
                          : '/images/bell-blue.svg'
                    }
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div className="grow pl-4">
                  <div className="notification text-caption-1 text-theme-secondary">
                    {notification.content}
                  </div>
                  <div className="text-caption-2m mt-2 text-theme-secondary">
                    {notification.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4">
            <Link className="btn-secondary w-full" href="/notification">
              View all notification
            </Link>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Notifications;
