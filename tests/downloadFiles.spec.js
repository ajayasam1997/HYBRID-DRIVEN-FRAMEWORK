    import {chromium} from "playwright";
    import{test, expect} from "@playwright/test";

    test("downloadTest @downloadTests", async()=>{

        const browser= await chromium.launch();
        const context=  await browser.newContext();
        const page= await browser.newPage();

        await page.goto("https://practice.expandtesting.com/download");

        const downloadLink=await page.locator("[data-testid='1785678484636_DNDAgentFile.txt']");

        const downloadPromise= page.waitForEvent("download");

        await downloadLink.click();

        const download=await downloadPromise;

        await download.saveAs("downloads//download1.txt")




    })

