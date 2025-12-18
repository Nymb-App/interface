import { useApi } from './use-api'

type NFTType = 'nft' | 'nft_n1' | 'nft_n2' | 'nft_n3';

export const useMint = () => {
  const { post } = useApi()

  const mint = async (
    transactionHash: string,
    nftType: NFTType = 'nft',
  ) => {
    const response = await post(`/nft/mint_in_collection/${transactionHash}/${nftType}`)
    return response
  }

  return {
    mint,
  }
}
