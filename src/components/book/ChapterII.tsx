"use client";

import React, { useState } from "react";

export default function ChapterII() {
  const [openSections, setOpenSections] = useState<Set<number>>(
    () => new Set([1]),
  );

  const toggleSection = (id: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const colorAccent = "#3a6a91";
  const colorAccentRgba = "rgba(58, 106, 145,";

  const sections = [
    {
      id: 1,
      title: "1. Khái niệm",
      content: (
        <ul
          style={{
            paddingLeft: "0",
            margin: "0",
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          <li>
            <strong style={{ color: colorAccent }}>• Tự chủ kinh tế:</strong>{" "}
            Không bị nước khác chi phối về chính sách và định hướng phát triển.
          </li>
          <li>
            <strong style={{ color: colorAccent }}>
              • Phụ thuộc (lẫn nhau):
            </strong>{" "}
            Các nền kinh tế gắn kết, cần nhau trong bối cảnh toàn cầu hóa.
          </li>
          <li
            style={{
              background: `${colorAccentRgba} 0.1)`,
              padding: "0.5rem 0.8rem",
              borderRadius: "6px",
              borderLeft: `3px solid ${colorAccent}`,
              marginTop: "0.2rem",
            }}
          >
            <strong>→ Lưu ý:</strong> Nếu hội nhập thụ động, nguy cơ lệ thuộc
            một chiều sẽ gia tăng.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "2. Mặt tích cực",
      content: (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <div
            style={{
              padding: "0.65rem 0.8rem",
              borderRadius: "8px",
              background: `${colorAccentRgba} 0.08)`,
            }}
          >
            <strong style={{ color: colorAccent }}>Tự chủ:</strong>
            <ul
              style={{
                margin: "0.4rem 0 0",
                paddingLeft: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <li>Giữ vững độc lập, an ninh quốc gia.</li>
              <li>Tạo nền tảng hội nhập hiệu quả.</li>
            </ul>
          </div>

          <div
            style={{
              padding: "0.65rem 0.8rem",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.7)",
              border: `1px dashed ${colorAccent}`,
            }}
          >
            <strong style={{ color: colorAccent }}>Phụ thuộc lẫn nhau:</strong>
            <ul
              style={{
                margin: "0.4rem 0 0",
                paddingLeft: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <li>Tiếp cận vốn, công nghệ, kinh nghiệm.</li>
              <li>Mở rộng thị trường, tăng cạnh tranh.</li>
              <li>Nâng cao chất lượng nhân lực, đa dạng hàng hóa.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "3. Mặt tiêu cực",
      content: (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <div
            style={{
              padding: "0.65rem 0.8rem",
              borderRadius: "8px",
              background: "rgba(58, 106, 145, 0.08)",
              borderLeft: "3px solid #3a6a91",
            }}
          >
            <strong style={{ color: "#3a6a91" }}>Quá tự chủ (đóng cửa):</strong>
            <ul
              style={{
                margin: "0.4rem 0 0",
                paddingLeft: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <li>Lạc hậu, tụt hậu.</li>
              <li>Thiếu nguồn lực phát triển.</li>
              <li>Công nghệ chậm đổi mới.</li>
              <li>Thị trường bị thu hẹp.</li>
              <li>Giảm động lực phát triển.</li>
            </ul>
          </div>

          <div
            style={{
              padding: "0.65rem 0.8rem",
              borderRadius: "8px",
              background: "rgba(58, 106, 145, 0.06)",
              borderLeft: "3px solid #3a6a91",
            }}
          >
            <strong style={{ color: "#3a6a91" }}>Quá phụ thuộc:</strong>
            <ul
              style={{
                margin: "0.4rem 0 0",
                paddingLeft: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <li>Dễ bị ảnh hưởng bởi biến động toàn cầu.</li>
              <li>Nguy cơ nợ, bất bình đẳng.</li>
              <li>Trở thành nơi tiếp nhận công nghệ lạc hậu.</li>
              <li>Ảnh hưởng chủ quyền, an ninh.</li>
              <li>Gia tăng khoảng cách giàu nghèo.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className="book-chapter"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <h2
        className="chapter-title"
        style={{
          fontSize: "1.6rem",
          marginBottom: "1.2rem",
          lineHeight: "1.4",
        }}
      >
        II. Tự chủ và Phụ thuộc trong bối cảnh mới
        <span
          style={{
            fontSize: "1.05rem",
            color: "var(--chapter-text-muted)",
            fontWeight: "normal",
            fontStyle: "italic",
            display: "block",
            marginTop: "0.3rem",
          }}
        >
          2.1 Khái niệm, 2.2 Mặt tích cực, 2.3 Mặt tiêu cực
        </span>
      </h2>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingRight: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          marginBottom: "2rem",
        }}
        className="custom-scrollbar"
      >
        {sections.map((section) => {
          const isOpen = openSections.has(section.id);
          return (
            <div
              key={section.id}
              style={{
                flexShrink: 0,
                background: isOpen
                  ? `${colorAccentRgba} 0.05)`
                  : "var(--glass-bg)",
                border: `1px solid ${isOpen ? `${colorAccentRgba} 0.3)` : "var(--glass-border)"}`,
                borderRadius: "12px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isOpen
                  ? `0 4px 15px ${colorAccentRgba} 0.08)`
                  : "0 2px 5px rgba(0,0,0,0.02)",
              }}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection(section.id);
                }}
                style={{
                  padding: "1rem 1.2rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: isOpen ? "700" : "600",
                  color: isOpen ? colorAccent : "var(--chapter-text)",
                  userSelect: "none",
                }}
              >
                <span>{section.title}</span>
                <span
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: "0.8rem",
                    color: isOpen ? colorAccent : "var(--chapter-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: isOpen
                      ? `${colorAccentRgba} 0.1)`
                      : "transparent",
                  }}
                >
                  ▼
                </span>
              </div>

              <div
                style={{
                  maxHeight: isOpen ? "800px" : "0",
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  padding: isOpen ? "0 1.2rem 1.2rem 1.2rem" : "0 1.2rem",
                  fontSize: "0.95rem",
                  color: "var(--chapter-text)",
                  lineHeight: "1.6",
                }}
              >
                <div
                  style={{
                    paddingTop: "0.8rem",
                    borderTop: `1px dashed ${isOpen ? `${colorAccentRgba} 0.2)` : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  {section.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="page-number">Trang 5</div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${colorAccentRgba} 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${colorAccentRgba} 0.4);
        }
      `,
        }}
      />
    </div>
  );
}
