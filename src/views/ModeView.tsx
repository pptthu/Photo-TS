import React from 'react';
import { usePhotoStore } from '../store/usePhotoStore';
import Button from '../components/Button';

const ModeView: React.FC = () => {
  const setStep = usePhotoStore((state) => state.setStep);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full animate-fade-in pt-32 pb-10">
      <h1 
        className="text-6xl md:text-7xl mb-12 font-bold"
        style={{
            fontFamily: '"Nunito", sans-serif',
            color: '#FFB7C5', 
            WebkitTextStroke: '2px #FFFFFF', 
            textShadow: '0px 3px 6px rgba(244, 143, 177, 0.4)'
        }}
      >
        Hanakaze
      </h1>
      
      <div className="flex flex-col gap-6">
        <Button variant="danger" className="w-64" onClick={() => setStep('input')}>
          Take photos
        </Button>
      </div>
    </div>
  );
};

export default ModeView;