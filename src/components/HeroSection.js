import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/dog_running_video.mp4' autoPlay loop muted />
      <h1>KATAŠUNIS</h1>
      <p>Veterinarijos informacinė sistema</p>
    
    </div>
  );
}

export default HeroSection;
