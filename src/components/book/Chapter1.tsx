"use client";

import React, { useState } from 'react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showExample, setShowExample] = useState<boolean>(false);

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections = [
    {
      id: 1,
      title: "1. Nhận thức: Cơ hội & Thách thức",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Góc nhìn toàn diện:</strong> Không chỉ thấy "Màu hồng" (thị trường, vốn, công nghệ).</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Nhận diện rủi ro:</strong> Biến động tài chính, an ninh, văn hóa.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Tránh 2 thái cực:</strong> Ảo tưởng &rarr; Mất cảnh giác. Sợ hãi &rarr; Khép kín, thụ động.</li>
        </ul>
      )
    },
    {
      id: 2,
      title: "2. Chiến lược & Lộ trình hội nhập",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Quy hoạch tổng thể:</strong> Đánh giá đúng thực lực (điểm mạnh/yếu).</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Bám sát xu hướng:</strong> Thích ứng với các FTA thế hệ mới, CPTPP.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Tính linh hoạt:</strong> Điều chỉnh kịp thời, ứng phó rủi ro hiệu quả.</li>
        </ul>
      )
    },
    {
      id: 3,
      title: "3. Chủ động tham gia & Thực thi cam kết",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Hội nhập sâu rộng:</strong> WTO, ASEAN, APEC...</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Tuân thủ "Luật chơi chung":</strong> Cắt giảm thuế quan, mở cửa thị trường.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Mục tiêu:</strong> Tận dụng cơ hội thương mại & Nâng tầm uy tín quốc gia.</li>
        </ul>
      )
    },
    {
      id: 4,
      title: "4. Hoàn thiện Thể chế & Pháp luật",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Yêu cầu tiên quyết:</strong> Tương đồng với thể chế kinh tế quốc tế.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Vai trò Nhà nước:</strong> Rà soát, đồng bộ luật (Đầu tư, Thương mại, Doanh nghiệp...).</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Môi trường kinh doanh:</strong> Minh bạch, cạnh tranh lành mạnh, xóa rào cản độc quyền.</li>
        </ul>
      )
    },
    {
      id: 5,
      title: "5. Nâng cao Năng lực cạnh tranh",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Nguy cơ:</strong> Hội nhập kém &rarr; Thua ngay trên "sân nhà".</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Giải pháp vĩ mô:</strong> Hỗ trợ chuỗi cung ứng, đào tạo nhân lực, pháp lý.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Giải pháp vi mô:</strong> Đổi mới công nghệ, nâng cấp quản trị & nhân sự.</li>
        </ul>
      )
    },
    {
      id: 6,
      title: "6. Xây dựng Kinh tế Độc lập - Tự chủ",
      content: (
        <ul style={{ paddingLeft: '0', margin: '0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Nguyên tắc cốt lõi:</strong> Hội nhập nhưng không phụ thuộc, không bị áp đặt.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Định hướng:</strong> Chủ động hoàn toàn về đường lối phát triển.</li>
          <li><strong style={{ color: 'var(--text-gold-bright)' }}>• Phát triển toàn diện:</strong> Gắn kết Kinh tế &rarr; Quốc phòng, An ninh & Đối ngoại.</li>
        </ul>
      )
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 className="chapter-title" style={{ fontSize: '1.6rem', marginBottom: '1.2rem', lineHeight: '1.4' }}>
        I. Nền tảng lý thuyết về Hội nhập Kinh tế Quốc tế<br/>
        <span style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontWeight: 'normal', fontStyle: 'italic', display: 'block', marginTop: '0.3rem' }}>
          1. Nâng cao hiệu quả Hội nhập KTQT
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
                background: isOpen ? 'rgba(201, 160, 18, 0.05)' : 'var(--glass-bg)',
                border: `1px solid ${isOpen ? 'rgba(201, 160, 18, 0.3)' : 'var(--glass-border)'}`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isOpen ? '0 4px 15px rgba(201, 160, 18, 0.08)' : '0 2px 5px rgba(0,0,0,0.02)',
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
                  color: isOpen ? 'var(--text-gold-bright)' : 'var(--text-main)',
                  userSelect: 'none'
                }}
              >
                <span>{section.title}</span>
                <span style={{ 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.3s ease',
                  fontSize: '0.8rem',
                  color: isOpen ? 'var(--text-gold-bright)' : 'var(--text-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isOpen ? 'rgba(201, 160, 18, 0.1)' : 'transparent'
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
                  borderTop: `1px dashed ${isOpen ? 'rgba(201, 160, 18, 0.2)' : 'rgba(0,0,0,0.1)'}` 
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
              background: showExample ? 'var(--text-gold-bright)' : 'transparent',
              color: showExample ? 'white' : 'var(--text-gold-bright)',
              border: '1px solid var(--text-gold-bright)',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: showExample ? '0 4px 10px rgba(201, 160, 18, 0.3)' : 'none',
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
            background: 'linear-gradient(145deg, rgba(201, 160, 18, 0.05) 0%, rgba(201, 160, 18, 0.15) 100%)',
            border: '1px solid rgba(201, 160, 18, 0.4)',
            borderRadius: '12px',
            padding: '1.2rem',
            position: 'relative',
            boxShadow: '0 4px 15px rgba(201, 160, 18, 0.15)',
          }}>
             <div style={{ 
               position: 'absolute', 
               top: '1.2rem', 
               right: '1.2rem', 
               fontSize: '0.75rem', 
               color: 'var(--text-gold-bright)', 
               fontStyle: 'italic',
               opacity: 0.8,
               maxWidth: '120px',
               textAlign: 'right',
               lineHeight: '1.2'
             }}>
               (Trung tâm WTO và Hội nhập, 2023)
             </div>
             <h4 style={{ 
               color: 'var(--text-gold-bright)', 
               marginTop: 0, 
               marginBottom: '0.8rem', 
               fontSize: '1.05rem', 
               paddingRight: '130px',
               display: 'flex',
               alignItems: 'center',
               gap: '0.4rem'
             }}>
                <span style={{ fontSize: '1.2rem' }}>📌</span> Ví dụ thực tiễn
             </h4>
             <p style={{ 
               margin: 0, 
               color: 'var(--text-main)', 
               lineHeight: '1.5', 
               fontWeight: '500',
               fontSize: '0.95rem',
               marginBottom: '1rem'
             }}>
               Việt Nam áp dụng "Thuế tối thiểu toàn cầu" từ 1/1/2024 – Sự thay đổi luật chơi để giữ chân các "Đại bàng" FDI (Samsung, Intel, LG...).
             </p>
             <div style={{
               width: '100%',
               borderRadius: '8px',
               overflow: 'hidden',
               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
               border: '1px solid rgba(201, 160, 18, 0.2)'
             }}>
               <img 
                 src="/images/fdi-vietnam.jpg" 
                 alt="Ví dụ thực tiễn: Thuế tối thiểu toàn cầu tại Việt Nam" 
                 style={{
                   width: '100%',
                   maxHeight: '400px',
                   display: 'block',
                   objectFit: 'contain'
                 }}
               />
             </div>
          </div>
        </div>
      </div>

      <div className="page-number">Trang 2</div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(201, 160, 18, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 160, 18, 0.4);
        }
      `}} />
    </div>
  );
}
