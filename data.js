const params = new URLSearchParams(window.location.search);
const qrcode = document.getElementById("qr-code");

(function () {
  let qr = new QRious({
    element: qrcode,
    value: `http://192.168.77.143/buku-tamu-backend/getData.php?name=${params.get("name")}&kategori=${params.get("kategori")}&jabatan=${params.get("jabatan")}&no=${params.get("no")}`,
  });
})();
