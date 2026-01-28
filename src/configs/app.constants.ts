// Import ảnh trực tiếp để Vite xử lý (Không dùng đường dẫn string)
import bgDesktop from '../assets/backgrounds/bg-desktop.jpg';
import logo from '../assets/logo.png';

// Import Stickers
import cat from '../assets/stickers/cat.png';
import mouse from '../assets/stickers/mouse.png';
import totoro from '../assets/stickers/totoro.png';
import fire from '../assets/stickers/fire.png';
import soot from '../assets/stickers/soot.png';
import flower from '../assets/stickers/flower.png';

export const ASSETS = {
  LOGO: logo,
  BG_DESKTOP: bgDesktop,
} as const;

export const STICKERS = [
  { id: 'cat', src: cat },
  { id: 'mouse', src: mouse },
  { id: 'totoro', src: totoro },
  { id: 'fire', src: fire },
  { id: 'soot', src: soot },
  { id: 'flower', src: flower },
] as const;

export const CONFIG = {
  MAX_PHOTOS: 4,
  COUNTDOWN_SECONDS: 3, 
} as const;