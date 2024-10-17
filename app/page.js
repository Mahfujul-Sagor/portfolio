"use client";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { useEffect, useRef } from "react";

export default function Home() {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const colors = [
      "#a0c4ff",
      "#9bb8ff",
      "#96adff",
      "#90a1ff",
      "#8b96ff",
      "#8691ff",
      "#808aff",
      "#7b84ff",
      "#767dff",
      "#7177ff",
      "#6c70ff",
      "#666aff",
      "#6163ff",
      "#5b5dff",
      "#5656ff",
      "#504fff",
      "#4b49ff",
      "#4642ff",
      "#403cff",
      "#3b35ff",
      "#362fff",
      "#3028ff",
      "#2b22ff",
      "#261bff",
      "#2015ff",
      "#1b0eff",
      "#1507ff",
      "#1000ff",
      "#0e00f2",
      "#0d00e5",
      "#0b00d9",
      "#0a00cc",
      "#0800bf",
      "#0700b3",
      "#0500a6",
      "#040099",
      "#03008c",
      "#020080",
      "#010073",
      "#000066",
    ];

    const circles = circlesRef.current;

    // Initialize circle positions and colors
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    // Update cursor coordinates on mousemove
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        // Positioning the circles
        circle.style.left = `${x - 10}px`;
        circle.style.top = `${y - 10}px`;

        // Scaling based on index
        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        circle.x = x;
        circle.y = y;

        // Get the next circle's position to calculate smooth trailing
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
      });

      requestAnimationFrame(animateCircles);
    };

    // Start the animation loop
    animateCircles();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full">
      {/* Circles */}
      {Array(40)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => (circlesRef.current[index] = el)}
            className="circle fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[99999999] hidden lg:flex"
          />
        ))}

      <div className="relative min-h-screen w-full">
        <Hero />
        {/* <Work /> */}
      </div>
      <Skills />
    </main>
  );
}
