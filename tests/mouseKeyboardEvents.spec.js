import {test, expect} from "../fixtures/fixture1.js";

import * as urls from "../config/urls.js";
//import PlaywrightPractice from "../pages/AutomationNew/PlaywrightPracticePage.js";


test.describe("@MouseKeyBoardTests",  ()=>{


    test.describe.configure({mode:"serial"})

    test.beforeEach("preTest", async({page, homePage})=>{

         await page.goto(urls.AUT_URL);
            await homePage.clickOnPlaywrightPracticeLink();
          await  expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    })
    test.afterEach("postTest", async({page},testInfo)=>{

        if(testInfo.status!==testInfo.expectedStatus){
            await page.screenshot({path:`screenshots/${testInfo.title}.png`});
        }


    })

    test("mouseTests", async ({playWrightPractice, page})=>{

        playWrightPractice.doubleClick();
        playWrightPractice.mouseHover();



    })

    



})