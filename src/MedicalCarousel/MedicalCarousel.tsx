import React, { useState } from 'react';
import './MedicalCarousel.css';

export interface MedicalCarouselProps {
  imageSrcArray: string[];
  imageAltArray?: string[];
  buttonPrev?: React.ReactNode;
  buttonNext?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  theme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom';
  size?: 'small' | 'medium' | 'large' | 'very-large';
  onClick?: () => void;
}

function MedicalCarousel(props: MedicalCarouselProps): JSX.Element {
  const [currentPosition, setCurrentPosition] = useState(0);

  const clickButtonPrev = () => {
    setCurrentPosition((currentPosition) => (currentPosition - 1 + props.imageSrcArray.length) % props.imageSrcArray.length);
  };

  const clickButtonNext = () => {
    setCurrentPosition((currentPosition) => (currentPosition + 1) % props.imageSrcArray.length);
  };

  return (
    <div className={`carousel carousel-${props.theme} carousel-${props.size} ${props.className}`} style={props.style}>
      {props.imageSrcArray && props.imageSrcArray.map((imageSrc, index) => (
            <img className="carousel-image" key={index} src={imageSrc}
            alt={props.imageAltArray?.[index] || `Image ${index + 1}`}
            style={{ display: index === currentPosition ? 'block' : 'none' }}/>
          ))
      }
      <div className='carousel-actions'>
          {props.buttonNext && <div className="carousel-actions-input" onClick={clickButtonPrev}>{props.buttonPrev}</div>}
          {props.buttonNext && <div className="carousel-actions-input" onClick={clickButtonNext}>{props.buttonNext}</div>}
      </div>
    </div>
  );
};

export default MedicalCarousel;

// <img src={props.imageSrcArray[0]} alt={props.imageAltArray[0]} className="card-image" />
// {props.buttonPrev && <div className="block-actions">{props.buttonPrev}</div>}
// {props.buttonNext && <div className="card-actions">{props.buttonNext}</div>}

// <MedicalIconButton icon='your-icon-class' label='Назад' onClick={handlePrev}/>
// <MedicalIconButton icon='your-icon-class' label='Вперёд' onClick={(handleNext)}/>
/*
      <div className='carousel-actions'>
        <MedicalIconButton icon='your-icon-class' label='Назад' onClick={clickButtonPrev}/>
        <MedicalIconButton icon='your-icon-class' label='Вперёд' onClick={clickButtonNext}/>
      </div>

      <div className='carousel-slider'>
*/