import { useAppKit, useAppKitAccount, useAppKitNetwork,  } from '@reown/appkit/react';
import { mainnet, arbitrum, bsc } from '@reown/appkit/networks'
import { appkitModal } from 'appkitContext';

export default function ConnectWallet({ className = '', ...props }) {
 const { address } = useAppKitAccount();
 const { chainId  } = useAppKitNetwork()
  const { open, close } = useAppKit();

  const TrimWallet=(wallet:string)=>{
    const a = wallet.slice(0,5)
    const b = wallet.slice(37)
    return a + "...." + b
  }

  const handleNetworkLable =()=>{
    if(Number(chainId) === Number(mainnet.id)){
        return mainnet.nativeCurrency.symbol
    }
    else if (Number(chainId) === Number(arbitrum.id)){
        return mainnet.nativeCurrency.symbol
    }
    else if (Number(chainId) === Number(bsc.id)){
        return mainnet.nativeCurrency.symbol
    }
    else {
        return 'NAN'
    }
  }
  return (
    <>
      {!address ? <button  className={`btn-primary cursor-pointer ${className}`}    {...props} onClick={() => appkitModal.open()}>
        Connect Wallet
      </button> : 
        <div className={`btn-primary flex-row gap-2 cursor-pointer ${className}`} onClick={() => appkitModal.open()} >
               <span>{handleNetworkLable()}</span>
            <span>{TrimWallet(address)}</span>
        </div>
      }
    </>
  );
}



export function ConnectWalletMoblie({ className = '', ...props }) {
  const { address } = useAppKitAccount();
  const { chainId  } = useAppKitNetwork()
   const { open, close } = useAppKit();
 
   const TrimWallet=(wallet:string)=>{
     const a = wallet.slice(0,5)
     const b = wallet.slice(37)
     return a + "...." + b
   }
 
   const handleNetworkLable =()=>{
     if(Number(chainId) === Number(mainnet.id)){
         return mainnet.nativeCurrency.symbol
     }
     else if (Number(chainId) === Number(arbitrum.id)){
         return mainnet.nativeCurrency.symbol
     }
     else if (Number(chainId) === Number(bsc.id)){
         return mainnet.nativeCurrency.symbol
     }
     else {
         return 'NAN'
     }
   }
   return (
     <>
       {!address ? <button  className={`btn-primary ${className}`}    {...props} onClick={() => appkitModal.open()}>
         Connect Wallet
       </button> : 
         <div   className={`btn-primary flex-row gap-2 ${className}`} onClick={() => appkitModal.open()} >
                <span>{handleNetworkLable()}</span>
             <span>{TrimWallet(address)}</span>
         </div>
       }
     </>
   );
 }
