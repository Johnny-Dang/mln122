import React from 'react';

export default function BackCover() {
  return (
    <div className="cover-front" style={{ background: '#f4f9f9', border: 'none', boxShadow: 'none' }}>
      <h2 className="cover-title" style={{ fontSize: '2.5rem' }}>Hết</h2>
      <p className="cover-subtitle">Cuộc hành trình tư tưởng không bao giờ kết thúc.</p>
      <div className="page-number" style={{ bottom: '1.5rem', left: 'auto', right: '50%', transform: 'translateX(50%)' }}>Trang 7</div>
    </div>
  );
}
