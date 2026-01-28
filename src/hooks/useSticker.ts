import { useState } from 'react';
import type { ISticker } from '../types/index'; 

export const useSticker = () => {
  const [stickers, setStickers] = useState<ISticker[]>([]);

  const addSticker = (stickerSrc: string) => {
    const newSticker: ISticker = {
      id: Date.now(), // ID số 
      src: stickerSrc, 
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const removeSticker = (id: string | number) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  return { stickers, addSticker, removeSticker };
};