import React from 'react';
import { usePhotoStore } from '../store/usePhotoStore';

import flowerImg from '../assets/stickers/flower.png';
import sootImg from '../assets/stickers/soot.png';
import totoroImg from '../assets/stickers/totoro.png';
import fireImg from '../assets/stickers/fire.png';
import cat1Img from '../assets/stickers/cat1.jpg'; 
import cat2Img from '../assets/stickers/cat2.png';

const HomeView: React.FC = () => {
  const setStep = usePhotoStore((state) => state.setStep);

  return (
    // Sử dụng pt-safe-top từ config
    <div className="w-full h-full flex flex-col items-center justify-start pt-safe-top px-4 overflow-hidden relative font-sans gap-8">

      {/*  BOOTH CARD */}
      <div className="relative z-10 flex-shrink-0 mt-8">
        {/* Sử dụng w-booth-card, h-booth-card, rounded-booth từ config */}
        <div className="relative bg-white/50 backdrop-blur-xl border-[4px] border-white shadow-2xl rounded-booth w-booth-card h-booth-card flex flex-col items-center p-4 overflow-visible">
            
            {/* 1. HEADER */}
            <div className="relative z-20 mt-4 mb-2">
                 <h1 
                    className="text-6xl font-bold"
                    style={{
                        fontFamily: '"Nunito", sans-serif',
                        color: '#FFB7C5', 
                        WebkitTextStroke: '2px #FFFFFF',
                        textShadow: '0px 3px 6px rgba(244, 143, 177, 0.4)'
                    }}
                  >
                    Hanakaze
                  </h1>
                  {/* Sticker hoa nhỏ */}
                  <img src={flowerImg} className="absolute -top-3 -right-6 w-8" alt="flower" />
            </div>

            {/* 2. DẢI ẢNH TRANG TRÍ */}
            <div className="relative w-full flex-1 mt-4">

                {/* STRIP TRÁI (Nằm dưới) */}
                {/* Dùng bg-brand-light chuẩn từ config */}
                <div className="absolute left-8 top-2 w-32 bg-brand-light p-2 pb-6 shadow-md border-2 border-white transform -rotate-[15deg] z-10 flex flex-col gap-2">
                    <div className="flex justify-between px-1 opacity-60">
                         <img src={sootImg} className="w-5" alt="s" />
                         <img src={sootImg} className="w-5 scale-x-[-1]" alt="s" />
                    </div>
                    {/* Ảnh Cat 1 */}
                    <div className="aspect-square bg-white border border-brand-pink/30 p-1 overflow-hidden">
                        <img src={cat1Img} className="w-full h-full object-contain" alt="1" />
                    </div>
                    {/* Ảnh Cat 2 */}
                    <div className="aspect-square bg-white border border-brand-pink/30 p-1 overflow-hidden">
                        <img src={cat2Img} className="w-full h-full object-contain" alt="2" />
                    </div>
                </div>

                {/* STRIP PHẢI (Nằm trên) */}
                {/* Dùng bg-brand-light chuẩn từ config */}
                <div className="absolute right-8 top-6 w-32 bg-brand-light p-2 pb-6 shadow-[0_10px_20px_rgba(0,0,0,0.15)] border-2 border-white transform rotate-[8deg] z-20 flex flex-col gap-2">
                    <div className="flex justify-between px-1 opacity-60">
                         <img src={sootImg} className="w-5" alt="s" />
                         <img src={sootImg} className="w-5 scale-x-[-1]" alt="s" />
                    </div>
                    {/* Ảnh Cat 1 */}
                    <div className="aspect-square bg-white border border-brand-pink/30 p-1 overflow-hidden">
                        <img src={cat1Img} className="w-full h-full object-contain" alt="3" />
                    </div>
                    {/* Ảnh Cat 2 */}
                    <div className="aspect-square bg-white border border-brand-pink/30 p-1 overflow-hidden">
                        <img src={cat2Img} className="w-full h-full object-contain" alt="4" />
                    </div>
                    
                    {/* Ghim hoa */}
                    <img src={flowerImg} className="absolute -top-2 -right-2 w-8 drop-shadow-sm z-30" alt="" />
                </div>

                {/*  CÁC STICKER TRANG TRÍ  */}
                
                {/* Totoro */}
                <img src={totoroImg} className="absolute -bottom-4 -left-6 w-28 rotate-[-5deg] z-30 drop-shadow-lg" alt="totoro" />

                {/* Lửa */}
                <img src={fireImg} className="absolute top-16 -right-2 w-12 z-30" alt="fire" />

                {/* Bồ hóng */}
                <img src={sootImg} className="absolute -top-2 left-4 w-10 rotate-12 z-30" alt="soot" />

                {/* Hoa */}
                <img src={flowerImg} className="absolute bottom-10 right-2 w-8 opacity-80 z-30" alt="flower 1" />
                <img src={flowerImg} className="absolute top-1/2 left-1/2 w-5 opacity-40 z-0" alt="flower 2" />
                <img src={flowerImg} className="absolute top-20 -left-6 w-6 opacity-70 z-30" alt="flower 3" />

            </div>
        </div>
      </div>

      {/*  NÚT SELECT  */}
      <div className="flex-none z-40">
        <button 
          onClick={() => setStep('mode')}
          // Dùng text-brand-darkPink và border-brand-pink từ config
          className="bg-white text-brand-darkPink px-20 py-3 rounded-full text-3xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform border-[4px] border-brand-pink cursor-pointer select-none"
        >
          Select
        </button>
      </div>

    </div>
  );
};

export default HomeView;