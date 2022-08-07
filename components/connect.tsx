// import  providers from '@ethersproject/providers'
import { providers } from 'ethers'
// import Head from 'next/head'
import { useCallback, useEffect} from 'react'
import Web3Modal from 'web3modal'
import {
  getChainData,
} from '../lib/utilities'
import { networkParams } from '../lib/chains'
import { useDappContext } from '../lib/context'
import { providerOptions } from '../lib/modelProvider'


let web3Modal: Web3Modal
if (typeof window !== 'undefined') {
  try {
    web3Modal = new Web3Modal({
      // network: 'mainnet', // optional
      cacheProvider: true,
      disableInjectedProvider: false,
      // providerOptions // required
      providerOptions

    })
  } catch (err) {
    console.log(err)
  }
}

export const ConnectWButton = (): JSX.Element => {
  const { state, dispatch } = useDappContext()
  
  const { provider, isChainSupported } = state

  const connect = useCallback(async function () {
    try {
      const provider = await web3Modal.connect()
      const web3Provider = new providers.Web3Provider(provider)
      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()
      const network = await web3Provider.getNetwork()
      const chainData = getChainData(network.chainId)
      if (chainData?.chain_id === network.chainId) {
        const isChainSupported = true
      } else {
        const isChainSupported = false
      }

      dispatch({
        type: 'SET_WEB3_PROVIDER',
        provider,
        web3Provider,
        address,
        chainId: network.chainId,
        isChainSupported: isChainSupported
      })
    } catch (err) {
      console.log(err)
    }
  }, [])



  // Auto connect to the cached provider
  useEffect(() => {
    
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])



  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      try {
        const handleAccountsChanged = (accounts: string[]) => {
          dispatch({
            type: 'SET_ADDRESS',
            address: accounts[0]
          })
        }

        provider.on('accountsChanged', handleAccountsChanged)

        // Subscription Cleanup
        return () => {
          if (provider.removeListener) {
            provider.removeListener('accountsChanged', handleAccountsChanged)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }, [])


  return (
       <button type="button" onClick = {connect} className="mr-2 mb-2 inline-flex items-center rounded-lg border border-gray-200  px-5 py-2 text-center text-sm font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 ">
        Connect Wallet
       </button>
  )
}

export const DisConnectWButton = (): JSX.Element => {
  const { state, dispatch } = useDappContext()
  const { provider, web3Provider, address, chainId, isChainSupported } = state

  const disconnect = useCallback(
    async function () {
      try {
        await web3Modal.clearCachedProvider()
        if (provider?.disconnect && typeof provider.disconnect === 'function') {
          await provider.disconnect()
        }
        dispatch({
          type: 'RESET_WEB3_PROVIDER'
        })
      } catch (err) {
        console.log(err)
      }
    },
    [provider]
  )

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      try {
        const handleDisconnect = (error: { code: number; message: string }) => {
          // eslint-disable-next-line no-console
          console.log('disconnect', error)
          disconnect()
        }
        provider.on('disconnect', handleDisconnect)
        // Subscription Cleanup
        return () => {
          if (provider.removeListener) {
            provider.removeListener('disconnect', handleDisconnect)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }, [provider, disconnect])

  return (
      <>
        {web3Provider ? (
          <button className=" mx-1" onClick={disconnect}>
            Disconnect
          </button>
        ) : (<></>
        )}
      </>
  )
}


// export const DisConnectAddress = (): JSX.Element => {
//   const { state, dispatch } = useDappContext()
//   const { provider, web3Provider, address, chainId, isChainSupported } = state

//   const disconnect = useCallback(
//     async function () {
//       try {
//         await web3Modal.clearCachedProvider()
//         if (provider?.disconnect && typeof provider.disconnect === 'function') {
//           await provider.disconnect()
//         }
//         dispatch({
//           type: 'RESET_WEB3_PROVIDER'
//         })
//       } catch (err) {
//         console.log(err)
//       }
//     },
//     [provider]
//   )

//   useEffect(() => {
//     if (provider?.on) {
//       try {
//         const handleDisconnect = (error: { code: number; message: string }) => {
//           // eslint-disable-next-line no-console
//           console.log('disconnect', error)
//           disconnect()
//         }
//         provider.on('disconnect', handleDisconnect)
//         // Subscription Cleanup
//         return () => {
//           if (provider.removeListener) {
//             provider.removeListener('disconnect', handleDisconnect)
//           }
//         }
//       } catch (err) {
//         console.log(err)
//       }
//     }
//   }, [provider, disconnect])

//   return (
//       <>
//         {web3Provider ? (
//            DropDownMenu(ellipseAddress(address),disconnect)
//           //  ellipseAddress(address)
//         ) : (<></> )}
//       </>
//   )
// }

export const ChainName = (): JSX.Element => {
  const { state } = useDappContext()
  const {  web3Provider, chainId } = state
  
  const chainData = getChainData(chainId)

  return (
      <>
        {web3Provider ? (
          chainData?.name
        ) : (
          <>Un-Supported</>
        )}
      </>
  )
}

export const PageObserver = (): JSX.Element => {
  const { state, dispatch } = useDappContext()
  const { provider, web3Provider, address, chainId, isChainSupported } = state
  

  const connect = useCallback(async function () {
    try {
      const provider = await web3Modal.connect()
      const web3Provider = new providers.Web3Provider(provider)
      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()
      const network = await web3Provider.getNetwork()
      dispatch({
        type: 'SET_WEB3_PROVIDER',
        provider,
        web3Provider,
        address,
        chainId: network.chainId,
        isChainSupported: false //isChainSupported
      })
    } catch (err) {
      console.log(err)
    }
  }, [])
  const disconnect = useCallback(
    async function () {
      try {
        await web3Modal.clearCachedProvider()
        if (provider?.disconnect && typeof provider.disconnect === 'function') {
          await provider.disconnect()
        }
        dispatch({
          type: 'RESET_WEB3_PROVIDER'
        })
      } catch (err) {
        console.log(err)
      }
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])



  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      try {
        const handleAccountsChanged = (accounts: string[]) => {
          // eslint-disable-next-line no-console
          console.log('accountsChanged', accounts)
          dispatch({
            type: 'SET_ADDRESS',
            address: accounts[0]
          })
        }

        // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
        const handleChainChanged = (_hexChainId: string) => {
          if (_hexChainId != chainId?.toString()) {
            window.location.reload()
          }
        }

        const handleDisconnect = (error: { code: number; message: string }) => {
          // eslint-disable-next-line no-console
          console.log('disconnect', error)
          disconnect()
        }

        provider.on('accountsChanged', handleAccountsChanged)
        provider.on('chainChanged', handleChainChanged)
        provider.on('disconnect', handleDisconnect)

        // Subscription Cleanup
        return () => {
          if (provider.removeListener) {
            provider.removeListener('accountsChanged', handleAccountsChanged)
            provider.removeListener('chainChanged', handleChainChanged)
            provider.removeListener('disconnect', handleDisconnect)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }, [provider, disconnect])

  return (
      <>
{/* this returns nothing on the page. justs sits to observe for events */}
      </>
  )
}

export const SwitchNetwork = (): JSX.Element => {
  const { state, dispatch } = useDappContext()
  const { provider, web3Provider, address, chainId, isChainSupported } = state

  const switchNetwork = async () => {
    try {
      // console.log('chain id=', chainId)
      if (chainId?.toString() !== '0x1') {
        await web3Provider.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }]
        })
      }
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        try {
          await web3Provider.provider.request({
            method: 'wallet_addEthereumChain',
            params: [networkParams['0x1']]
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  return (
      <>
        {web3Provider ? (
          <button className="button" type="button" onClick={switchNetwork}>
            Switch to Ethereum
          </button>
        ) : (
          <></>
        )}
      </>
  )
}
