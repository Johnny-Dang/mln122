"use client";

import React, { useState } from "react";

export default function ChapterI2() {
  const [openSections, setOpenSections] = useState<Set<number>>(
    () => new Set(),
  );
  const [showExample, setShowExample] = useState<boolean>(false);

  const toggleSection = (id: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const sections = [
    {
      id: 1,
      title: "2.1. Cơ sở lý luận Mác - Lênin",
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
            <strong style={{ color: "var(--chapter-text)" }}>
              • Kinh tế chính trị Mác – Lênin:
            </strong>{" "}
            Kinh tế là cơ sở hạ tầng (đóng vai trò quyết định).
          </li>
          <li>
            <strong style={{ color: "var(--chapter-text)" }}>
              • Kiến trúc thượng tầng:
            </strong>{" "}
            Quốc phòng, an ninh, đối ngoại (tác động trở lại).
          </li>
          <li>
            <strong style={{ color: "var(--chapter-text)" }}>
              • Quan hệ biện chứng:
            </strong>{" "}
            Kinh tế quyết định sức mạnh của quốc phòng, an ninh và đối ngoại.
            Ngược lại, thượng tầng vững chắc bảo vệ, tạo điều kiện cho kinh tế
            phát triển.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "2.2. Vai trò của sự kết hợp",
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
            <strong style={{ color: "var(--chapter-text)" }}>
              • Bảo vệ chủ quyền, an ninh quốc gia:
            </strong>{" "}
            Giữ vững độc lập, toàn vẹn lãnh thổ.
          </li>
          <li>
            <strong style={{ color: "var(--chapter-text)" }}>
              • Duy trì ổn định chính trị:
            </strong>{" "}
            Tạo môi trường hòa bình, an toàn để phát triển.
          </li>
          <li>
            <strong style={{ color: "var(--chapter-text)" }}>
              • Tạo cân bằng quan hệ quốc tế:
            </strong>{" "}
            Nâng cao vị thế, tạo thế đan xen lợi ích chiến lược.
          </li>
          <li>
            <strong style={{ color: "var(--chapter-text)" }}>
              • Hạn chế phụ thuộc:
            </strong>{" "}
            Giữ vững tự chủ chiến lược, không bị lôi kéo hoặc áp đặt từ bên
            ngoài.
          </li>
        </ul>
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
        I. Nền tảng lý thuyết về Hội nhập Kinh tế Quốc tế
        <br />
        <span
          style={{
            fontSize: "1.1rem",
            color: "var(--chapter-text-muted)",
            fontWeight: "normal",
            fontStyle: "italic",
            display: "block",
            marginTop: "0.3rem",
          }}
        >
          2. Kết hợp Kinh tế với Quốc phòng, An ninh và Đối ngoại
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
                  ? "rgba(58, 106, 145, 0.05)"
                  : "var(--glass-bg)",
                border: `1px solid ${isOpen ? "rgba(58, 106, 145, 0.3)" : "var(--glass-border)"}`,
                borderRadius: "12px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isOpen
                  ? "0 4px 15px rgba(58, 106, 145, 0.08)"
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
                  color: isOpen ? "var(--chapter-text)" : "var(--chapter-text)",
                  userSelect: "none",
                }}
              >
                <span>{section.title}</span>
                <span
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: "0.8rem",
                    color: isOpen ? "var(--chapter-text)" : "var(--chapter-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: isOpen
                      ? "rgba(58, 106, 145, 0.1)"
                      : "transparent",
                  }}
                >
                  ▼
                </span>
              </div>

              <div
                style={{
                  maxHeight: isOpen ? "500px" : "0",
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
                    borderTop: `1px dashed ${isOpen ? "rgba(58, 106, 145, 0.2)" : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  {section.content}
                </div>
              </div>
            </div>
          );
        })}

        {/* Example Button */}
        <div
          style={{
            marginTop: "0.5rem",
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowExample(!showExample);
            }}
            style={{
              padding: "0.6rem 1.2rem",
              background: showExample ? "var(--chapter-text)" : "transparent",
              color: showExample ? "white" : "var(--chapter-text)",
              border: "1px solid var(--chapter-text)",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: showExample
                ? "0 4px 10px rgba(58, 106, 145, 0.3)"
                : "none",
              fontFamily: "inherit",
              fontSize: "0.9rem",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>💡</span>
            {showExample ? "Ẩn ví dụ thực tiễn" : "Xem ví dụ thực tiễn"}
          </button>
        </div>

        {/* Example Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: showExample ? "3000px" : "0",
            opacity: showExample ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            marginTop: showExample ? "0.5rem" : "0",
            marginBottom: showExample ? "1rem" : "0",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(58, 106, 145, 0.05) 0%, rgba(58, 106, 145, 0.15) 100%)",
              border: "1px solid rgba(58, 106, 145, 0.4)",
              borderRadius: "12px",
              padding: "1.2rem",
              position: "relative",
              boxShadow: "0 4px 15px rgba(58, 106, 145, 0.15)",
            }}
          >
            <h4
              style={{
                color: "var(--chapter-text)",
                marginTop: 0,
                marginBottom: "0.8rem",
                fontSize: "1.05rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>📌</span> 2.3. Thực tiễn tại
              Việt Nam
            </h4>
            <div
              style={{
                color: "var(--chapter-text)",
                lineHeight: "1.5",
                fontWeight: "500",
                fontSize: "0.95rem",
                marginBottom: "1.2rem",
              }}
            >
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  margin: "0 0 0.8rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <li>Mở rộng quan hệ với các nước lớn (Mỹ, Trung Quốc…)</li>
                <li>
                  Đồng thời thực hiện chính sách quốc phòng{" "}
                  <strong style={{ color: "var(--chapter-text)" }}>
                    "bốn không"
                  </strong>
                </li>
              </ul>
              <div
                style={{
                  background: "rgba(58, 106, 145, 0.08)",
                  padding: "0.8rem 1rem",
                  borderRadius: "8px",
                  borderLeft: "4px solid var(--chapter-text)",
                }}
              >
                <strong
                  style={{
                    color: "var(--chapter-text)",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  → Kết hợp:
                </strong>
                <ul
                  style={{
                    paddingLeft: "1.2rem",
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <li>Phát triển kinh tế (hợp tác, thương mại)</li>
                  <li>Giữ độc lập – tự chủ – cân bằng chiến lược</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(58, 106, 145, 0.2)",
                background: "white",
              }}
            >
              <img
                src="/images/example-chapter2.jpg"
                alt="Sơ đồ: Kết hợp chặt chẽ giữa Kinh tế - Quốc phòng, An ninh - Đối ngoại"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="page-number">Trang 3</div>

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
          background: rgba(58, 106, 145, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(58, 106, 145, 0.4);
        }
      `,
        }}
      />
    </div>
  );
}
