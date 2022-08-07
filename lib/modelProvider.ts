
import WalletConnect from '@walletconnect/web3-provider'

export const providerOptions = {
  // walletlink: {
  //   package: CoinbaseWalletSDK, // Required
  //   options: {
  //     appName: 'Connect Coinbase Wallet', // Required
  //     infuraId: process.env.INFURA_ID 
  //   }
  // },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: process.env.INFURA_ID // required
    }
  }
}



