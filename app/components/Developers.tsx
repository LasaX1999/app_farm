"use client";
import React from "react";
import { AnimatedTooltip } from "..//components/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Manoj Lasantha",
    designation: "Software Engineer",
    image:
      "https://avatars.githubusercontent.com/u/94479824?v=4",
  }, 
  {
    id: 4,
    name: "Neha Silva",
    designation: "UX Designer",
    image:
      "https://avatars.githubusercontent.com/u/166594975?v=4",
  },
 
  {
    id: 2,
    name: "Software Engineer",
    designation: "Product Manager",
    image:
      "https://avatars.githubusercontent.com/u/48531182?v=4",
  },
  {
    id: 3,
    name: "Ama Jayasekara",
    designation: "UX Designer",
    image:
      "https://avatars.githubusercontent.com/u/68807624?v=4",
  },
 
 
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mt-4 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
