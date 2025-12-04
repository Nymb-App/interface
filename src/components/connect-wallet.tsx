import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'


export function ConnectButton({ className }: { className?: string }) {
    const address = useTonAddress()
    const { open } = useTonConnectModal()

    if(address.length > 0) {
        const shortAddress =
            address.length > 10
            ? `${address.slice(0, 5)}...${address.slice(-5)}`
            : address;
        return (
            <Button
                className={cn(
                    'font-pixel text-sm bg-linear-to-b rounded-none cursor-pointer from-[#ADFA4B] to-[#B6FF00] text-[#121312] active:from-[#73a531] active:to-[#689100] disabled:from-[#73a531] disabled:to-[#689100] disabled:cursor-not-allowed',
                    className,
                )}
            >
                {shortAddress}
            </Button>
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
