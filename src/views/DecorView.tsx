import React, { useRef, useState, useEffect } from 'react';
import { usePhotoStore } from '../store/usePhotoStore';
import { useSticker } from '../hooks/useSticker';
import { handleDownloadImageCloned } from '../utils/canvaHelper';
import { STICKERS } from '../configs/app.constants';
import StripLayout from '../components/StripLayout';
import Button from '../components/Button';
import StickerItem from '../components/StickerItem'; 

const DecorView: React.FC = () => {
  const { photos, frameStyle, resetAll } = usePhotoStore();
  const printRef = useRef<HTMLDivElement>(null);
  const { stickers, addSticker, removeSticker } = useSticker();
  const [scale, setScale] = useState(1);
  
  const BASE_WIDTH = frameStyle === 'grid' ? 530 : 400;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < BASE_WIDTH + 40) {
        setScale((screenWidth - 40) / BASE_WIDTH); 
      } else {
        setScale(1);
      }
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameStyle, BASE_WIDTH]);

  return (
    <div className="flex flex-col md:flex-row h-full w-full pt-24 md:pt-32 pb-10 px-4 gap-6 animate-fade-in items-center justify-start md:justify-center overflow-y-auto">
      
      {/* MENU STICKER */}
      <div className="w-full md:w-64 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 p-4 flex flex-col shadow-xl z-20 flex-shrink-0 order-2 md:order-1">
        <h3 className="text-brand-darkPink font-bold text-xl mb-2 text-center">Stickers</h3>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-3 p-1 max-h-40 md:max-h-[60vh] overflow-y-auto custom-scrollbar">
          {STICKERS.map((item, index) => (
            <div 
              key={index} 
              onClick={() => addSticker(item.src)} 
              className="aspect-square bg-white rounded-lg shadow-sm hover:scale-110 active:scale-90 transition-transform cursor-pointer flex items-center justify-center p-2 border border-brand-pink/20"
            >
              <img src={item.src} alt="sticker" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* CANVAS AREA */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full order-1 md:order-2">
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center', transition: 'transform 0.3s ease-out' }}>
          
          <div 
            ref={printRef}
            className="relative bg-[#FFF0F5] shadow-2xl" 
            style={{ padding: '24px', width: `${BASE_WIDTH}px`, display: 'block', margin: '0 auto' }}
          >
            {/* Layout Ảnh */}
            <div className="relative pointer-events-none">
                {frameStyle === 'strip' ? (
                    <div className="flex gap-4 md:gap-6">
                        <StripLayout photos={photos} />
                        <StripLayout photos={photos} />
                    </div>
                ) : <div>Grid Layout</div>}
            </div>

            {/* Sticker Layer */}
            <div className="absolute inset-0 pointer-events-none">
                {stickers.map((sticker) => (
                  <StickerItem key={sticker.id} sticker={sticker} onRemove={removeSticker} scale={1} />
                ))}
            </div>
          </div> 
        </div>
      </div>

      {/* BUTTONS */}
      <div className="w-full md:w-auto flex flex-row md:flex-col gap-4 justify-center items-center z-50 mt-4 md:mt-0 order-3">
         <Button variant="primary" className="w-full md:w-48" onClick={() => handleDownloadImageCloned(printRef)}>Download</Button>
         <Button variant="secondary" className="w-full md:w-48" onClick={resetAll}>Home</Button>
      </div>
    </div>
  );
};

export default DecorView;