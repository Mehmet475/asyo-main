const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:3000/index.html", { waitUntil: "networkidle", timeout: 15000 });
  await page.screenshot({ path: "C:/Users/mehme/Desktop/screenshot-index.png", fullPage: false });
  console.log("Screenshot saved");
  await browser.close();
})();
