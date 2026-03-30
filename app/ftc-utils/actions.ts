'use server';

import fs from 'fs';
import path from 'path';

export async function getUtilityPages() {
    const pagesDir = path.join(process.cwd(), 'app', 'ftc-utils', 'pages');
    
    let files: string[] = [];
    try {
        if (fs.existsSync(pagesDir)) {
            files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
        }
    } catch (e) {
        console.error('Error reading pages structure:', e);
    }
    
    return files.map(file => file.replace('.tsx', ''));
}
