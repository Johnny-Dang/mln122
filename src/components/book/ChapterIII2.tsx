"use client";

import React from "react";

/**
 * ChapterIII2 — Video: Đối tác chiến lược của Việt Nam
 */

const chapterText = "#3a6a91";
const chapterMuted = "#5a7d9e";

export default function ChapterIII2() {
  return (
    <div
      className="book-chapter"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Section heading — matches Preface TOC */}
      <h2
        className="chapter-title"
        style={{
          fontSize: "1.6rem",
          marginBottom: "0.4rem",
          lineHeight: "1.4",
          color: chapterText,
        }}
      >
        III. Phân tích thực tiễn và So sánh
      </h2>

      {/* Sub-section title */}
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: chapterText,
          fontFamily: "var(--font-serif)",
          marginBottom: "0.3rem",
          borderLeft: `3px solid ${chapterText}`,
          paddingLeft: "0.6rem",
        }}
      >
        3.2. Dữ liệu trực quan (Video/Sơ đồ)
      </h3>

      {/* Chart sub-title */}
      <p
        style={{
          fontSize: "0.85rem",
          color: chapterMuted,
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "0.5rem",
          lineHeight: "1.35",
        }}
      >
        Đối tác chiến lược toàn diện của Việt Nam
      </p>

      {/* Video Player */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        <video
          controls
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            background: "#000",
          }}
        >
          <source src="/Video/Đối_Tác_Chiến_Lược_Của_VN.mp4" type="video/mp4" />
          Trình duyệt không hỗ trợ phát video.
        </video>
      </div>

      {/* Summary insight */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.7rem",
          background: "linear-gradient(135deg, #e8f0f6 0%, #dfe9f2 100%)",
          border: "1px solid rgba(58, 106, 145, 0.25)",
          borderRadius: "10px",
          padding: "0.6rem 0.9rem",
          marginTop: "0.5rem",
        }}
      >
        <span
          style={{ fontSize: "1.3rem", flexShrink: 0, marginTop: "0.1rem" }}
        >
          📊
        </span>
        <div>
          <strong
            style={{
              color: chapterText,
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Nhận xét
          </strong>
          <p
            style={{
              margin: "0.1rem 0 0",
              fontSize: "0.78rem",
              color: chapterText,
              lineHeight: "1.45",
            }}
          >
            Trung Quốc là đối tác lớn nhất nhưng VN{" "}
            <strong>nhập siêu lớn</strong>. Hoa Kỳ là thị trường
            <strong> xuất siêu</strong> quan trọng nhất. Cán cân thương mại cho
            thấy sự cần thiết của chiến lược
            <strong> đa dạng hóa</strong> để giảm rủi ro phụ thuộc.
          </p>
        </div>
      </div>

      <div className="page-number">Trang 7</div>
    </div>
  );
}
