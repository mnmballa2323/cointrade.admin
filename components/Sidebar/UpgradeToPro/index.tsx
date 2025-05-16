import Image from '@/components/Image';
import Icon from '@/components/Icon';
import { useState } from 'react';

type UpgradeToProProps = {};

const UpgradeToPro = ({}: UpgradeToProProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  return visible ? (
    <div className="mt-4 shrink-0 overflow-hidden rounded-2xl bg-theme-on-surface-2 md:hidden">
      <div className="relative">
        <Image
          className="h-32 w-full object-cover opacity-100"
          src="/images/bg-upgrade.jpg"
          width={292}
          height={128}
          alt=""
        />
        <button
          className="group absolute right-2 top-2 h-6 w-6 rounded-full bg-theme-on-surface-1 text-0 transition-colors hover:bg-theme-primary"
          onClick={() => setVisible(false)}
        >
          <Icon
            className="!h-4 !w-4 fill-theme-primary transition-colors group-hover:fill-theme-on-surface-1"
            name="close"
          />
        </button>
      </div>
    </div>
  ) : null;
};

export default UpgradeToPro;
