import { test, expect } from "../fixtures/fixture1.js";
import * as urls from "../config/urls.js";
import brokenLinks from "../data/brokenLinks.json";

test.beforeEach("Go to url", async({homePage,page})=>{

        await page.goto(urls.AUT_URL);
        await homePage.clickOnPlaywrightPracticeLink();
        expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

        //page.pause();

    })

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`
        });
    }
});

test("Verify all broken links", async ({ playWrightPractice, page }) => {

    const results = [];

    for (const link of brokenLinks) {

        try {
            await playWrightPractice.clickOnBrokenLinks(link);

            await expect(page).toHaveURL(link.expectedURL);

            results.push({
                name: link.name,
                status: "PASS"
            });

        } catch (error) {

            results.push({
                name: link.name,
                status: "FAIL"
            });
        }
        // } finally {
        //     
        // }
        await page.goBack();
    }

    console.log(results);
});