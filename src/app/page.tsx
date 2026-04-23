"use client";

import React, { useEffect, useRef, useState } from "react";
import FrontCover from "@/components/book/FrontCover";
import Preface from "@/components/book/Preface";
import ChapterI1 from "@/components/book/ChapterI1";
import ChapterI2 from "@/components/book/ChapterI2";
import ChapterI3 from "@/components/book/ChapterI3";
import ChapterII1 from "@/components/book/ChapterII";
import ChapterIII1 from "@/components/book/ChapterIII1";
import ChapterIII2 from "@/components/book/ChapterIII2";
import ChapterIV from "@/components/book/ChapterIV";
import ChapterV from "@/components/book/ChapterV";
import ChapterVI from "@/components/book/ChapterVI";
import BackCover from "@/components/book/BackCover";

export default function Home() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSpreads = 7;
  const totalSteps = totalSpreads;

  const stopSpreadAnimation = () => {
    if (animationRef.current) {
      clearInterval(animationRef.current);
      animationRef.current = null;
    }
  };

  const goToSpreadSmooth = (targetSpread: number) => {
    const target = Math.max(0, Math.min(targetSpread, totalSpreads - 1));
    if (target === currentSpread) return;

    stopSpreadAnimation();
    let next = currentSpread;
    const direction = target > currentSpread ? 1 : -1;

    animationRef.current = setInterval(() => {
      next += direction;
      setCurrentSpread(next);

      if (next === target) {
        stopSpreadAnimation();
      }
    }, 240);
  };

  const nextPage = () =>
    setCurrentSpread((p) => {
      stopSpreadAnimation();
      return Math.min(p + 1, totalSpreads - 1);
    });

  const prevPage = () =>
    setCurrentSpread((p) => {
      stopSpreadAnimation();
      return Math.max(p - 1, 0);
    });

  useEffect(() => {
    return () => {
      stopSpreadAnimation();
    };
  }, []);

  // Define the physical sheets of paper
  const sheets = [
    {
      id: 0,
      front: <FrontCover />,
      back: <Preface onNavigate={goToSpreadSmooth} />,
    },
    {
      id: 1,
      front: <ChapterI1 />,
      back: <ChapterI2 />,
    },
    {
      id: 2,
      front: <ChapterI3 />,
      back: <ChapterII1 />,
    },
    {
      id: 3,
      front: <ChapterIII1 />,
      back: <ChapterIII2 />,
    },
    {
      id: 4,
      front: <ChapterIV />,
      back: <ChapterV />,
    },
    {
      id: 5,
      front: <ChapterVI />,
      back: <BackCover />,
    },
  ];

  return (
    <div className="flipbook-container">
      {/* Right Progress Bar */}
      <div className="progress-bar">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`progress-dot ${currentSpread === i ? "active" : ""}`}
            onClick={() => goToSpreadSmooth(i)}
          >
            <span className="tooltip">
              Trang {i === 0 ? "Bìa" : i * 2 - 1 + "-" + i * 2}
            </span>
          </div>
        ))}
      </div>

      {/* Book Scene */}
      <div className="book-scene">
        <div className={`book-wrapper ${currentSpread > 0 ? "opened" : ""}`}>
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
                className={`book-sheet ${isFlipped ? "flipped" : ""}`}
                style={{
                  zIndex,
                  // After rotateY(-180deg) the local Z-axis flips, so -(index*2) becomes
                  // +(index*2) in world space — the highest-index flipped sheet is closest.
                  transform: `rotateY(${isFlipped ? -180 : 0}deg) translateZ(${isFlipped ? -(index * 2) : (sheets.length - index) * 2}px)`,
                }}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest('button, a, input, select, textarea, [role="button"]')) return;
                  isFlipped ? prevPage() : nextPage();
                }}
              >
                <div className="page-front">{sheet.front}</div>
                <div className="page-back">{sheet.back}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="controls">
        <button
          className="nav-btn"
          onClick={prevPage}
          disabled={currentSpread === 0}
        >
          &larr; Lật về
        </button>
        <span className="page-indicator">
          Tiến trình {currentSpread + 1} / {totalSteps}
        </span>
        <button
          className="nav-btn"
          onClick={nextPage}
          disabled={currentSpread === totalSteps - 1}
        >
          Lật tiếp &rarr;
        </button>
      </div>
    </div>
  );
}
