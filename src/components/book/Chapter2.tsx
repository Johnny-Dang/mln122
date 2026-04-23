"use client";

import React, { useState } from 'react';

export default function Chapter2() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showExample, setShowExample] = useState<boolean>(false);

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections = [
    {
      id: 1,
      title: "1. Cơ sở lý luận (Theory)",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Kinh tế chính trị Mác – Lênin:</strong> Kinh tế là cơ sở hạ tầng (đóng vai trò quyết định).</li>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Kiến trúc thượng tầng:</strong> Quốc phòng, an ninh, đối ngoại (tác động trở lại).</li>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Quan hệ biện chứng:</strong> Kinh tế quyết định sức mạnh của quốc phòng, an ninh và đối ngoại. Ngược lại, thượng tầng vững chắc bảo vệ, tạo điều kiện cho kinh tế phát triển.</li>
        </ul>
      )
    },
    {
      id: 2,
      title: "2. Vai trò của sự kết hợp (Implication)",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Bảo vệ chủ quyền, an ninh quốc gia:</strong> Giữ vững độc lập, toàn vẹn lãnh thổ.</li>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Duy trì ổn định chính trị:</strong> Tạo môi trường hòa bình, an toàn để phát triển.</li>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Tạo cân bằng quan hệ quốc tế:</strong> Nâng cao vị thế, tạo thế đan xen lợi ích chiến lược.</li>
          <li><strong style={{ color: 'var(--accent-blue)' }}>• Hạn chế phụ thuộc:</strong> Giữ vững tự chủ chiến lược, không bị lôi kéo hoặc áp đặt từ bên ngoài.</li>
        </ul>
      )
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 className="chapter-title" style={{ fontSize: '1.6rem', marginBottom: '1.2rem', lineHeight: '1.4' }}>
        I. Nền tảng lý thuyết<br/>
        <span style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontWeight: 'normal', fontStyle: 'italic', display: 'block', marginTop: '0.3rem' }}>
          • Kết hợp KT với quốc phòng, an ninh, đối ngoại
        </span>
      </h2>
      
      <div 
        style={{ 
          flex: 1, 
          overflowY: 'auto', 
          paddingRight: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          marginBottom: '2rem'
        }}
        className="custom-scrollbar"
      >
        {sections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div 
              key={section.id} 
              style={{
                flexShrink: 0,
                background: isOpen ? 'rgba(0, 168, 255, 0.05)' : 'var(--glass-bg)',
                border: `1px solid ${isOpen ? 'rgba(0, 168, 255, 0.3)' : 'var(--glass-border)'}`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isOpen ? '0 4px 15px rgba(0, 168, 255, 0.08)' : '0 2px 5px rgba(0,0,0,0.02)',
              }}
            >
              <div 
                onClick={(e) => { e.stopPropagation(); toggleSection(section.id); }}
                style={{
                  padding: '1rem 1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: isOpen ? '700' : '600',
                  color: isOpen ? 'var(--accent-blue)' : 'var(--text-main)',
                  userSelect: 'none'
                }}
              >
                <span>{section.title}</span>
                <span style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease',
                  fontSize: '0.8rem',
                  color: isOpen ? 'var(--accent-blue)' : 'var(--text-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isOpen ? 'rgba(0, 168, 255, 0.1)' : 'transparent'
                }}>
                  ▼
                </span>
              </div>
              
              <div 
                style={{
                  maxHeight: isOpen ? '500px' : '0',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: isOpen ? '0 1.2rem 1.2rem 1.2rem' : '0 1.2rem',
                  fontSize: '0.95rem',
                  color: 'var(--text-main)',
                  lineHeight: '1.6'
                }}
              >
                <div style={{ 
                  paddingTop: '0.8rem', 
                  borderTop: `1px dashed ${isOpen ? 'rgba(0, 168, 255, 0.2)' : 'rgba(0,0,0,0.1)'}` 
                }}>
                  {section.content}
                </div>
              </div>
            </div>
          )
        })}

        {/* Example Button */}
        <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowExample(!showExample);
            }}
            style={{
              padding: '0.6rem 1.2rem',
              background: showExample ? 'var(--accent-blue)' : 'transparent',
              color: showExample ? 'white' : 'var(--accent-blue)',
              border: '1px solid var(--accent-blue)',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: showExample ? '0 4px 10px rgba(0, 168, 255, 0.3)' : 'none',
              fontFamily: 'inherit',
              fontSize: '0.9rem'
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>💡</span> 
            {showExample ? 'Ẩn ví dụ thực tiễn' : 'Xem ví dụ thực tiễn'}
          </button>
        </div>

        {/* Example Content */}
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
          maxHeight: showExample ? '3000px' : '0',
          opacity: showExample ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          marginTop: showExample ? '0.5rem' : '0',
          marginBottom: showExample ? '1rem' : '0',
          flexShrink: 0
        }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(0, 168, 255, 0.05) 0%, rgba(0, 168, 255, 0.15) 100%)',
            border: '1px solid rgba(0, 168, 255, 0.4)',
            borderRadius: '12px',
            padding: '1.2rem',
            position: 'relative',
            boxShadow: '0 4px 15px rgba(0, 168, 255, 0.15)',
          }}>
             <h4 style={{ 
               color: 'var(--accent-blue)', 
               marginTop: 0, 
               marginBottom: '0.8rem', 
               fontSize: '1.05rem', 
               display: 'flex',
               alignItems: 'center',
               gap: '0.4rem'
             }}>
                <span style={{ fontSize: '1.2rem' }}>📌</span> 3. Thực tiễn Việt Nam (Example)
             </h4>
             <p style={{ 
               margin: 0, 
               color: 'var(--text-main)', 
               lineHeight: '1.5', 
               fontWeight: '500',
               fontSize: '0.95rem',
               marginBottom: '1rem'
             }}>
               Mô hình kết hợp chặt chẽ giữa Kinh tế - Quốc phòng, An ninh - Đối ngoại nhằm bảo vệ chủ quyền, duy trì ổn định, tạo thế cân bằng và thúc đẩy phát triển bền vững.
             </p>
             <div style={{
               width: '100%',
               borderRadius: '8px',
               overflow: 'hidden',
               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
               border: '1px solid rgba(0, 168, 255, 0.2)',
               background: 'white'
             }}>
               <img 
                 src="/images/example-chapter2.jpg" 
                 alt="Sơ đồ: Kết hợp chặt chẽ giữa Kinh tế - Quốc phòng, An ninh - Đối ngoại" 
                 style={{
                   width: '100%',
                   display: 'block',
                   objectFit: 'contain'
                 }}
               />
             </div>
          </div>
        </div>
      </div>

      <div className="page-number">Trang 3</div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 168, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 168, 255, 0.4);
        }
      `}} />
    </div>
  );
}
