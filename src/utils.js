import {AnkrProvider} from '@ankr.com/ankr.js';

const provider = new AnkrProvider(' ');

export const getNfts = async (address) => {
  const { assets } = await provider.getNFTsByOwner({
    walletAddress: address,
    blockchain: ['eth', 'polygon', 'bsc'],
  });
  return {
    nfts: assets,
  };
};
