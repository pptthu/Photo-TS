/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //  BẢNG MÀU
      colors: {
        brand: {
          pink: '#FFB7C5',      // màu chủ đạo
          darkPink: '#F48FB1',   // màu nhấn
          deepPink: '#C2185B',  // màu chữ tiêu đề
          sky: '#87CEEB',       
          grass: '#A2D149',     
          cream: '#FFFBF0',     
          light: '#FFF0F5',     
        }
      },
      
      //  FONT CHỮ
      fontFamily: {
        hand: ['"Patrick Hand"', 'cursive'],  // viết tay sticker
        sans: ['"Nunito"', 'sans-serif'], // font chính UI
      },

      //  KÍCH THƯỚC (SPACING / WIDTH / HEIGHT)
      spacing: {
        'safe-top': '8rem',     // pt-32, kc cho header
      },
      
      width: {
        'booth-card': '340px',  // Khung thẻ ở Home khung booth
        'strip': '160px',       // Dải ảnh in 
      },

      height: {
        'booth-card': '450px',  
      },
      borderRadius: {
        'booth': '3rem',      // bo góc   
      },

      // 4. ANIMATION
      animation: {    
        'spin-slow': 'spin 8s linear infinite',     // hoa     
        'bounce-slow': 'bounce 3s infinite',     // load trang          
        'fade-in': 'fadeIn 0.5s ease-out',               
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, // dưới lên + mờ 
          '100%': { opacity: '1', transform: 'translateY(0)' }, // hiện rõ
        }
      }
    },
  },
  plugins: [],
}