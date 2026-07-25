            import * as urls from "../config/urls.js";
            import {test, expect} from "../fixtures/fixture1.js" ;
            //import  {HomePage}  from "../../pages/AutomationNew/HomePage.js";

            test.describe("Tests", ()=>{
            test.describe.configure({mode:"parallel", timeout:20000, retries:1})
            test.beforeEach("PreTest @PreTest", async ({page})=>{
                    //const context= await browser.newContext();
                    //const page1=await context.newPage();
                    await page.goto(urls.AUT_URL);
                    await expect(page).toHaveTitle("Automation Testing Practice");
                })
                test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({
        path: `screenshots/${testInfo.title}.png`
        });
    }
    });
                test("wikipediaTest @WikiTest", async ({homePage, page})=>{
                    const pagePromise=page.context().waitForEvent("page");
                    await homePage.clickOnWikiPediaLink();
                    const page2=await pagePromise;
                    await page2.waitForLoadState("load");
                    await expect(page2).toHaveTitle("Wikipedia, the free encyclopedia");
                })
    test("wikipediaSearch @WikiSearch", async ({homePage, page})=>{

        await homePage.clickonAllSuggestions();
        
       
    })

            })

