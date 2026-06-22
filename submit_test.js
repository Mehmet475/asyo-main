const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:3000/iletisim.html", { waitUntil: "networkidle", timeout: 15000 });

  await page.fill('[name="Ad Soyad"]', 'Test Kullanici');
  await page.fill('[name="Firma"]', 'Test Firma');
  await page.fill('[name="Telefon"]', '05001234567');
  await page.fill('[name="E-posta"]', 'test@test.com');
  await page.fill('[name="Mesaj"]', 'Aktivasyon testi.');

  const [response] = await Promise.all([
    page.waitForResponse(r => r.url().includes('formsubmit.co'), { timeout: 15000 }),
    page.click('[type="submit"]')
  ]);

  const body = await response.text();
  console.log("HTTP Status:", response.status());
  console.log("Response:", body);
  await browser.close();
})();
