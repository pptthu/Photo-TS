import { create } from 'zustand';
import type { AppStep, FrameStyle, IPhoto } from '../types/index';

// Định nghĩa Interface cho Store (State + Actions)
interface PhotoState {
  step: AppStep;
  photos: IPhoto[];
  frameStyle: FrameStyle;
  
  // Actions
  setStep: (step: AppStep) => void;
  addPhoto: (imgSrc: string, source?: 'camera' | 'upload') => void;
  setPhotos: (photos: IPhoto[]) => void;
  setFrameStyle: (style: FrameStyle) => void;
  resetAll: () => void;
}

export const usePhotoStore = create<PhotoState>((set) => ({
  step: 'home',
  photos: [],
  frameStyle: 'strip',

  setStep: (step) => set({ step }),

  // Logic thêm ảnh mới vào mảng
  addPhoto: (imgSrc, source = 'camera') => set((state) => ({
    photos: [...state.photos, {
      id: Date.now() + Math.random(), // Tạo ID ngẫu nhiên
      src: imgSrc,
      source: source
    }]
  })),

  setPhotos: (newPhotos) => set({ photos: newPhotos }),

  setFrameStyle: (style) => set({ frameStyle: style }),

  // Reset về trạng thái ban đầu khi bấm nút Home
  resetAll: () => set({ step: 'home', photos: [], frameStyle: 'strip' }),
}));