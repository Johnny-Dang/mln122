"use client";

import React, { useState } from 'react';
import FrontCover from '@/components/book/FrontCover';
import Preface from '@/components/book/Preface';
import Chapter1 from '@/components/book/Chapter1';
import Chapter2 from '@/components/book/Chapter2';
import Chapter3 from '@/components/book/Chapter3';
import Chapter4 from '@/components/book/Chapter4';
import Chapter5 from '@/components/book/Chapter5';
import Chapter6 from '@/components/book/Chapter6';
import BackCover from '@/components/book/BackCover';

export default function Home() {
  const [currentSpread, setCurrentSpread] = useState(0);
  // Define the physical sheets of paper
  const sheets = [
    {
      id: 0,
      front: <FrontCover />,
      back: <Preface />
    },
    {
      id: 1,
      front: <Chapter1 />,
      back: <Chapter2 />
    },
    {
      id: 2,
      front: <Chapter3 />,
      back: <Chapter4 />
    },
    {
      id: 3,
      front: <Chapter5 />,
      back: <Chapter6 />
    },
    {
      id: 4,
      front: <BackCover />,
      back: <BackCover />
    }
  ];

  // Number of total spreads (0 to sheets.length)
  const totalSpreads = sheets.length + 1;
  
  // Total interactive steps for the progress bar (Spreads)
  const totalSteps = totalSpreads;

  const nextPage = () => setCurrentSpread(p => Math.min(p + 1, totalSpreads - 1));
  const prevPage = () => setCurrentSpread(p => Math.max(p - 1, 0));

  return (
    <div className="flipbook-container">
      {/* Right Progress Bar */}
      <div className="progress-bar">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div 
            key={i} 
            className={`progress-dot ${currentSpread === i ? 'active' : ''}`}
            onClick={() => setCurrentSpread(i)}
          >
            <span className="tooltip">Trang {i === 0 ? 'Bìa' : (i * 2 - 1) + '-' + (i * 2)}</span>
          </div>
        ))}
      </div>

      {/* Book Scene */}
      <div className="book-scene">
        <div className={`book-wrapper ${currentSpread > 0 ? 'opened' : ''}`}>
          
          {/* Spine and Rings */}
          <div className="book-spine">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="ring"></div>
            ))}
          </div>

          {sheets.map((sheet, index) => {
            const isFlipped = currentSpread > index;
            // Calculate zIndex so front sheets are on top when not flipped, and back sheets on top when flipped
            // Flipped: higher index = larger z-index (on top). Unflipped: lower index = on top.
            const zIndex = isFlipped ? index : sheets.length - index;
            
            return (
              <div 
                key={sheet.id}
                className={`book-sheet ${isFlipped ? 'flipped' : ''}`}
                style={{ 
                  zIndex,
                  // After rotateY(-180deg) the local Z-axis flips, so -(index*2) becomes
                  // +(index*2) in world space — the highest-index flipped sheet is closest.
                  transform: `rotateY(${isFlipped ? -180 : 0}deg) translateZ(${isFlipped ? -(index * 2) : (sheets.length - index) * 2}px)`
                }}
                onClick={() => isFlipped ? prevPage() : nextPage()}
              >
                <div className="page-front" onClick={e => e.stopPropagation()}>
                  {sheet.front}
                </div>
                <div className="page-back" onClick={e => e.stopPropagation()}>
                  {sheet.back}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Bottom Controls */}
      <div className="controls">
        <button className="nav-btn" onClick={prevPage} disabled={currentSpread === 0}>
          &larr; Lật về
        </button>
        <span className="page-indicator">
          Tiến trình {currentSpread + 1} / {totalSteps}
        </span>
        <button className="nav-btn" onClick={nextPage} disabled={currentSpread === totalSteps - 1}>
          Lật tiếp &rarr;
        </button>
      </div>
    </div>
  );
}
