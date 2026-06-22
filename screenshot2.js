const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  
  // Full page screenshot of homepage
  await page.goto("http://127.0.0.1:3000/index.html", { waitUntil: "networkidle", timeout: 15000 });
  await page.screenshot({ path: "C:/Users/mehme/Desktop/ss-home-full.png", fullPage: true });
  
  // Urunlerimiz page
  await page.goto("http://127.0.0.1:3000/urunlerimiz.html", { waitUntil: "networkidle", timeout: 15000 });
  await page.screenshot({ path: "C:/Users/mehme/Desktop/ss-urunler.png", fullPage: false });

  // Iletisim page
  await page.goto("http://127.0.0.1:3000/iletisim.html", { waitUntil: "networkidle", timeout: 15000 });
  await page.screenshot({ path: "C:/Users/mehme/Desktop/ss-iletisim.png", fullPage: false });

  console.log("All screenshots saved");
  await browser.close();
})();
