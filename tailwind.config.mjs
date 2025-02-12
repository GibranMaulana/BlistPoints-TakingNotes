/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
     extend: {
       colors: {
 
         pri: {
           1 : "#BC6C25",
           2 : "#DDA15E",
           3 : "#FEFAE0",
           4 : "#283618",
           5 : "#606C38",
         }
       },
     },
   },
   plugins: [],
 };
 