import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, bsc } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = 'da07e79aec72cd19c8f49dd564b40a4c' // projectID


if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [bsc, mainnet, arbitrum]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig