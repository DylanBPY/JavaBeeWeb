import { Construction } from 'lucide-react';

export default function FTCUtilities() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <Construction className="size-20 text-muted-foreground" />
            <h1 className="text-3xl font-bold">General FTC Utilities</h1>
            <p className="text-md text-muted-foreground">This page will hold useful utilities like pulley/belt calculators, CAD libraries, resources, etc.</p>
        </div>
    )
}