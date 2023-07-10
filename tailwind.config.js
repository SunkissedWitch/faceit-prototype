/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-black': '#101010',
        'secondary-text': '#888'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#03A473",
          "primary-content": "#363636",
          "secondary": "#888",
          "secondary-focus": "#363636",
          "accent": "#038f00",
          "accent-content": "#000",
          "neutral": "#E0E0E0",
          "base-100": "#fff",
          "base-content": "#363636"
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
            "primary": "#03A473",
            "primary-content": "#fff",
            "secondary": "#888",
            "secondary-focus": "#eee",
            "accent": "#038f00",
            "accent-content": "#fff",
            "neutral": "#232323",
            "base-100": "#101010",
            "base-content": "#888"
        },
      },
    ],
    darkTheme: "dark",
  },
}
