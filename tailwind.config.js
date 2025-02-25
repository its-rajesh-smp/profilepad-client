/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        inherit: "inherit",
      },
      colors: {
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        progress: "progress 1.5s linear infinite", // Infinite looping animation
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        progress: {
          "0%": { transform: "translateX(-100%)" }, // Start off-screen to the left
          "100%": { transform: "translateX(200%)" }, // Move off-screen to the right
        },
      },
      textColor: {
        primary: "#1E2022",
        secondary: "#9B9B9B",
      },
      backgroundColor: {
        secondary: "#9B9B9B",
        select: "#3266D0",
      },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
