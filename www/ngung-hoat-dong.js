/* ngung-hoat-dong.js — 26/11/2026: APP ĐIỆN THOẠI CŨ ĐÃ NGỪNG, chuyển sang app Kho Lạnh mới.
   Nhận qua tự cập nhật giao diện (live-update.js) → mở app chỉ còn màn hình báo ngưng.
   app.js VẪN chạy bên dưới (để live-update.js chốt được bản này, và sau này còn nhận bản sửa) — màn hình phủ chặn mọi thao tác.
   KHÔNG xóa dữ liệu, KHÔNG đụng Google Sheet cũ. Muốn mở lại app / đổi chữ / thêm link: sửa CAU_HINH rồi đưa lên GitHub. */
(function () {
  'use strict';
  var CAU_HINH = {
    bat: true,
    tieuDe: 'App Kho Lạnh (bản cũ) đã ngừng hoạt động',
    noiDung: 'Từ ngày 26/11/2026, app này không còn được sử dụng.\nVui lòng chuyển sang app "Kho Lạnh (mới)".',
    lienHe: 'Liên hệ quản trị để được cài app mới.',
    link: ''   // link tải app mới (để trống = không hiện nút)
  };
  if (!CAU_HINH.bat) return;
  function phu() {
    if (document.getElementById('klNgungHoatDong')) return;
    var o = document.createElement('div'); o.id = 'klNgungHoatDong';
    o.setAttribute('style', 'position:fixed;inset:0;z-index:2147483647;background:#F4F6F9;display:flex;align-items:center;justify-content:center;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif;color:#1A2433;padding:16px;box-sizing:border-box');
    var b = document.createElement('div');
    b.setAttribute('style', 'max-width:440px;width:100%;padding:28px 22px;background:#fff;border:1px solid #DDE3EA;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.08);text-align:center;box-sizing:border-box');
    var h = document.createElement('div'); h.textContent = CAU_HINH.tieuDe; h.setAttribute('style', 'font-size:20px;font-weight:700;color:#B42318;margin-bottom:14px;line-height:1.35');
    var p = document.createElement('div'); p.textContent = CAU_HINH.noiDung; p.setAttribute('style', 'font-size:15px;line-height:1.6;white-space:pre-line;margin-bottom:12px');
    var l = document.createElement('div'); l.textContent = CAU_HINH.lienHe; l.setAttribute('style', 'font-size:15px;font-weight:600;color:#1F6FD6');
    b.appendChild(h); b.appendChild(p); b.appendChild(l);
    if (CAU_HINH.link) {
      var a = document.createElement('a'); a.href = CAU_HINH.link; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Tải app mới';
      a.setAttribute('style', 'display:inline-block;margin-top:18px;padding:12px 24px;background:#1F6FD6;color:#fff;border-radius:10px;text-decoration:none;font-weight:600');
      b.appendChild(a);
    }
    o.appendChild(b);
    document.body.appendChild(o);
    document.title = CAU_HINH.tieuDe;
  }
  if (document.body) phu(); else document.addEventListener('DOMContentLoaded', phu);
  // Phòng khi giao diện app vẽ lại / xóa phần tử: kiểm lại định kỳ.
  setInterval(phu, 1500);
})();
