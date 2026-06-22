const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  
  // Desktop - sertifikalar
  const page1 = await browser.newPage();
  await page1.setViewportSize({ width: 1440, height: 900 });
  await page1.goto("http://127.0.0.1:3000/sertifikalar.html", { waitUntil: "networkidle", timeout: 15000 });
  await page1.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await page1.waitForTimeout(300);
  await page1.screenshot({ path: "C:/Users/mehme/Desktop/ss-sert-desktop.png", fullPage: false });

  // Mobile - sertifikalar
  const page2 = await browser.newPage();
  await page2.setViewportSize({ width: 390, height: 844 });
  await page2.goto("http://127.0.0.1:3000/sertifikalar.html", { waitUntil: "networkidle", timeout: 15000 });
  await page2.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await page2.waitForTimeout(300);
  await page2.screenshot({ path: "C:/Users/mehme/Desktop/ss-sert-mobile.png", fullPage: true });

  // Mobile - index
  const page3 = await browser.newPage();
  await page3.setViewportSize({ width: 390, height: 844 });
  await page3.goto("http://127.0.0.1:3000/index.html", { waitUntil: "networkidle", timeout: 15000 });
  await page3.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await page3.waitForTimeout(300);
  await page3.screenshot({ path: "C:/Users/mehme/Desktop/ss-index-mobile.png", fullPage: true });

  // Mobile - urunlerimiz
  const page4 = await browser.newPage();
  await page4.setViewportSize({ width: 390, height: 844 });
  await page4.goto("http://127.0.0.1:3000/urunlerimiz.html", { waitUntil: "networkidle", timeout: 15000 });
  await page4.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await page4.waitForTimeout(300);
  await page4.screenshot({ path: "C:/Users/mehme/Desktop/ss-urun-mobile.png", fullPage: true });

  console.log("Done");
  await browser.close();
})();
