/* eslint-disable react/jsx-no-comment-textnodes */
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Image from '@/components/Image';

type NavLinkProps = {
  title: string;
  icon: string;
  url?: any;
  onClick?: () => void;
  visible?: boolean;
  imageurl: string;
};

const NavLink = ({
  title,
  icon,
  url,
  onClick,
  visible,
  imageurl,
}: NavLinkProps) => {
  const CreatedTag = url ? Link : 'button';
  const pathname = usePathname();
  const active = pathname === url;
  const notification = url === '/notification';

  console.log('url', icon);
  return (
    <CreatedTag
      className={`group flex h-12 items-center rounded-full text-theme-secondary transition-colors hover:text-theme-primary ${
        visible ? 'px-4 md:px-5' : 'px-3'
      } ${active ? 'bg-theme-on-surface-2 !text-theme-primary' : ''}`}
      href={url}
      onClick={onClick}
    >
      <div className="relative">
        {icon != '' ? (
          <Icon
            className={`shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary ${
              active ? '!fill-theme-primary' : ''
            }`}
            name={icon}
          />
        ) : (
          ''
        )}
        {imageurl != '' ? (
          <Image
            className={`shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary ${
              active ? '!fill-theme-primary' : ''
            }`}
            src={imageurl}
            width={24}
            height={24}
            alt=""
          />
        ) : (
          ''
        )}
        {notification && (
          <div className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-theme-on-surface-1 bg-theme-red"></div>
        )}
      </div>
      <div className={`text-base-1s ml-4 ${visible ? '' : 'hidden'}`}>
        {title}
      </div>
      <Icon
        className={`ml-auto shrink-0 fill-theme-primary opacity-0 transition-opacity ${
          visible ? '' : 'hidden'
        } ${active ? 'opacity-100' : ''}`}
        name="arrow-next"
      />
    </CreatedTag>
  );
};

export default NavLink;
