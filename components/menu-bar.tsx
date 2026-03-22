'use client';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Discord, Github } from "@/components/media-buttons";

interface MenuBarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function MenuBar({ currentTab, onTabChange }: MenuBarProps) {

  return (
    <div className="w-full h-16 border-b flex items-center justify-between px-6 bg-background shrink-0">
        {/* Logo and Title */}
        <div className="flex flex-1 items-center gap-3 font-bold text-lg">
            {/* <img src="/logo.png" alt="JavaBee Logo" width={40} height={40} className="rounded-md" /> */}
            <div className="rounded-md bg-black w-10 h-10 flex items-center justify-center">
                <p className="text-xs">Logo</p>
            </div>

            <span className="text-primary">JavaBee Utilities</span>
        </div>

      <Tabs value={currentTab} onValueChange={onTabChange}>
        <TabsList variant="line">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="ftc-utils">General FTC Utilities</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
        </TabsList>
        </Tabs>

      <div className="flex flex-1 items-center justify-end space-x-4">
        <Discord />
        <Github />
      </div>
    </div>
  );
}