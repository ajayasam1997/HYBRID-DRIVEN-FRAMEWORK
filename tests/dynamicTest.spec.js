    import * as urls from "../config/urls.js";
    import {test, expect} from "../fixtures/fixture1.js";

    //import fixture1 from "../../fixtures/fixture1.js";


    test.describe("dynamic Tests @dynamicTests", ()=>{
        test.describe.configure({mode:"parallel", retries:1, timeout:50000})
        test.beforeEach("go to url", async ({page, homePage})=>{
            await page.goto(urls.AUT_URL);
        await homePage.clickOnPlaywrightPracticeLink();
        await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

        })
        test.afterEach("take screenshots", async ({page}, testInfo)=>{

            if(testInfo.expectedStatus!==testInfo.status){
            await  page.screenshot({path:`screenshots/${testInfo}.png`});
            }
        })
        test("dyamicStartStop @dynamicStartStop", async ({playWrightPractice, page})=>{

            await playWrightPractice.dynamicButtonClick();
            await expect(playWrightPractice.stopButton).toBeVisible();


        })



    })

