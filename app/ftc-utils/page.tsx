'use client';

import { Construction } from 'lucide-react';
import { useEffect, useState } from 'react';
import ClientPageLoader from './client-page-loader';
import { getUtilityPages } from './actions';

export default function FTCUtilities() {
    const [componentNames, setComponentNames] = useState<string[]>([]);
    
    useEffect(() => {
        getUtilityPages().then(setComponentNames).catch(console.error);
    }, []);

    return (
        <div className="flex flex-col flex-1 p-6 h-full">
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl font-bold">General FTC Utilities</h1>
                <p className="text-md text-muted-foreground text-center">Search for or select a utility from below</p>
            </div>
            
            <ClientPageLoader componentNames={componentNames} />
        </div>
    )
}