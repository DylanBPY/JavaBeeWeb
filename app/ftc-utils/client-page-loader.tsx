'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

export default function ClientPageLoader({ componentNames }: { componentNames: string[] }) {
    const [active, setActive] = useState<string | null>(null);

    if (componentNames.length === 0) {
        return <div className="text-center text-muted-foreground mt-8">There was an error loading utilities, please let us know on the Discord!</div>;
    }

    const ActiveComponent = active ? dynamic(() => import(`./pages/${active}.tsx`), {
        loading: () => <div className="text-center p-4">Loading function...</div>,
    }) : null;

    

    /*
    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto gap-6 mt-8">
            <div className="flex flex-wrap gap-2 justify-center">
                {componentNames.map(name => (
                    <Button 
                        key={name} 
                        variant={active === name ? 'default' : 'outline'}
                        onClick={() => setActive(name)}
                        className="capitalize"
                    >
                        {name.replace(/-/g, ' ')}
                    </Button>
                ))}
            </div>
            
            <div className="p-6 border rounded-xl bg-card text-card-foreground shadow-sm min-h-[300px]">
                {ActiveComponent ? (
                    <ActiveComponent />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        Select an option above to display the utility.
                    </div>
                )}
            </div>
        </div>
    );
    */
}
