import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
  font-family: "Montserrat", sans-serif; 
  box-sizing: border-box;
  --color-black:#010101;
  --color-white:#fefdfd;
  --color-gray:#9296af;
  --color-purple-100:#c0c7e9;
  --color-purple-200:#96a4da;
  --color-purple-300:#6b80ca;
  --color-purple-400:#4a65be;
  --color-purple-500:#224bb2;
  --color-purple-600:#1a43a9;
  --color-purple-700:#0b399d;
  --color-purple-800:#002f91;
  --color-purple-900:#001e7c;

  --color-pink-100: #cc00ff;
  --color-pink-200: #b300e6;
  --color-pink-300: #9900cc;
  --color-pink-400: #8000b3;
  --color-pink-500: #660099;
  --color-pink-600: #4d007f;
  --color-pink-700: #330066;
  --color-pink-800: #1a0033;
  --color-pink-900: #000000;

  --color-offWhite: #FAF9F6;
  --color-seaGreen: #00E0D4;
  --color-redOrange: #FF4500;

  --color-red-100: #ffcbb8;
  --color-red-200: #ffa88a;
  --color-red-300: #ff855b;
  --color-red-400: #ff6835;
  --color-red-500: #ff4a05;
  --color-red-600: #ff4400;
  --color-red-700: #f13c00;
  --color-red-800: #e33400;
  --color-red-900: #cc2200;

  --padding-wrapper: 2rem;
  @media screen and (max-width: 500px) {
    --padding-wrapper: 1rem;
  }
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;

}

body {
    background: var(--color-offwhite);
    overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  border: none;
  cursor: pointer;
}

`;
