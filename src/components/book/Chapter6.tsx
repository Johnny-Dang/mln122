import React from "react";

const citations = [
  {
    index: 1,
    text: "Trung tâm WTO và Hội nhập (2024) Thuế tối thiểu toàn cầu.",
    url: "https://trungtamwto.vn/file/22876/thue-toi-thieu-toan-cau.pdf",
    accessed: "22 April 2026",
  },
  {
    index: 2,
    text: "Báo Mới (2024) Kết hợp phát triển kinh tế - xã hội với quốc phòng, an ninh và đối ngoại ở Việt Nam trong bối cảnh mới.",
    url: "https://www.qdnd.vn/quoc-phong-an-ninh/tin-tuc/ket-hop-phat-trien-kinh-te-xa-hoi-voi-quoc-phong-an-ninh-va-doi-ngoai-o-viet-nam-trong-boi-canh-moi-806980",
    accessed: "22 April 2026",
  },
  {
    index: 3,
    text: "Học viện Chính trị CAND (n.d.) Phải chăng chính sách đối ngoại giữ vững độc lập, tự chủ trong hội nhập quốc tế tại Đại hội XIII của Đảng là mới?.",
    url: "https://hvctcand.bocongan.gov.vn/phai-chang-chinh-sach-doi-ngoai-giu-vung-doc-lap-tu-chu-trong-hoi-nhap-quoc-te-tai-dai-hoi-xiii-cua-dang-la-moi-3185.html",
    accessed: "22 April 2026",
  },
];

export default function Chapter6() {
  return (
    <>
      <h2 className="chapter-title">
        VI.
        <br />
        Danh mục Tài liệu tham khảo
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
          marginTop: "0.5rem",
        }}
      >
        {citations.map((c) => (
          <div
            key={c.index}
            style={{
              display: "flex",
              gap: "0.75rem",
              padding: "0.85rem 1rem",
              background: "rgba(0,168,255,0.04)",
              border: "1px solid rgba(0,168,255,0.15)",
              borderRadius: "0.75rem",
            }}
          >
            {/* Number badge */}
            <span
              style={{
                flexShrink: 0,
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "var(--accent-blue)",
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2px",
              }}
            >
              {c.index}
            </span>

            {/* Citation text */}
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-main)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {c.text} Available at:{" "}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent-blue)",
                  wordBreak: "break-all",
                  fontSize: "0.82rem",
                }}
              >
                {c.url}
              </a>{" "}
              (Accessed: {c.accessed}).
            </p>
          </div>
        ))}
      </div>

      <div className="page-number">Trang 10</div>
    </>
  );
}
