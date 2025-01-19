import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Connection } from "@solana/web3.js";

export const network = WalletAdapterNetwork.Mainnet;
export const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/dO7TKa1xw_j5XoHLfPvI5IvKiahpQ0Q-", "confirmed");
export const host = 'https://liger.life';