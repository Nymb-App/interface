import { useTonAddress } from "@tonconnect/ui-react";
import { useCallback, useEffect, useState } from "react";
import TonWeb from 'tonweb';


const apiKey = '500d5f18a2d043083498831e72f2ae65d81428990fb622c64f5d661e14f4bcbc';
const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {
    apiKey,
}));

export const useBalance = () => {
    const address = useTonAddress();
    const [balance, setBalance] = useState<number | undefined>(undefined);
    const [balanceInUsd, setBalanceInUsd] = useState<number | undefined>(undefined);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const getBalance = useCallback(async () => {
        if (!address) return;

        setLoading(true);
        try {
            const balance = await tonweb.provider.getBalance(address);
            return balance;
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [address]);

    useEffect(() => {
        if (!address) return;

        const fetchPrice = async (amountTon: number) => {
            const res = await fetch(
                "https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd"
            );
            if (!res.ok) {
                throw new Error("Failed to fetch TON price");
            }

            const data = await res.json();
            const tonPrice = data["the-open-network"]?.usd;

            if (typeof tonPrice !== "number") {
                throw new Error("Invalid TON price");
            }

            return amountTon * tonPrice;
        };

        (async () => {
            try {
                const balance = await getBalance();
                if (balance !== undefined) {
                    const fBal = parseFloat(TonWeb.utils.fromNano(balance));
                    const balanceInUsd = await fetchPrice(fBal);
                    setBalanceInUsd(balanceInUsd);
                    setBalance(fBal);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [address, getBalance]);

    return { balance, balanceInUsd, isLoading, isError, getBalance };
}
