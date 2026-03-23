"use client";
import TypeIt from "typeit-react";
import { Button } from "@/components/ui/button";

export default function Home({ setCurrentTab }: { setCurrentTab?: (tab: string) => void }) {
    return (
        <div className="relative flex flex-col w-full items-center">
            <div className="absolute top-0 left-0 right-0 h-[30vh] bg-linear-to-b from-primary/4 to-transparent pointer-events-none" />

            {/* <img className="rounded-md mt-10 mb-6" width={570} height={240} src="/banner.png" alt="JavaBee Logo" /> */}
            <div className="rounded-md mb-6 mt-10 bg-black w-142.5 h-60 flex items-center justify-center">
                <h1>Banner logo here</h1>
            </div>

            <div className="w-1/2 text-center">
                <TypedHeading />
                <p className="text-lg text-muted-foreground mt-4">
                  JavaBee Utilities is a powerful library designed to simplify and enhance the programming experience for FTC teams. 
                  With a focus on ease of use, performance, and reliability, JavaBee Utilities provides a comprehensive suite of tools and features that help teams of all skill levels create competitive and innovative robots. 
                  Whether you're a rookie looking to get started or a veteran seeking to optimize your code, JavaBee Utilities has something to offer.
                </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
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
