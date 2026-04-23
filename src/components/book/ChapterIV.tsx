"use client";

import React, { useState } from "react";

export default function ChapterIV() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIdx((prev) => (prev === i ? null : i));

  return (
    <div className="book-chapter">
      <h2 className="chapter-title chapter-title--wrap">
        IV. Kết luận: Ngoại giao &quot;Cây tre&quot; và Tầm nhìn tương lai
      </h2>

      {/* Full paragraph as written by user */}
      <p className="content-text">
        Việt Nam đã thiết lập quan hệ đối tác chiến lược toàn diện với nhiều
        cường quốc lớn như <strong>Hoa Kỳ, Trung Quốc, Nhật Bản</strong> và{" "}
        <strong>Hàn Quốc</strong>. Điều này đặt ra một câu hỏi quan trọng: liệu
        ngoại giao <em>"cây tre"</em> có thực sự giúp Việt Nam tăng cường tự chủ
        chiến lược, hay vô tình tạo ra sự phụ thuộc vào nhiều đối tác cùng lúc?
        Khi các nước lớn cạnh tranh lợi ích ngày càng gay gắt, việc duy trì cân
        bằng quan hệ liệu có bền vững hay sẽ khiến Việt Nam rơi vào thế bị động?
        Và quan trọng hơn, đâu là giới hạn để Việt Nam vừa hội nhập sâu rộng,
        vừa giữ vững độc lập và quyền tự quyết trong chiến lược phát triển?
      </p>

      {/* Three interactive accordion cards */}

      {/* Closing quote */}
      <p
        style={{
          marginTop: "0.9rem",
          fontSize: "0.85rem",
          fontStyle: "italic",
          color: "var(--chapter-text-muted)",
          fontFamily: "var(--font-serif)",
          textAlign: "center",
        }}
      >
        "Cây tre uốn mình trước gió, nhưng không gãy — đó là bản lĩnh của một
        dân tộc."
      </p>

      <div className="page-number">Trang 8</div>
    </div>
  );
}
