"use client";

import React, { useState } from "react";

export default function ChapterI3() {
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

  const colorAccent = "#3a6a91";
  const colorAccentRgba = "rgba(58, 106, 145,";

  const sections = [
    {
      id: 1,
      title: "3.1. Nguyên tắc đối ngoại cơ bản",
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
            <strong style={{ color: colorAccent }}>• Bình đẳng:</strong> Tôn
            trọng lẫn nhau, không phân biệt nước lớn - nước nhỏ.
          </li>
          <li>
            <strong style={{ color: colorAccent }}>• Cùng có lợi:</strong> Đảm
            bảo hài hòa lợi ích quốc gia - dân tộc với đối tác quốc tế.
          </li>
          <li>
            <strong style={{ color: colorAccent }}>
              • Tôn trọng chủ quyền:
            </strong>{" "}
            Tuyệt đối không can thiệp vào công việc nội bộ của nhau.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "3.2. Cơ sở lý luận Mác – Lênin",
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
            <strong style={{ color: colorAccent }}>• Quan hệ sản xuất:</strong>{" "}
            Điều chỉnh quan hệ sản xuất đối ngoại sao cho phù hợp với trình độ
            phát triển của lực lượng sản xuất.
          </li>
          <li>
            <strong style={{ color: colorAccent }}>
              • Quan hệ biện chứng:
            </strong>{" "}
            Thể hiện rõ mối quan hệ giữa "Phụ thuộc" (hội nhập) và "Tự chủ" (độc
            lập).
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
            <strong>→ Kết luận:</strong> Vừa tích cực hợp tác, vừa phải giữ được
            quyền kiểm soát nền kinh tế.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "3.3. Vai trò và Ý nghĩa",
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
            <strong style={{ color: colorAccent }}>
              • Tận dụng nguồn lực:
            </strong>{" "}
            Thu hút vốn, công nghệ, tri thức từ quốc tế để phát triển đất nước.
          </li>
          <li>
            <strong style={{ color: colorAccent }}>• Tránh lệ thuộc:</strong>{" "}
            Không để nền kinh tế bị trói buộc vào một thị trường hay một đối tác
            duy nhất.
          </li>
          <li>
            <strong style={{ color: colorAccent }}>• Bảo đảm tự chủ:</strong>{" "}
            Duy trì quyền tự chủ chiến lược trong mọi tình huống biến động toàn
            cầu.
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
          3. Nguyên tắc: Bình đẳng, cùng có lợi, tôn trọng độc lập chủ quyền
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
                    borderTop: `1px dashed ${isOpen ? `${colorAccentRgba} 0.2)` : "rgba(0,0,0,0.1)"}`,
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
              background: showExample ? colorAccent : "transparent",
              color: showExample ? "white" : colorAccent,
              border: `1px solid ${colorAccent}`,
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: showExample
                ? `0 4px 10px ${colorAccentRgba} 0.3)`
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
              background: `linear-gradient(145deg, ${colorAccentRgba} 0.05) 0%, ${colorAccentRgba} 0.15) 100%)`,
              border: `1px solid ${colorAccentRgba} 0.4)`,
              borderRadius: "12px",
              padding: "1.2rem",
              position: "relative",
              boxShadow: `0 4px 15px ${colorAccentRgba} 0.15)`,
            }}
          >
            <h4
              style={{
                color: colorAccent,
                marginTop: 0,
                marginBottom: "1rem",
                fontSize: "1.05rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>📌</span> 3.4. Thực tiễn tại
              Việt Nam
            </h4>

            {/* Visual Cards representing the logic from user's text */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Card 1 */}
              <div
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "8px",
                  borderLeft: `4px solid ${colorAccent}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <strong
                  style={{
                    color: "var(--chapter-text)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  🌍 Hành động đa dạng hóa thị trường:
                </strong>
                <ul
                  style={{
                    paddingLeft: "1.2rem",
                    margin: 0,
                    color: "var(--chapter-text)",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  <li>
                    Đẩy mạnh xuất khẩu sang <strong>Hoa Kỳ</strong>.
                  </li>
                  <li>
                    Đồng thời đa dạng hóa thị trường sang các khu vực khác:{" "}
                    <strong>EU, Nhật Bản, Hàn Quốc…</strong>
                  </li>
                </ul>
              </div>

              {/* Resulting Principles Card */}
              <div
                style={{
                  background: `${colorAccentRgba} 0.1)`,
                  padding: "1rem",
                  borderRadius: "8px",
                  border: `1px dashed ${colorAccent}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    background: colorAccent,
                    color: "white",
                    padding: "0.2rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    marginBottom: "0.8rem",
                    transform: "translateY(-50%)",
                    marginTop: "-1rem",
                  }}
                >
                  Kết quả thực hiện
                </span>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.8rem",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      padding: "0.6rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: colorAccent,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      flex: "1 1 120px",
                    }}
                  >
                    🤝 "Cùng có lợi"
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: "0.6rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: colorAccent,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      flex: "1 1 120px",
                    }}
                  >
                    🔄 Đa phương hóa, đa dạng hóa
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: "0.6rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: colorAccent,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      flex: "1 1 120px",
                    }}
                  >
                    🛡️ Giữ độc lập kinh tế
                  </div>
                </div>
              </div>

              {/* Example Image */}
              <div
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  border: `1px solid ${colorAccentRgba} 0.2)`,
                  background: "white",
                  marginTop: "0.5rem",
                }}
              >
                <img
                  src="/images/example-chapter3.jpg"
                  alt="Ví dụ thực tiễn: Đa dạng hóa thị trường và giữ độc lập kinh tế"
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
      </div>

      <div className="page-number">Trang 4</div>

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
