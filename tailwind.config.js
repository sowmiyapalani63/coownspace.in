/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'var(--font-family-primary)',
      },
      colors: {
        text: 'var(--text-color)',
        primaryOne: 'var(--primary-color-one)',
        primaryTwo: 'var(--primary-color-two)',
        primaryThree: 'var(--primary-color-three)',
        lightblueBg: 'var(--section-lightblue-bg)',
        customWhite: '#ffffffe6',
      },      
      spacing: {
        medium: 'var(--section-gap-medium)',
        extraLarge: 'var(--section-gap-extra-large)',
        large: 'var(--section-gap-large)',
        small: 'var(--section-gap-small)',
        extraSmall: 'var(--section-gap-extra-small)',
      },
      screens: {
        custom: '930px',
        'custom-995':'856px', 
        'custom-991': '991px', 
        'custom-1280': '1280px',
        'custom-1440': '1440px'
      },
    },
  },
  plugins: [],
};
