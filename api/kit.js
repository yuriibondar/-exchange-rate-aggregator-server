import puppeteer from 'puppeteer';

export  const getRates = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://obmennovosti.info/city.php?city=39');
  const content = await page.evaluate(() => {
    return document.querySelector('body>script:last-child').textContent;
  });

  await browser.close();

  return content;
};
