import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import { Erc20Contract } from './Erc20Contract'
import erc20AbiJson from './abi/Erc20.json'
import { WethContract } from './WethContract'
import wethAbiJson from './abi/Weth.json'
import { TcrContract } from './TcrContract'
import tcrAbiJson from './abi/Tcr.json'

export * from './types'
export * from './Erc20Contract'
export * from './WethContract'
export * from './TcrContract'

export const erc20Abi = erc20AbiJson as AbiItem[]
export const wethAbi = wethAbiJson as AbiItem[]
export const tcrAbi = tcrAbiJson as AbiItem[]

export function createErc20Contract(web3: Web3, address?: string): Erc20Contract {
  // FIXME: There's an issue with this conversion: https://github.com/gnosis/dex-telegram/issues/14
  const unknownContract = new web3.eth.Contract(erc20Abi, address) as any
  return unknownContract as Erc20Contract
}

export function createWrapEtherContract(web3: Web3, address?: string): WethContract {
  // FIXME: There's an issue with this conversion: https://github.com/gnosis/dex-telegram/issues/14
  const unknownContract = new web3.eth.Contract(wethAbi, address) as any
  return unknownContract as WethContract
}

export function createTcrContract(web3: Web3, address?: string): TcrContract {
  // FIXME: There's an issue with this conversion: https://github.com/gnosis/dex-telegram/issues/14
  const unknownContract = new web3.eth.Contract(tcrAbi, address) as any
  return unknownContract as TcrContract
}
