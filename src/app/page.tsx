"use client";

import React, { useState } from 'react';

export default function Home() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [showKey, setShowKey] = useState(false);

  // Define the physical sheets of paper
  const sheets = [
    {
      id: 0,
      front: (
        <div className="cover-front">
          <h1 className="cover-title">Triết Học<br/>Đa Chiều</h1>
          <p className="cover-subtitle">Khám phá qua những lăng kính Ethereal Wisdom</p>
        </div>
      ),
      back: (
        <>
          <h2 className="chapter-title">Lời Tựa</h2>
          <p className="content-text">
            Mỗi trang sách là một chiều không gian tư tưởng. Hãy lật mở để bước vào hành trình khám phá những khái niệm triết học định hình nên nhận thức của nhân loại.
          </p>
          <div className="page-number">Trang 1</div>
        </>
      )
    },
    {
      id: 1,
      front: (
        <>
          <h2 className="chapter-title">Chương I:<br/>Sự Tồn Tại</h2>
          <p className="content-text">
            Mọi thứ bắt đầu từ một ý niệm. Tồn tại là bước đầu tiên để khám phá bản chất. Khắc kỷ dạy chúng ta làm chủ nội tâm và chấp nhận sự vận hành của vũ trụ thông qua lý trí tuyệt đối.
          </p>
          
          <div 
            className={`interactive-element ${showKey ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setShowKey(!showKey); }}
          >
            <span className="interactive-icon">🗝️</span>
            <span className="interactive-text">Chìa khóa Khắc Kỷ</span>
            
            <div className="glass-panel" onClick={e => e.stopPropagation()}>
              <img src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80" alt="Golden Key" />
              <p>Chiếc chìa khóa tượng trưng cho sự khai sáng, mở ra ngục tối của sự vô minh và cảm xúc hỗn loạn.</p>
            </div>
          </div>
          <div className="page-number">Trang 2</div>
        </>
      ),
      back: (
        <>
          <h2 className="chapter-title">Chương II:<br/>Lý Trí</h2>
          <p className="content-text">
            Lý trí là ngọn đèn soi sáng trong bóng tối của bản năng. Hãy dùng nó để nhận thức thế giới một cách khách quan nhất, không bị vướng bận bởi ảo ảnh của cảm giác.
          </p>
          <div className="page-number">Trang 3</div>
        </>
      )
    },
    {
      id: 2,
      front: (
        <>
          <h2 className="chapter-title">Chương III:<br/>Hiện Sinh</h2>
          <p className="content-text">
            "Sự tồn tại đi trước bản chất". Con người bị ném vào thế giới này mà không có một mục đích định sẵn, và qua những lựa chọn tự do, chúng ta tự định nghĩa chính mình.
          </p>
          <div className="page-number">Trang 4</div>
        </>
      ),
      back: (
        <>
          <h2 className="chapter-title">Chương IV:<br/>Tự Do</h2>
          <p className="content-text">
            Tự do mang theo gánh nặng của trách nhiệm. Tự do không phải là làm bất cứ điều gì ta muốn, mà là khả năng tự làm chủ chính mình và hành động theo đạo đức.
          </p>
          <div className="page-number">Trang 5</div>
        </>
      )
    },
    {
      id: 3,
      front: (
        <>
          <h2 className="chapter-title">Chương V:<br/>Hư Vô</h2>
          <p className="content-text">
            Phủ nhận ý nghĩa khách quan của cuộc sống. Trong khoảng không vô tận, không có một chân lý tuyệt đối nào. Sự trống rỗng này mở ra cánh cửa của sự tự do tuyệt đối để kiến tạo.
          </p>
          <div className="page-number">Trang 6</div>
        </>
      ),
      back: (
        <div className="cover-front" style={{ background: '#f4f9f9', border: 'none', boxShadow: 'none' }}>
          <h2 className="cover-title" style={{ fontSize: '2.5rem' }}>Hết</h2>
          <p className="cover-subtitle">Cuộc hành trình tư tưởng không bao giờ kết thúc.</p>
          <div className="page-number" style={{ bottom: '1.5rem', left: 'auto', right: '50%', transform: 'translateX(50%)' }}>Trang 7</div>
        </div>
      )
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
            const zIndex = isFlipped ? index : sheets.length - index;
            
            return (
              <div 
                key={sheet.id}
                className={`book-sheet ${isFlipped ? 'flipped' : ''}`}
                style={{ 
                  zIndex,
                  transform: `rotateY(${isFlipped ? -180 : 0}deg) translateZ(${isFlipped ? index * 2 : (sheets.length - index) * 2}px)`
                }}
                onClick={() => isFlipped ? prevPage() : nextPage()}
              >
                <div className="page-front">
                  {sheet.front}
                </div>
                <div className="page-back">
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
