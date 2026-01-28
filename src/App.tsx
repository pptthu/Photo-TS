import React from 'react';
import Layout from './components/Layout';
import { usePhotoStore } from './store/usePhotoStore';

import HomeView from './views/HomeView';
import ModeView from './views/ModeView';
import CameraView from './views/CameraView';
import FrameView from './views/FrameView';
import DecorView from './views/DecorView';

const App: React.FC = () => {
  const step = usePhotoStore((state) => state.step);

  return (
    <Layout>
      {/* Render có điều kiện dựa trên Step */}
      {step === 'home' && <HomeView />}
      {step === 'mode' && <ModeView />}
      {step === 'input' && <CameraView />}
      {step === 'frame' && <FrameView />}
      {step === 'decor' && <DecorView />}
    </Layout>
  );
};

export default App;