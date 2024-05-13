import type { Config } from "tailwindcss";

const multiplySpacing = (v: number, multiplier: number = 8) => `${v * multiplier}px`;
const generateSpacingIndexes = (lastIndex = 10, divider = 4) => {
  const targetLength = lastIndex * divider + 1;
  const lengthList = Array.from(Array(targetLength)); // plus 0

  return lengthList.map((_, i) => i / divider);
};
const getSpacings = (lastIndex = 10) => generateSpacingIndexes(lastIndex).reduce(
  (acc, index) => ({ ...acc, [index]: multiplySpacing(index) }),
  {},
);

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    spacing: getSpacings(12),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
export default config;
