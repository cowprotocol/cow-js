import { createErc20Contract } from '../../src/contracts'
import { web3 } from './web3'

export const erc20Contract = createErc20Contract(web3)
