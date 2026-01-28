
// Định nghĩa 1 tấm ảnh
export interface IPhoto {
  id: string | number;
  src: string;
  source: 'camera' | 'upload';
}

// Định nghĩa Sticker
export interface ISticker {
  id: string | number;
  src: string;
}

export type AppStep = 'home' | 'mode' | 'input' | 'frame' | 'decor';

export type FrameStyle = 'strip' | 'grid';

// Định nghĩa Response API giả lập
export interface IApiResponse<T> {
  data: T;
  status: number;
  message: string;
}