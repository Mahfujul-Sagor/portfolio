"use client";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">

      <div className="w-full">
        <Hero />
        <Work />
      </div>
      <div className="w-full min-h-screen"></div>
    </main>
  );
}
