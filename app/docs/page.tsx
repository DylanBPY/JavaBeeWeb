import { Construction } from "lucide-react"

export default function Docs() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <Construction className="size-20 text-muted-foreground" />
            <h1 className="text-3xl font-bold">Documentation</h1>
            <p className="text-md text-muted-foreground">Javabee documentation is currently under construction.</p>
        </div>
    )
}