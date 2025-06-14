import { useEffect, useState } from "react";
import theme from "tailwindcss/defaultTheme";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export function useBreakpoint(breakpoint: Breakpoint) {
  const [isLarger, setIsLarger] = useState(false);

  const convertedBreakpoints = Object.entries(theme.screens).reduce(
    (acc, [key, value]) => {
      const remValue = parseFloat(value); // Extract number from "40rem"
      acc[key] = remValue * 16; // Convert to pixels
      return acc;
    },
    {} as Record<string, number>,
  );

  useEffect(() => {
    // Function to check and update the breakpoint
    const checkBreakpoint = () => {
      setIsLarger(window.innerWidth >= convertedBreakpoints[breakpoint]);
    };

    // Set initial value
    checkBreakpoint();

    // Add event listener for window resize
    window.addEventListener("resize", checkBreakpoint);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, [breakpoint, convertedBreakpoints]);

  return isLarger;
}
