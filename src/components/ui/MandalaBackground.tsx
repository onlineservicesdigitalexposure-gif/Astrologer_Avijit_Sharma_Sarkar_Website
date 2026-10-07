import React from 'react';
import { cn } from '@/lib/utils';

interface MandalaBackgroundProps {
  className?: string;
  opacity?: number;
}

export const MandalaBackground: React.FC<MandalaBackgroundProps> = ({
  className,
  opacity = 0.22
}) => {
  const zodiacSymbols = [
    { char: '♈', angle: 0 },
    { char: '♉', angle: 30 },
    { char: '♊', angle: 60 },
    { char: '♋', angle: 90 },
    { char: '♌', angle: 120 },
    { char: '♍', angle: 150 },
    { char: '♎', angle: 180 },
    { char: '♏', angle: 210 },
    { char: '♐', angle: 240 },
    { char: '♑', angle: 270 },
    { char: '♒', angle: 300 },
    { char: '♓', angle: 330 },
  ];

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center', className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full max-w-[900px] max-h-[900px] text-[#F4B942]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.5">
          {/* Outer Zodiac Perimeter Ring */}
          <circle cx="400" cy="400" r="380" stroke="#FFD166" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="400" cy="400" r="350" stroke="#F4B942" strokeWidth="2" />
          <circle cx="400" cy="400" r="310" stroke="#F28C28" strokeWidth="1.5" />
          
          {/* Radial Rays / Astrological Houses */}
          <line x1="400" y1="20" x2="400" y2="780" strokeOpacity="0.6" />
          <line x1="20" y1="400" x2="780" y2="400" strokeOpacity="0.6" />
          <line x1="131" y1="131" x2="669" y2="669" strokeOpacity="0.6" />
          <line x1="131" y1="669" x2="669" y2="131" strokeOpacity="0.6" />

          {/* Additional 12 House Dividing Rays */}
          <line x1="210" y1="71" x2="590" y2="729" strokeOpacity="0.4" />
          <line x1="71" y1="210" x2="729" y2="590" strokeOpacity="0.4" />
          <line x1="71" y1="590" x2="729" y2="210" strokeOpacity="0.4" />
          <line x1="210" y1="729" x2="590" y2="71" strokeOpacity="0.4" />

          {/* Inner Astronomical Orbit Rings */}
          <circle cx="400" cy="400" r="250" stroke="#FFD166" strokeWidth="2" />
          <circle cx="400" cy="400" r="190" stroke="#F4B942" strokeWidth="1.5" strokeDasharray="8 4" />
          <circle cx="400" cy="400" r="130" stroke="#E85D04" strokeWidth="2" />
          <circle cx="400" cy="400" r="70" fill="currentColor" fillOpacity="0.12" stroke="#FFD166" strokeWidth="2" />

          {/* Sacred Petal & Star Geometry */}
          <path d="M400 150 Q440 235 400 320 Q360 235 400 150 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M400 480 Q440 565 400 650 Q360 565 400 480 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M150 400 Q235 440 320 400 Q235 360 150 400 Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M480 400 Q565 440 650 400 Q565 360 480 400 Z" fill="currentColor" fillOpacity="0.08" />

          {/* 12 Zodiac Symbols Rendered along outer ring */}
          {zodiacSymbols.map(({ char, angle }, i) => {
            const rad = (angle - 90) * (Math.PI / 180);
            const r = 330;
            const x = 400 + r * Math.cos(rad);
            const y = 400 + r * Math.sin(rad);
            return (
              <text
                key={i}
                x={x}
                y={y}
                fill="#FFD166"
                fontSize="24"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="central"
                stroke="none"
              >
                {char}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

