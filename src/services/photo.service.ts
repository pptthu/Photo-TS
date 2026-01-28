
import type { IPhoto, IApiResponse } from '../types/index';

// Giả lập hàm upload ảnh lên Server
export const PhotoService = {
  // Tham số imageBlob là dữ liệu ảnh thô lấy từ Camera
  uploadPhoto: async (imageBlob: Blob): Promise<IApiResponse<IPhoto>> => {
    
    // Giả lập delay mạng 1 giây 
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Giả lập dữ liệu trả về từ Server
    return {
      status: 200,
      message: 'Upload success',
      data: {
        id: Date.now(),
        // Tạo URL ảo để hiển thị ngay lập tức
        src: URL.createObjectURL(imageBlob),
        source: 'camera'
      }
    };
  },

  // Hàm lưu ảnh (nếu sau này có API lưu history)
  saveSession: async (photos: IPhoto[]) => {
    console.log('Saving session to API...', photos);
    return true;
  }
};