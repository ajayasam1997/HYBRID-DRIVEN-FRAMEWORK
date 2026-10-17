# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: downloadFiles.spec.js >> downloadTest @downloadTests
- Location: tests\downloadFiles.spec.js:4:9

# Error details

```
TimeoutError: page.waitForEvent: Timeout 20000ms exceeded while waiting for event "download"
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Test source

```ts
  1  |     import {chromium} from "playwright";
  2  |     import{test, expect} from "@playwright/test";
  3  | 
  4  |     test("downloadTest @downloadTests", async()=>{
  5  | 
  6  |         const browser= await chromium.launch();
  7  |         const context=  await browser.newContext();
  8  |         const page= await browser.newPage();
  9  | 
  10 |         await page.goto("https://practice.expandtesting.com/download");
  11 | 
  12 |         const downloadLink=await page.locator("[data-testid='1785678467703_DNDAgentFile.txt']");
  13 | 
> 14 |         const downloadPromise=await page.waitForEvent("download");
     |                                          ^ TimeoutError: page.waitForEvent: Timeout 20000ms exceeded while waiting for event "download"
  15 | 
  16 |         await downloadLink.click();
  17 | 
  18 |         const download=await downloadPromise;
  19 | 
  20 |         await download.saveAs("downloads//download1.txt")
  21 | 
  22 | 
  23 | 
  24 | 
  25 |     })
  26 | 
  27 | 
```