import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isDesktop = useMediaQuery({
    query: '(max-width: 1259px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    setVisible(isMobile || !isDesktop);
  }, [isMobile, isDesktop]);

  return (
    <div
      className={`min-h-screen ${
        visible ? 'pl-[21.25rem] 2xl:pl-76 xl:pl-20 md:pl-0' : 'pl-20 md:pl-0'
      }`}
    >
      <Sidebar
        className={`md:transition-transform ${
          showMenu ? 'md:translate-x-0' : 'md:-translate-x-full'
        }`}
        visible={visible}
        onClick={() => setVisible(!visible)}
      />
      <div className="">
        <div className="mx-auto max-w-[80rem] px-10 pb-10 pt-24 lg:px-6 md:px-4 md:pb-8 md:pt-20">
          <Header
            visible={visible}
            title={title}
            onClickBurger={() => setShowMenu(!showMenu)}
            showMenu={showMenu}
          />
          {/* {title && (
            <div className="text-h5 mb-2 hidden h-16 items-center rounded-2xl bg-theme-on-surface-1 px-4 md:flex">
              {title}
            </div>
          )} */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
