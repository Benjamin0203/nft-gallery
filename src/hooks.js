import { Nft } from '@ankr.com/ankr.js/dist/types';
import { useEffect, useState } from 'react';
import { getNfts } from "./utils";

export const useNfts = (address) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNfts = async () => {
      setError(null);
      setLoading(true);
      try {
        const { nfts } = await getNfts(address);
        setNfts(nfts);
      } catch (e) {
        setNfts([]);
        setError(e);
      }
      setLoading(false);
    };
    fetchNfts();
  }, [address]);

  return { nfts, loading, error };
};