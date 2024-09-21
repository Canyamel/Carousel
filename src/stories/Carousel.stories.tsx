import React from 'react';
import { Meta } from '@storybook/react';
import MedicalCarousel, { MedicalCarouselProps } from '../MedicalCarousel/MedicalCarousel';
import MedicalIconButton from '../MedicalButton/MedicalButton';

export default {
  title: 'Components/MedicalCarousel',
  component: MedicalCarousel,
  tags: ['autodocs']
} as Meta<MedicalCarouselProps>;

export const Default = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'medium'
  }
};

export const Small = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'small'
  }
};

export const Large = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'large'
  }
};

export const VeryLarge = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'very-large'
  }
};

export const ThumbImage = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'medium',
    thumbImg: true
  }
};

export const ThumbPoint = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'medium',
    thumbPoint: true
  }
};

export const ThumbAll = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'medium',
    thumbImg: true,
    thumbPoint: true
  }
};

export const Dark = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'dark',
    size: 'medium',
    thumbImg: true,
    thumbPoint: true
  }
};

export const Light = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'light',
    size: 'medium',
    thumbImg: true,
    thumbPoint: true
  }
};

export const SecondaryTheme = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'secondary',
    size: 'medium',
    thumbImg: true,
    thumbPoint: true
  }
};

export const CustomTheme = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'secondary',
    size: 'medium',
    style: { backgroundColor: '#cce7f0', color: '#333' },
    styleLeftBotton: { color: '#408ca3' },
    styleRightBotton: { color: '#408ca3' },
    styleThumbPoint: { background: '#9fd3e3' },
    styleThumbActionPoint: { background: '#408ca3' },
    styleContainer: { 'scrollbar-color': '#408ca3 transparent' },
    styleThumbImg: '25%',
    thumbImg: true,
    thumbPoint: true
  }
};

export const CustomButton = {
  args: {
    imageSrcArray: ["http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_1.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_3.png",
                    "http://msa.mephi.ru/media/originalUZI/2024/4084c1855f/pngs/slide_4.png"],
    imageAltArray: ["Placeholder Image 1", "Placeholder Image 2", "Placeholder Image 3"],
    theme: 'primary',
    size: 'medium',
    buttonPrev: <MedicalIconButton icon='your-icon-class' label='<' onClick={() => {}}/>,
    buttonNext: <MedicalIconButton icon='your-icon-class' label='>' onClick={() => {}}/>
  }
};
