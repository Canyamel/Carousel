import React, { useState } from 'react';
import './MedicalCarousel.css';

export interface MedicalCarouselProps {
  imageSrcArray: string[];
  imageAltArray?: string[];

  style?: React.CSSProperties;
  styleLeftBotton?: React.CSSProperties;
  styleRightBotton?: React.CSSProperties;
  styleThumbPoint?: React.CSSProperties;
  styleThumbActionPoint?: React.CSSProperties;
  styleContainer?: React.CSSProperties;

  theme?: 'light' | 'dark' | 'primary' | 'secondary' | 'custom';
  size?: 'small' | 'medium' | 'large' | 'very-large';

  buttonPrev?: React.ReactNode;
  buttonNext?: React.ReactNode;

  thumbImg?: boolean;
  styleThumbImg?: string;
  thumbPoint?: boolean;

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

  const clickThumb = (index: number) => {
    setCurrentPosition(index);
  };

  return (
    <div className={`carousel carousel-${props.theme} carousel-${props.size}`} style={props.style}>
      {props.imageSrcArray.map((imageSrc, index) => (
        <img className='carousel-image' key={index} src={imageSrc}
        alt={props.imageAltArray?.[index] || `Image ${index + 1}`}
        style={{ display: index === currentPosition ? 'block' : 'none' }}/>))
      }

      {props.thumbPoint &&
        <div className='carousel-actions-thumb-line-point'>
          {props.imageSrcArray.map((_, index) => (
            <div
            key={index}
            className={`carousel-actions-thumb-point ${index === currentPosition ? 'carousel-actions-thumb-point-active' : ''}`}
            style={{...(index === currentPosition ? props.styleThumbActionPoint : props.styleThumbPoint)}}
            onClick={() => clickThumb(index)}
          />))}
        </div>
      }

      <div className='carousel-actions-container' style={props.styleContainer}>
      {props.buttonNext === undefined && <button className='carousel-actions-button' style={props.styleLeftBotton} onClick={clickButtonPrev}>&#9668;</button>}
      {props.buttonNext && <div className="carousel-actions-button-left-custom" onClick={clickButtonPrev}>{props.buttonPrev}</div>}
        {props.thumbImg &&
          <div className='carousel-actions-thumb-line-image'>
            {props.imageSrcArray.map((imageSrc, index) => (
              <img className='carousel-actions-thumb-image' key={index} src={imageSrc}
              alt={props.imageAltArray?.[index] || `Image ${index + 1}`}
              style={{width: props.styleThumbImg, opacity: index === currentPosition ? '1' : '0.5'}}
              onClick={() => clickThumb(index)}/>))
            }
          </div>
        }
      {props.buttonNext === undefined && <button className='carousel-actions-button' style={props.styleRightBotton} onClick={clickButtonNext}>&#9658;</button>}
      {props.buttonNext && <div className="carousel-actions-button-right-custom" onClick={clickButtonNext}>{props.buttonNext}</div>}
      </div>
    </div>
  );
};

export default MedicalCarousel;
