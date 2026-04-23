"use client";

import React from "react";

/**
 * ChapterIII1 — Sơ đồ lợi ích kinh tế và mức độ phụ thuộc
 * Uses the user-provided scatter-plot image.
 */

const chapterText = "#3a6a91";
const chapterMuted = "#5a7d9e";

export default function ChapterIII1() {
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
        3.1. Ví dụ điển hình
      </h3>

      {/* Chart sub-title */}
      <p
        style={{
          fontSize: "0.85rem",
          color: chapterMuted,
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "0.3rem",
          lineHeight: "1.35",
        }}
      >
        Lợi ích kinh tế và mức độ phụ thuộc của Việt Nam theo đối tác
      </p>

      {/* Chart Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        <img
          src="/images/Screenshot 2026-04-23 155354.png"
          alt="Sơ đồ lợi ích kinh tế và mức độ phụ thuộc của Việt Nam theo đối tác"
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "8px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        />
      </div>

      {/* Insight box */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          background: "linear-gradient(135deg, #e8f4f8 0%, #dfeef5 100%)",
          border: "1px solid #b0d4e8",
          borderRadius: "10px",
          padding: "0.65rem 1rem",
          marginTop: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "1.6rem",
            flexShrink: 0,
            background: "linear-gradient(135deg, #4fc3f7, #0288d1)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          💡
        </span>
        <div>
          <strong
            style={{
              color: chapterText,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Insight
          </strong>
          <p
            style={{
              margin: "0.15rem 0 0",
              fontSize: "0.82rem",
              color: chapterText,
              lineHeight: "1.45",
            }}
          >
            Việt Nam không loại bỏ phụ thuộc mà đang{" "}
            <strong>quản trị và phân bổ phụ thuộc</strong> để tối ưu lợi ích.
          </p>
        </div>
      </div>

      <div className="page-number">Trang 6</div>
    </div>
  );
}
