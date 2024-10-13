"use client";
import { useEffect, useRef } from "react";
import AnimatedGradient from "@/components/AnimatedGradient/AnimatedGradient";

export default function Home() {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const colors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
      "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
      "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
      "#680060", "#60005f", "#48005f", "#3d005e",
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
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        // Scaling based on index
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        // Get the next circle's position to calculate smooth trailing
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
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
    <main className="relative">
      <AnimatedGradient>
        <p>hover to see the magic</p>
      </AnimatedGradient>
      {/* Circles */}
      {Array(20).fill().map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="circle fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[99999999]"
        />
      ))}
    </main>
  );
}
