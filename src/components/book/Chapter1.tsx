"use client";

import React, { useState } from 'react';

export default function Chapter1() {
  const [showKey, setShowKey] = useState(false);

  return (
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
  );
}
