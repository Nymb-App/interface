import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const queryClient = new QueryClient()
export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <TonConnectUIProvider manifestUrl="https://nymb.app/tonconnect-manifest.json">
                {children}
            </TonConnectUIProvider>
        </QueryClientProvider>
    )
}
