import React from "react";

export default function Preface() {
  return (
    <div className="preface-page preface-page--toc">
      <header className="preface-header">
        <span className="preface-eyebrow">Mục lục</span>
        <div className="preface-header-line" aria-hidden />
      </header>

      <h1 className="preface-toc-main-title">
        Đối tác chiến lược toàn diện &mdash; Tự chủ hay phụ thuộc?
      </h1>

      <div className="preface-toc-scroll" tabIndex={0}>
        <section className="preface-toc-block" aria-labelledby="toc-i">
          <h2 className="preface-toc-h2" id="toc-i">
            I. Nền tảng lý thuyết về Hội nhập Kinh tế Quốc tế
          </h2>

          <h3 className="preface-toc-h3">1. Nâng cao hiệu quả Hội nhập KTQT</h3>
          <ul className="preface-toc-list">
            <li>
              <strong>1.1. Nhận thức toàn diện</strong>
            </li>
            <li>
              <strong>1.2. Chiến lược và Lộ trình</strong>
            </li>
            <li>
              <strong>1.3. Chủ động thực thi cam kết</strong>
            </li>
            <li>
              <strong>1.4. Hoàn thiện Thể chế &amp; Pháp luật</strong>
            </li>
            <li>
              <strong>1.5. Nâng cao Năng lực cạnh tranh</strong>
            </li>
            <li>
              <strong>1.6. Xây dựng nền Kinh tế Độc lập - Tự chủ</strong>
            </li>
          </ul>

          <h3 className="preface-toc-h3">
            2. Kết hợp Kinh tế với Quốc phòng, An ninh và Đối ngoại
          </h3>
          <ul className="preface-toc-list">
            <li>
              <strong>2.1. Cơ sở lý luận Mác - Lênin</strong>
            </li>
            <li>
              <strong>2.2. Vai trò của sự kết hợp</strong>
            </li>
            <li>
              <strong>2.3. Thực tiễn tại Việt Nam</strong>
            </li>
          </ul>

          <h3 className="preface-toc-h3">
            3. Nguyên tắc Đối ngoại trong Hội nhập
          </h3>
          <ul className="preface-toc-list">
            <li>
              <strong>3.1. Các nguyên tắc cơ bản</strong>
            </li>
            <li>
              <strong>3.2. Vận dụng lý luận vào thực tiễn</strong>
            </li>
            <li>
              <strong>3.3. Ý nghĩa chiến lược</strong>
            </li>
          </ul>
        </section>

        <section className="preface-toc-block" aria-labelledby="toc-ii">
          <h2 className="preface-toc-h2" id="toc-ii">
            II. Tự chủ và Phụ thuộc trong bối cảnh mới
          </h2>
          <ul className="preface-toc-list">
            <li>
              <strong>2.1. Khái niệm và ranh giới</strong>
            </li>
            <li>
              <strong>2.2. Nguy cơ lệ thuộc</strong>
            </li>
          </ul>
        </section>

        <section className="preface-toc-block" aria-labelledby="toc-iii">
          <h2 className="preface-toc-h2" id="toc-iii">
            III. Phân tích thực tiễn và So sánh
          </h2>
          <ul className="preface-toc-list">
            <li>
              <strong>3.1. Ví dụ điển hình</strong>
            </li>
            <li>
              <strong>3.2. Dữ liệu trực quan (Video/Sơ đồ)</strong>
            </li>
          </ul>
        </section>

        <section className="preface-toc-block" aria-labelledby="toc-iv">
          <h2 className="preface-toc-h2" id="toc-iv">
            IV. Kết luận: Ngoại giao &quot;Cây tre&quot; và Tầm nhìn tương lai
          </h2>
          <ul className="preface-toc-list preface-toc-list--tight">
            <li>
              Tổng kết về tính bền vững của việc duy trì cân bằng quan hệ.
            </li>
            <li>
              Giới hạn của hội nhập và quyền tự quyết trong chiến lược phát
              triển.
            </li>
          </ul>
        </section>

        <section className="preface-toc-block" aria-labelledby="toc-v">
          <h2 className="preface-toc-h2" id="toc-v">
            V. Ứng dụng Công nghệ AI trong nghiên cứu
          </h2>
          <ul className="preface-toc-list">
            <li>
              <strong>5.1. NotebookLM:</strong> Tạo hình ảnh, truy xuất dữ liệu
              và video.
            </li>
            <li>
              <strong>5.2. ChatGPT:</strong> Hỗ trợ lập trình website và tra cứu
              nguyên lý.
            </li>
            <li>
              <strong>5.3. Gemini:</strong> Phân tích đề tài, trích dẫn chuẩn
              Harvard và xây dựng bộ câu hỏi.
            </li>
          </ul>
        </section>

        <section className="preface-toc-block" aria-labelledby="toc-vi">
          <h2 className="preface-toc-h2" id="toc-vi">
            VI. Danh mục Tài liệu tham khảo
          </h2>
          <ul className="preface-toc-list">
            <li>
              Trích dẫn theo chuẩn Harvard các nguồn từ Trung tâm WTO, Báo Mới
              và Học viện Chính trị CAND.
            </li>
          </ul>
        </section>

        <p className="page-number page-number--preface-scroll" aria-label="Số trang">
          Trang 1
        </p>
      </div>
    </div>
  );
}
