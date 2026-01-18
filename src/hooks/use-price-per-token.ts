import { useQuery } from "@tanstack/react-query";

export function usePricePerToken(ticker: string | 'the-open-network' = 'the-open-network') {
    const query = useQuery({
        queryKey: ['token-price', ticker],
        queryFn: async (): Promise<number> => {
            const res = await fetch(
                `https://api.coingecko.com/api/v3/simple/price?ids=${ticker}&vs_currencies=usd`
            );
            if (!res.ok) {
                throw new Error("Failed to fetch TON price");
            }

            const data = await res.json();
            const tokenPrice = data[ticker]?.usd;

            if (typeof tokenPrice !== "number") {
                throw new Error("Invalid TON price");
            }

            return tokenPrice;
        },
        staleTime: 3600_000,
        refetchInterval: 120_000,
        retry: 2,
    });


    const calculateUsd = (amount: number) => {
        if (!query.data) return null;
        return amount * query.data;
    };

    const calculateTokenAmount = (usdAmount: number) => {
        if (!query.data) return null;
        return usdAmount / query.data;
    }

    return {
        priceUsd: query.data,
        isLoading: query.isLoading,
        isFetching: query.isFetching,
        isError: query.isError,
        calculateUsd,
        calculateTokenAmount
    };
}