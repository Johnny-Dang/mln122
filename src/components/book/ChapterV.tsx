"use client";

import React, { useState } from "react";

const CHAPTER_ACCENT = "#3a6a91";

const tools = [
  {
    name: "NotebookLM",
    icon: "📓",
    color: CHAPTER_ACCENT,
    items: [
      "Tạo hình ảnh",
      "Truy xuất dữ liệu để tạo câu trả lời",
      "Tạo video",
    ],
  },
  {
    name: "ChatGPT",
    icon: "🤖",
    color: CHAPTER_ACCENT,
    items: [
      "Tìm kiếm thông tin về các nguyên lý",
      "Hỗ trợ quá trình làm website",
      "Chỉnh lỗi sai ở hình ảnh tạo từ NotebookLM",
    ],
  },
  {
    name: "Gemini",
    icon: "✨",
    color: CHAPTER_ACCENT,
    items: [
      "Phân tích đề tài, tạo bộ câu hỏi trắc nghiệm",
      "Trích nguồn đúng Harvard style và số trang",
    ],
  },
];

export default function ChapterV() {
  const [openSet, setOpenSet] = useState<Set<number>>(
    () => new Set(tools.map((_, i) => i)),
  );

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="book-chapter">
      <h2 className="chapter-title chapter-title--wrap">
        V. Ứng dụng Công nghệ AI trong nghiên cứu
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          marginTop: "1rem",
          maxHeight: "75%",
          overflowY: "auto",
          paddingRight: "4px",
        }}
      >
        {tools.map((tool, i) => {
          const isOpen = openSet.has(i);
          return (
            <div
              key={i}
              style={{
                border: `1px solid ${isOpen ? tool.color + "55" : "rgba(0,0,0,0.1)"}`,
                borderRadius: "0.75rem",
                background: isOpen
                  ? tool.color + "0d"
                  : "rgba(255,255,255,0.6)",
                overflow: "hidden",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              {/* Clickable header — uses <button> for reliable single-click */}
              <button
                type="button"
                onClick={() => toggle(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  width: "100%",
                  padding: "0.85rem 1rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>
                  {tool.icon}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: tool.color,
                    fontSize: "1rem",
                    fontFamily: "var(--font-sans)",
                    flex: 1,
                  }}
                >
                  {tool.name}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: tool.color,
                    fontWeight: 700,
                  }}
                >
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {/* Expandable content — no absolute positioning, no z-index */}
              {isOpen && (
                <ul
                  style={{
                    margin: "0 1rem 0.85rem 1rem",
                    paddingLeft: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                    borderTop: `1px solid ${tool.color}33`,
                    paddingTop: "0.5rem",
                  }}
                >
                  {tool.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--chapter-text)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className="page-number">Trang 9</div>
    </div>
  );
}
