const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://127.0.0.1:3000/index.html", { waitUntil: "networkidle", timeout: 15000 });
  
  // Disable AOS so all elements are visible
  await page.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  
  // Scroll through the page to trigger animations
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: "C:/Users/mehme/Desktop/ss-home-fixed.png", fullPage: true });
  console.log("Done");
  await browser.close();
})();
