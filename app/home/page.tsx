"use client";
import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";

export default function Home({ setCurrentTab }: { setCurrentTab?: (tab: string) => void }) {
    return (
        <div className="relative flex flex-col w-full items-center">
            <div className="absolute top-0 left-0 right-0 h-[40vh] bg-linear-to-b from-primary/8 dark:from-primary/4 to-transparent pointer-events-none" />

            <img className="rounded-md mt-10 mb-6 block dark:hidden" width={970} height={640} src="./stacked_light.png" alt="JavaBee Logo" />
            <img className="rounded-md mt-10 mb-6 hidden dark:block" width={970} height={640} src="./stacked_dark.png" alt="JavaBee Logo" />
            <div className="w-3/8 text-center">
                <TypedHeading />
                <p className="text-lg text-muted-foreground mt-4">
                  JavaBee Utilities is a powerful library designed to simplify and enhance the programming experience for FTC teams. 
                  We are focused on providing tools for teams of all skill levels to create innovative robots. 
                  Whether you're a rookie trying to learn, or a veteran seeking to optimize, JavaBee Utilities has something to offer.
                </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
                <Button size="lg" onClick={() => setCurrentTab?.('docs')}>Get Started with JavaBee</Button>
                <Button variant="outline" size="lg" onClick={() => setCurrentTab?.('ftc-utils')}>General FTC Utilities</Button>
            </div>
        </div>
    )
}

function TypedHeading() {
  return (
    <h2 className="font-bold text-4xl tracking-tight">
      FTC Programming,&nbsp;
      <TypeIt
        options={{
          speed: 70,
          deleteSpeed: 40,
          waitUntilVisible: true,
          loop: true,
        }}
        getBeforeInit={(instance) =>
          instance
            .type("just got easier.")
            .pause(1500)
            .delete()
            .type("for rookies and veterans alike.")
            .pause(1500)
            .delete()
            .type("made powerful.")
            .pause(1500)
            .delete()
            .type("that just works.")
            .pause(1500)
            .delete()
            .type("that's repeatable.")
            .pause(1500)
            .delete()
            .type("built different.")
            .pause(1500)
            .delete()
            .type("revolutionized.")
            .pause(1500)
            .delete()
            .type("but clean.")
            .pause(1500)
            .delete()
            .type("optimized.")
            .pause(1500)
            .delete()
            .type("integrated.")
            .pause(1500)
            .delete()
            .type("elevated.")
            .pause(1500)
            .delete()
            .type("free and open-source.")
            .pause(1500)
            .delete()
        }
      />
    </h2>
  );
}
