import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import type { ISticker } from '../types/index';

interface StickerItemProps {
  sticker: ISticker;
  onRemove: (id: string | number) => void;
  scale?: number;
}

const StickerItem: React.FC<StickerItemProps> = ({ sticker, onRemove, scale = 1 }) => {
  // Thư viện Draggable yêu cầu nodeRef để tránh cảnh báo trong StrictMode
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef} bounds="parent" scale={scale}>
      <div 
        ref={nodeRef} 
        className="absolute inline-block w-24 h-24 cursor-move pointer-events-auto group touch-none z-[30]"
      >
         <img 
           src={sticker.src} 
           alt="decor" 
           className="w-full h-full drop-shadow-md select-none pointer-events-none object-contain" 
         />
         
         {/* Nút xóa */}
         <div 
           className="delete-btn absolute -top-3 -right-3 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md opacity-0 group-hover:opacity-100 transition-opacity font-bold z-[60]"
           onPointerDown={(e) => { 
               e.stopPropagation();
               onRemove(sticker.id);
           }}
         >
           ✕
         </div>
      </div>
    </Draggable>
  );
};

export default StickerItem;