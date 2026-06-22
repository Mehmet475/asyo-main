const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:3000/referanslar.html", { waitUntil: "networkidle", timeout: 15000 });
  await page.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: "C:/Users/mehme/Desktop/ss-referanslar.png", fullPage: true });
  console.log("Done");
  await browser.close();
})();
