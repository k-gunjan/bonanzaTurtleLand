import { supportedChains, unknownChains } from './chains'
import { IChainData } from './types'
const { utils, BigNumber } = require('ethers')

export function getChainData(chainId?: number): IChainData {
  if (!chainId) {
    // return null
    return unknownChains[0]
  }
  const chainData = supportedChains.filter(
    (chain: any) => chain.chain_id === chainId
  )[0]

  if (!chainData) {
    return unknownChains[0]
    //call switch network
    // throw new Error('ChainId missing or not supported for')
  }

  const API_KEY = '27e484dcd9e3efcfd25a83a78777cdf1' //'460f40a260564ac4a4f4b3fffb032dad'

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY)

    return {
      ...chainData,
      rpc_url: rpcUrl
    }
  }

  return chainData
}

export function ellipseAddress(address = '', width = 10): string {
  if (!address) {
    return ''
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export const truncateAddress = (address: string) => {
  if (!address) return 'No Account'
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  )
  if (!match) return address
  return `${match[1]}…${match[2]}`
}

export const toHex = (num: number) => {
  const val = Number(num)
  return '0x' + val.toString(16)
}
export const toEthFromBalance = (num: number, decmls = 4) => {
  // const value = BigNumber.from('1000000000000000000')
  // ethers.utils.formatEther(value)
  // '1.0'
  try {
    const weiValue = BigNumber.from(num)
    let ethBalnumber: number = utils.formatEther(weiValue)
    let ethBalvalue: string = (+ethBalnumber.toString()).toFixed(decmls)
    return utils.commify(ethBalvalue)
  } catch (err) {
    console.log(err)
    return null
  }
}
