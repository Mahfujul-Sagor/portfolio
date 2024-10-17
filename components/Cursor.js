"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const colors = new Array(40).fill("#000000"); // All black color scheme

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
        // Position the circles
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
    <>
      {Array(40)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => (circlesRef.current[index] = el)}
            className="circle fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[99999999] hidden lg:flex"
          />
        ))}
    </>
  );
}
