import React, { memo } from 'react';
import Marquee from 'react-easy-marquee';
import styled from 'styled-components';
import tw from 'twin.macro';
import { color } from '../../../config/color.config';

interface svgCenterProps {
  svgBarSide?: boolean;
}

interface AnimationName {
  cor?: string;
  svgBarSide?: boolean;
}

const Container = styled.div`
  ${tw`
    block
    overflow-hidden
    lg:px-[35px]
    w-full
  `}

  & > div {
    width: 60px !important;
    height: 1920px !important;

    transform: translate(100vw, 26px) rotate(90deg);
    transform-origin: left top;

    @media (min-width: 1024px) {
      width: 100% !important;
      height: 100vh !important;

      transform: translate(0) rotate(0);
      transform-origin: top;
    }
  }
`;

function SvgCenter({ svgBarSide }: svgCenterProps) {
  return (
    <Container>
      <Marquee axis="Y" reverse={true} duration={64000}>
        <Svg svgBarSide={svgBarSide} />
        <Svg svgBarSide={svgBarSide} />
        <Svg svgBarSide={svgBarSide} />

        {/* <Lottie animationData={SvgAnimation} loop={true} /> */}
      </Marquee>
    </Container>
  );
}

export default memo(SvgCenter);

export const Svg = ({ cor, svgBarSide = false }: AnimationName) => (
  <svg
    viewBox="0 0 112.9 1224.17"
    fill={cor ? cor : color}
    className={svgBarSide ? 'svgBarSide' : 'svgAnim'}
  >
    <g data-name="Layer 2">
      <g data-name="Camada 1">
        <path d="M9.53,377.76a16.8,16.8,0,0,0,1.59,7.31c1.54,3.23,3.61,3.55,6,.85C23.5,378.66,29.8,371.31,36.18,364c3.38-3.86,6.91-7.6,10.29-11.46a21.63,21.63,0,0,0,5.91-15.48c.19-4.94-1.78-9.64-5.13-13.71-8.19-10-16.51-19.83-24.76-29.75-1.82-2.2-3.57-4.45-5.35-6.68a4.72,4.72,0,0,0-5.37-1.84c-2.17.7-2.12,3-2,4.57.61,9.17.12,18.33.12,27.48C9.88,337.36,9.67,357.56,9.53,377.76Z" />
        <path d="M51.92,1159.62a183.23,183.23,0,0,0-18.7-22.14,153.61,153.61,0,0,1-13.58-16.14c-2.59-3.38-4.65-3.16-6.52.64-1.35,2.76-1.49,5.77-1.49,8.77q0,20.68,0,41.35h0q0,21.39,0,42.78c0,5.34,1.61,6.23,6.17,3.49,3.22-1.94,5.29-5.13,7.72-7.84,8.69-9.67,17.09-19.61,25.57-29.48C55.63,1175.75,56.07,1165.28,51.92,1159.62Z" />
        <path d="M19.31,999.38c1.55-2.55,2.86-5.24,4.29-7.86A314.11,314.11,0,0,1,48.29,952.9c3.89-5.15,4.24-10.33,1-16a274,274,0,0,0-27.58-40.53c-1.53-1.83-3.25-3.49-4.88-5.23a3.12,3.12,0,0,0-3.52-1c-1.64.53-1.7,1.88-1.71,3.19,0,7.56,0,15.11,0,22.66v75.53a13.86,13.86,0,0,0,1.91,7.9C15.33,1002.23,17.56,1002.24,19.31,999.38Z" />
        <path d="M13.05,794.46c11.65-16,20.5-33.87,32.6-49.54,3.69-4.76,3-12.95-1.52-17.17-10.91-10.22-20.07-22-28.52-34.4-1.18-1.73-2.17-4.17-4.81-3.52-2.47.62-3.29,2.95-3.71,5.26-.87,4.85-.32,9.77-.38,14.65-.16,12,0,24,0,36h-.1c0,15.7,0,31.4,0,47.1,0,2,.28,3.63,2.4,4.18S11.91,796,13.05,794.46Z" />
        <path d="M7.29,531.35c-.09,14.56-.16,29.14.34,43.71,0,1.55-.51,4,1.8,4.55a5.81,5.81,0,0,0,6.25-2.46q9.43-12.61,19-25.16c3.45-4.57,6.93-9.12,10.34-13.72,4-5.32,3.86-11-.33-16.1q-14-17-28.16-33.85a10.94,10.94,0,0,0-1.68-1.84c-3.07-2.32-6.22-1.06-6.66,2.7-.19,1.65,0,3.35,0,5.93C6.49,506.55,7.37,519,7.29,531.35Z" />
        <path d="M10.17,199.94c2.49.82,4.06-.87,5.38-2.6,10-13.22,20.08-26.43,30-39.75a11.83,11.83,0,0,0-.6-15Q30.67,125.38,16.31,108.2c-2.8-3.35-4.79-3-6.95.89A12.37,12.37,0,0,0,8,115.32q0,19.78,0,39.55h.12c0,13.29,0,26.58,0,39.87C8.21,196.64,7.58,199.08,10.17,199.94Z" />
        <path d="M104.76,448c0-11.42.17-22.84-.05-34.25-.16-7.82.37-15.66-.36-23.48-.36-3.75-1-4.35-4.63-3.53s-6.28,3.2-8.62,5.78A289.87,289.87,0,0,0,71.89,417c-4.18,5.78-8.29,11.59-12,17.71-1.86,3.06-1.32,5.42,1.11,7.5,10.49,9,18.9,20,29.05,29.33,3.32,3.05,6.71,6,10.11,9a3.29,3.29,0,0,0,3,.88c1.26-.37,1.17-1.67,1.18-2.73q0-15.35,0-30.68Z" />
        <path d="M64,64.09c8.87,8.19,16,18,24.69,26.34,3.86,3.69,7.81,7.26,11.82,10.78.92.8,1.77,1.82,3.09,1.18s.65-1.93.66-2.9q.06-22.3,0-44.61h-.09V11c0-1.8.21-3.79-1.73-4.73s-3.33.19-4.85,1.28c-6.66,4.75-11.78,11-16.82,17.34-6.37,8-11.74,16.8-17.68,25.15C60.31,54.06,60.45,60.79,64,64.09Z" />
        <path d="M102.2,211.63c0-1.74.28-3.69-1.83-4.66s-3.73.07-5.17,1.36a39.4,39.4,0,0,0-3.91,4.15C82.46,223.09,73.67,233.7,63,242.57c-3.95,3.29-4,6.8-.48,10.5q14.72,15.39,29.63,30.59a42.28,42.28,0,0,0,3.92,3.09c1.39,1.13,3,1.72,4.63,1s1.46-2.57,1.46-4.12v-36h0C102.22,235.62,102.24,223.62,102.2,211.63Z" />
        <path d="M100.91,587.72a4.05,4.05,0,0,0-4.55,1.06,152.32,152.32,0,0,0-12.59,14.16,42.4,42.4,0,0,1-5.91,6.21C71.41,614.38,67,621.29,62.22,628c-1.47,2.07-1.54,3.61.62,5.77,10.68,10.7,21.55,21.22,31.49,32.64a7.24,7.24,0,0,0,4.23,2.41c3.16.65,4.46-.22,4.11-3.35-1.09-9.8.33-19.57.13-29.35-.13-6.09,0-12.18,0-18.27h.07c0-8.75,0-17.49,0-26.23C102.86,589.9,102.51,588.37,100.91,587.72Z" />
        <path d="M105.09,1006.52c-.2-.84.33-1.85.47-2.79.35-2.31-.31-4.58-2.15-5.71-2.13-1.3-4.44-.07-6.17,1.4-12.13,10.41-21.83,22.83-30.24,36.43-2.66,4.29-6.61,7.76-9.57,11.89-2.76,3.86-2.24,4.68,1.58,7.8,4.66,3.8,7.73,9.11,11.79,13.51,5.76,6.25,10.13,13.65,16,19.83,3.2,3.37,6.13,7,9.35,10.34a34.19,34.19,0,0,0,5.43,4.37c2.08,1.41,3.93.44,4.13-2.12.15-1.91,0-3.84,0-5.76-1.25-13.56.32-27.13-.18-40.72-.36-9.71.1-19.55,0-29.32C105.56,1019.31,106.55,1012.87,105.09,1006.52Z" />
        <path d="M102.35,780.5c-1.65-.66-2.71.12-3.93,1.44-9.48,10.28-17.56,21.7-26.49,32.42A121.48,121.48,0,0,1,62,825c-3.37,3.18-3.61,9.65-.26,13.8,8.66,10.73,17.41,21.38,26.12,32.06a40.15,40.15,0,0,0,9.5,8.56c1.55,1,3.12,2.32,4.83,1.3s2-3.12,2.06-5.09c.06-3.46.12-6.92.12-10.38q0-17.81,0-35.61h-.11c0-15.1,0-30.21,0-45.31C104.25,782.68,104,781.18,102.35,780.5Z" />
        <path d="M111.66,1159.34q-5.76-7.87-11.57-15.72c-11.66-15.66-23.56-31.12-36-46.18-9.7-11.78-19.64-23.35-29.64-34.89-1.27-1.46-2.66-2.81-4.07-4.15-2-1.93-2.35-3.6-.42-6.07q14.42-18.52,28.69-37.16C73.84,995.49,89.29,976,104,956a25.19,25.19,0,0,0,3.79-20.94c-1.11-4.52-4.7-7.48-7.68-10.64C74.5,897.3,51.23,868.24,29.35,838c-1.88-2.59-1.8-4.31.24-6.5,7.82-8.37,15.17-17.16,22.7-25.79,11.92-13.67,23.51-27.62,35.06-41.62q9.69-11.75,19.08-23.73a10.09,10.09,0,0,1,2.54-2.51,9,9,0,0,0,3.9-5.72v-9.36a6.89,6.89,0,0,0-2-2.9c-5.6-5.37-11.54-10.37-17.52-15.3a274.32,274.32,0,0,1-36.26-36.27,364.18,364.18,0,0,1-29.23-40c-1.46-2.35-1.37-3.85.5-5.93q17.2-19.18,34.47-38.33,20.82-23.14,41.6-46.36c5.34-6,4.83-16.09-1-22.4-3.39-3.7-7-7.14-10.55-10.73A733.41,733.41,0,0,1,31,432.21c-2.57-3.43-2.5-3.4.42-6.5,14.17-15,28.23-30.12,41.85-45.65,9.83-11.22,19.65-22.45,29.21-33.92a21.67,21.67,0,0,0,3.21-5.15,7.63,7.63,0,0,0-.73-8.15,95.77,95.77,0,0,0-13-14.76c-3.4-3-6.63-6.18-9.83-9.4Q54,280.33,25.92,252c-3.1-3.14-3.25-3.29-.21-6.63,6.08-6.66,12-13.45,18.09-20.13Q62.07,205,80.15,184.67C86.32,177.72,92.64,170.9,98.9,164q3.21-3.49,6.16-7.19c4.71-5.88,3.92-15.79-1.73-21.81-4.41-4.71-9.07-9.17-13.58-13.78-21.23-21.71-40.61-45-59-69.18-1.75-2.31-2-3.79.23-6C44,32.85,58.15,14.34,70.56,0H49S30.78,19.75,19.65,31.1c-4.56,4.65-8.93,9.49-13.44,14.2-1.44,1.5-1.38,2.86-.12,4.4C32.55,82,57.19,115.88,87,145.29c1.82,1.79,1.63,2.8,0,4.58-22.58,25-45,50.16-67.69,75-5,5.46-9.31,11.38-13.88,17.14-.74.95-1.74,1.47-2.45,2.4-3.9,5.06-4.55,7.83,1.31,13.4C26.59,279,48,301.09,69.81,322.66c4.42,4.36,8.67,8.91,13.22,13.11,2.16,2,2.13,3.22.22,5.43-21.55,25-43.66,49.42-66.63,73.08-7.22,7.44-7.88,16.89-1.76,25.24a775.93,775.93,0,0,0,72,85.45c1.77,1.81,2.07,2.77.21,4.82q-35.61,39.32-71,78.85c-3,3.29-6.13,6.41-8.09,10.6a9.29,9.29,0,0,0,.42,9.27c6.71,10.25,12.8,20.91,19.85,31,17.88,25.48,38.05,48.81,62.4,68.25,1.85,1.47,1.6,2.29.28,3.91-24.05,29.59-48.61,58.74-74.23,87-4.36,4.8-5.56,10.39-6.6,16.23-.61,3.44.63,6.52,2.65,9.41,23.49,33.53,48.72,65.65,76.55,95.64,2.26,2.44,2.59,3.81.37,6.66q-36.73,47.25-73.15,94.79c-5.27,6.87-5.06,14.91-4,23,.28,2,1.81,3.58,3.2,5.1q15.36,16.67,30,34,9.18,10.86,18,21.85,14.79,18.36,28.88,37.31a5.94,5.94,0,0,1,1.11,2.09,2.72,2.72,0,0,1,.08.63,4.46,4.46,0,0,1-1.21,2.7c-13,16.52-43.61,56.29-43.61,56.29H70.56c.49-.36,26.87-34.91,37.92-50.12a38,38,0,0,1,3.13-3.59l.13-.14c.32-.34.64-.67,1-1h0c.07-2.37.13-4.24.2-6.61C112.21,1161.68,112.43,1160.41,111.66,1159.34Z" />
      </g>
    </g>
  </svg>
);