/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken-Grotesk','sans-serif']
      },
      colors:{
         'Light-red':'hsl(0, 100%, 67%)',
         'Light-red-alpha':'hsla(0, 100%, 67%,0.3)',
         'Orangey-yellow': 'hsl(39, 100%, 56%)',
         'Orangey-yellow-alpha': 'hsl(39, 100%, 56%,0.1)',
         'Green-teal': 'hsl(166, 100%, 37%)',
         'Green-teal-alpha': 'hsl(166, 100%, 37%,0.1)',
         'Cobalt-blue': 'hsl(234, 85%, 45%)',
         'Cobalt-blue-alpha': 'hsl(234, 85%, 45%,0.1)',

         'Light-slate-blue' : 'hsl(252, 100%, 67%)',
         'Light-royal-blue': 'hsl(241, 81%, 54%)',

         'Violet-blue': 'hsla(256, 72%, 46%, 1)',
         'Persian-blue': 'hsla(241, 72%, 46%, 0)',
         
         'White': 'hsl(0, 0%, 100%)',
         'Pale-blue': 'hsl(221, 100%, 96%)',
         'Light-lavender':' hsl(241, 100%, 89%)',
         'Dark-gray-blue': 'hsl(224, 30%, 27%)'
      }
    },
  },
  plugins: [],
  
}

