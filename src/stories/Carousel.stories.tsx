import React from 'react';
import { Meta } from '@storybook/react';
import MedicalCarousel, { MedicalCarouselProps } from '../MedicalCarousel/MedicalCarousel';
import MedicalIconButton from '../MedicalButton/MedicalButton';

export default {
  title: 'Components/MedicalCard',
  component: MedicalCarousel,
  tags: ['autodocs']
} as Meta<MedicalCarouselProps>;

export const Сarousel = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'very-large',
    buttonPrev: <MedicalIconButton icon='your-icon-class' label='<' onClick={() => {}}/>,
    buttonNext: <MedicalIconButton icon='your-icon-class' label='>' onClick={() => {}}/>
  }
};