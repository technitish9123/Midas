import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Montserrat", "Poppins"],
      },
      colors: {
        primary: {
          "LightSKY": "#DCDCDC",
          "LightLavender": "#DBCCF3",
          "LightDandelion": "#D0DBFF",
          "LightForest": "#C3E4CD",
          "LightAzalea": "#F5D4D2",
          "LIGHTSUNFLOWER": "#FFEBB8"
        },
        secondary: {
          "DarkSky": "#464646",
          "DarkForest": "#3D4B41",
          "DarkLavender": "#565467",
          "DarkDandelion": "#474B57",
          "BLACKWOOD": "#272E29",
          "DarkAzalea": "#5A4E4C"


        }

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
