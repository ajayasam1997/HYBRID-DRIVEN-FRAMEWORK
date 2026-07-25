    import * as urls from "../config/urls.js"
    import {chromium} from "@playwright/test";
    import {test, expect } from "../fixtures/fixture1.js"
import PlaywrightPractice from "../pages/AutomationNew/PlaywrightPracticePage.js";

    test.describe("alert Tests @alertTests", ()=>{
        test.describe.configure({mode:"parallel", timeout:50000, retries:1})
        test.beforeEach("preTest", async({page})=>{

            await page.goto(urls.AUT_URL);

        })
        test.afterEach("postTest", async ({page},testInfo)=>{

            if(testInfo.status!==testInfo.expectedStatus){
                await page.screenshot({path:`screenshots/${testInfo.title}.png`})
            //await page.screenshot({path: `screenshots/${testInfo.title}.png` });
            }})

                test("promptAlert @promptAlert", async ({playWrightPractice, page})=>{

                    page.on("dialog",async (dialog)=>{

                        await expect(dialog.type()).toContain("prompt");
                        await expect(dialog.defaultValue()).toContain("Harry Potter");
                        await dialog.accept("Something");
                    })

                    await playWrightPractice.clickOnPromptAlert();


                })

                test("confirmation @confirm", async ({playWrightPractice, page})=>{

                    page.on("dialog", async (dialog)=>{

                        expect(await dialog.type()).toContain("confirm")
                        expect(await dialog.message()).toContain("Press a button!");
                        await dialog.accept();
                    })
                    await playWrightPractice.clickOnConfirmAlert();
                    await expect(page.getByText("You pressed OK!")).toBeVisible();


                })

                test("popupWindow @popUpWindow", async ({playWrightPractice, page})=>{

                  // const browser= await chromium.launch();
                   //const context=await browser.newContext();
                  // const page1=await context.newPage();

                   //const pagePromise=page.context().waitForEvent("page");

                   await playWrightPractice.clickOnWindowsPopUp();

                   //const page2=await pagePromise;

                   //await page2.waitForLoadState("load");



                })

                 test.only("clickONNewTab @clickOnNewTab", async ({playWrightPractice, page})=>{

                   // await page.goto("https://playwright.dev/");

                  // const browser= await chromium.launch();
                   //const context=await browser.newContext();
                  // const page1=await context.newPage();

                  // const pagePromise=page.context().waitForEvent("page");

                 //  await page.getByRole("link", {name:"GitHub"}).and(page.locator(".footer__link-item")).click();

                   await playWrightPractice.clickOnNewTab()

                   //const page2=await pagePromise;

                   //await page2.waitForLoadState("load");



                })

        }
    )

