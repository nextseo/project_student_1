const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://150.95.88.81:9843", // 🔥 เปลี่ยนเป็น API ของคุณ
      changeOrigin: true,
      secure: false, // ❗ ปิด HTTPS check เพราะ API เป็น HTTP
    })
  );
};