import puppeteer from 'puppeteer-core';

export  const getRates = async () => {
  // See https://dev.to/joelgriffith/vercel-puppeteer-4l7c
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
  })
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://obmennovosti.info/city.php?city=39');
  const content = await page.evaluate(() => {
    return document.querySelector('body>script:last-child').textContent;
  });

  console.log(content)

  // await browser.close();

  return content;
};
