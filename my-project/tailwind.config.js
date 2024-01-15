/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'meu-personagem': "url('assets/personagem.png')",
        'github': "url('assets/github.png')",
        'email': "url('assets/email.png')",
        'whatsapp': "url('assets/whatsapp.png')",
        'linkedin': "url('assets/perfil-linkedin.png')",
        'dispositivos': "url('assets/devices.png')",
        'sites': "url('assets/criar-site.png')",
        'javascript': "url('assets/javascript.png')",
        'html-5': "url('assets/html5.png')",
        'css-3': "url('assets/css3.png')",
        'react': "url('assets/react.png')",
        'node-js': "url('assets/node-js.png')",
      }, 
    screens:{
      'sm2': '625px',
    },
    },
  },
  plugins: [],
}