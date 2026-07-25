import {test, expect} from "../fixtures/fixture1.js";
import * as urls from "../config/urls.js";
import PlaywrightPractice from "../pages/AutomationNew/PlaywrightPracticePage.js";

test.describe("PlaywrightTests1", ()=>{

    test.describe.configure({mode:"parallel", retries:1, timeout:50000})

    test.beforeEach("Go to url", async({homePage,page})=>{

        await page.goto(urls.AUT_URL);
        await homePage.clickOnPlaywrightPracticeLink();
        expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");


    })
    test.afterEach(async({page}, testInfo)=>{
        if(testInfo.expectedStatus!==testInfo.status){
            await page.screenshot({path:`screenshots/${testInfo.title}.png`})
        }
    })

    test("test1 @test1", async({playWrightPractice,page})=>{

        await playWrightPractice.enterUserNameClickcheckBox();
        await playWrightPractice.enterDetails();
        await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
        

       



    })
})