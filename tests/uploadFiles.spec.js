import {test, expect} from "../fixtures/fixture1.js";
//import HomePage from "../pages/AutomationNew/HomePage.js";


test("UploadFiles", async ({page,homePage})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await homePage.clickOnUploadMultipleFiles();
})