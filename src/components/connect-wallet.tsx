import { useTonAddress, useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { FaRegCopy } from "react-icons/fa";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useBalance } from '@/hooks/use-balance';

export function ConnectButton({ className }: { className?: string }) {
    const address = useTonAddress()
    const { balance, balanceInUsd } = useBalance()
    const { open } = useTonConnectModal()
    const [tonconnectUI] = useTonConnectUI()

    if (address.length > 0) {
        const shortAddress =
            address.length > 10
                ? `${address.slice(0, 5)}...${address.slice(-5)}`
                : address;

        const copyAddress = async () => {
            await navigator.clipboard.writeText(address);
        };

        const formatedBalance = () => {
            if (!balance) return 0;
            if (balance < 0.01) return 0.01;
            return parseFloat(balance.toFixed(2));
        }

        const formatedBalanceInUsd = () => {
            if (!balanceInUsd) return 0;
            if (balanceInUsd < 0.01) return 0.01;
            return parseFloat(balanceInUsd.toFixed(2));
        }
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        className={cn(
                            'font-pixel text-sm bg-linear-to-b rounded-none cursor-pointer from-[#ADFA4B] to-[#B6FF00] text-[#121312] active:from-[#73a531] active:to-[#689100] disabled:from-[#73a531] disabled:to-[#689100] disabled:cursor-not-allowed',
                            className,
                        )}
                    >
                        {shortAddress}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="rounded-none border-2 border-foreground bg-[#070707]"
                >
                    <DropdownMenuItem
                        onClick={copyAddress}
                        className="cursor-pointer font-pixel text-white hover:bg-[#070707]! hover:text-white! text-sm"
                    >
                        {formatedBalance()} TON ~ {formatedBalanceInUsd()} USD
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='' />

                    <DropdownMenuItem
                        onClick={copyAddress}
                        className="cursor-pointer font-pixel text-white hover:bg-[#070707]! hover:text-white! text-sm"
                    >
                        <FaRegCopy className="text-white " /> COPY ADDRESS
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className='' />

                    <DropdownMenuItem
                        onClick={async () => await tonconnectUI.disconnect()}
                        className="cursor-pointer font-pixel text-red-500 hover:bg-[#070707]! hover:text-red-500! text-sm"
                    >
                        <VscDebugDisconnect className="text-red-500" /> DISCONNECT
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <Button
            disabled={address.length > 0}
            onClick={open}
            className={cn(
                'font-pixel text-sm bg-linear-to-b rounded-none cursor-pointer from-[#ADFA4B] to-[#B6FF00] text-[#121312] active:from-[#73a531] active:to-[#689100] disabled:from-[#73a531] disabled:to-[#689100] disabled:cursor-not-allowed',
                className,
            )}
        >
            CONNECT
        </Button>
    )
}
