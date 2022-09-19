/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      //Height
      height: {
        'screen-navbar-player': 'calc(100vh - 12rem)'
      },
      // Breakpoints
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      // Color
      colors: {
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "purple-500": "#6B49CD",
        "purple-700": "#5D0096",
        "purple-900": "#210035",
        "pink-500": "#AD26FF",
        "green-var": "#54b192",
        "green-l-var": "#a4cec0",
        "gray-var": "#3f3d56",

        "primary": '#202225',
        "secondary": '#5865f2',
        // !OVERRIDE  gray : {900: '#3f3d56', 800: '#5d5d5d', 700: '#8e8e8e', 600: '#b3b3b3', 500: '#d9d9d9', 400: '#ebebeb', 300: '#f5f5f5', 200: '#fafafa', 100: '#fcfcfc'},
      },
      // fontSize
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      // boxShadow
      boxShadow: {
        "md": "6px 6px 16px 0 rgba(0,0,0,0.25), -4px -4px 12px 0 rgba(255,255,255,0.3)"
      },
      // keyframe
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      // animation
      animation: {
        rotate: 'rotate 4s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      // background image
      backgroundImage: {
        'banner-landingpage2': "url('./landing-page-2/img/banner.png')",
        'download-landingpage2': "url('./landing-page-2/img/download.png')",
      }
    },
  },
  plugins: [],
}
