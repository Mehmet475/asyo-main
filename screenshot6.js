const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();

  // Desktop sertifikalar - subtitle fix kontrol
  const p1 = await browser.newPage();
  await p1.setViewportSize({ width: 1440, height: 900 });
  await p1.goto("http://127.0.0.1:3000/sertifikalar.html", { waitUntil: "networkidle", timeout: 15000 });
  await p1.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await p1.waitForTimeout(300);
  await p1.screenshot({ path: "C:/Users/mehme/Desktop/fix-sert-desktop.png", fullPage: false });

  // Mobile sertifikalar
  const p2 = await browser.newPage();
  await p2.setViewportSize({ width: 390, height: 844 });
  await p2.goto("http://127.0.0.1:3000/sertifikalar.html", { waitUntil: "networkidle", timeout: 15000 });
  await p2.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await p2.waitForTimeout(300);
  await p2.screenshot({ path: "C:/Users/mehme/Desktop/fix-sert-mobile.png", fullPage: false });

  // Mobile index
  const p3 = await browser.newPage();
  await p3.setViewportSize({ width: 390, height: 844 });
  await p3.goto("http://127.0.0.1:3000/index.html", { waitUntil: "networkidle", timeout: 15000 });
  await p3.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await p3.waitForTimeout(300);
  await p3.screenshot({ path: "C:/Users/mehme/Desktop/fix-index-mobile.png", fullPage: false });

  // Mobile referanslar
  const p4 = await browser.newPage();
  await p4.setViewportSize({ width: 390, height: 844 });
  await p4.goto("http://127.0.0.1:3000/referanslar.html", { waitUntil: "networkidle", timeout: 15000 });
  await p4.addStyleTag({ content: '[data-aos] { opacity: 1 !important; transform: none !important; }' });
  await p4.waitForTimeout(300);
  await p4.screenshot({ path: "C:/Users/mehme/Desktop/fix-ref-mobile.png", fullPage: false });

  console.log("Done");
  await browser.close();
})();
