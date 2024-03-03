import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const Wrapper = ({
    className,
    children,
} : {
        className?: string
        children: ReactNode
    }) => {
    return (
        <main className={cn('flex h-full flex-1 flex-col overflow-hidden md:flex-row', className)}>
            {children}
        </main>
    )
}

export default Wrapper;