import React from 'react';

export default function FrontCover() {
  return (
    <div className="cover-front cover-front--title-page">
      
      {/* Ornate Double Border Frame — full page */}
      <div className="cover-frame-outer">
        <div className="cover-frame-inner">
          {/* Corner ornaments */}
          <span className="corner-block corner-tl" />
          <span className="corner-block corner-tr" />
          <span className="corner-block corner-bl" />
          <span className="corner-block corner-br" />
        </div>
      </div>

      {/* Top Flourish */}
      <div className="cover-flourish cover-flourish--top">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
          <path d="M10,15 Q50,0 100,15 T190,15" stroke="var(--text-main)" strokeWidth="1" fill="none"/>
          <path d="M40,15 Q75,30 100,15 T160,15" stroke="var(--accent-amber)" strokeWidth="1.5" fill="none"/>
          <circle cx="100" cy="15" r="4" fill="var(--text-main)"/>
        </svg>
      </div>

      {/* Nội dung chính — căn giữa bìa (khung + flourish là position:absolute) */}
      <div className="cover-hero">
        <h1 className="title-abhaya">Kinh tế Chính Trị<br/>Mac-Lênin</h1>

        <div className="cover-divider">
          <span className="cover-divider-line" />
          <span className="cover-divider-diamond">✧</span>
          <span className="cover-divider-line" />
        </div>

        <p className="cover-subtitle">
          Khám phá qua những lăng kính Ethereal Wisdom
        </p>
      </div>

      {/* Bottom Flourish */}
      <div className="cover-flourish cover-flourish--bottom">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
          <path d="M10,15 Q50,30 100,15 T190,15" stroke="var(--text-main)" strokeWidth="1" fill="none"/>
          <path d="M40,15 Q75,0 100,15 T160,15" stroke="var(--accent-amber)" strokeWidth="1.5" fill="none"/>
          <circle cx="100" cy="15" r="4" fill="var(--text-main)"/>
        </svg>
      </div>
    </div>
  );
}
