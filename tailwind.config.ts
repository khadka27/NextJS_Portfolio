import type { Config } from "tailwindcss";

// Define the type for colors object
type ColorsObject = {
  [key: string]: string | string[] | ColorsObject;
};

// Function to flatten color palette
function flattenColorPalette(colors: ColorsObject): { [key: string]: string } {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      return { ...acc, [key]: value };
    }
    if (Array.isArray(value)) {
      // Assuming the first item in the array is the actual color value
      return { ...acc, [key]: value[0] };
    }
    // Recursively flatten nested objects
    return { ...acc, ...flattenColorPalette(value as ColorsObject) };
  }, {});
}

// Function to add CSS variables for colors
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/tailwind.css", // Add this line if needed
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
