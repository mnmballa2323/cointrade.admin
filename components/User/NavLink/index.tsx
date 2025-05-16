import Link from 'next/link';
import Icon from '@/components/Icon';

type NavLinkProps = {
  url: string;
  icon: string;
  title: string;
};

const NavLink = ({ url, icon, title }: NavLinkProps) => (
  <Link
    className="group text-base-1s flex h-12 items-center rounded-xl px-4 text-theme-secondary transition-colors hover:bg-theme-on-surface-2 hover:text-theme-primary"
    href={url}
  >
    <Icon
      className="mr-4 shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary"
      name={icon}
    />
    {title}
  </Link>
);

export default NavLink;
