import React from 'react';
import html2canvas from 'html2canvas';


export const handleDownloadImageCloned = async (
  // Định nghĩa kiểu cho Ref (là thẻ DIV)
  printRef: React.RefObject<HTMLDivElement | null>
) => {
  const element = printRef.current;
  if (!element) return;

  // Ép kiểu NodeList sang mảng HTMLElement để chỉnh style
  const deleteBtns = element.querySelectorAll('.delete-btn') as NodeListOf<HTMLElement>;
  deleteBtns.forEach((btn) => (btn.style.display = 'none'));

  try {
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });

    const link = document.createElement('a');
    link.download = `pptt_booth_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error("Lỗi khi tải ảnh:", err);
    alert("Không thể lưu ảnh. Bạn hãy thử chụp màn hình nhé!");
  } finally {
    deleteBtns.forEach((btn) => (btn.style.display = 'flex'));
  }
};