import {test, expect} from "@playwright/test";
//import from "../data/auth.json";


test.use({storageState:"data/auth.json"});
test.use({
    viewport: {
        width: 1920,
        height: 1080
    }
});



import { chromium } from "playwright";


const names=[{
    email:"ajaysdet@gmail.com",
    password:"Ajay@123"
}]


test.describe("SauceDemoTests", ()=>{

    test.describe.configure({retries:1, timeout:50000})

    test("LoginTest @loginTest", async ()=>{

        const browser= await chromium.launch();

        const context=await browser.newContext();
        const page1= await context.newPage();

        await page1.goto("https://sauce-demo.myshopify.com/");


        await page1.getByText("Log In").click();

        await page1.getByLabel("Email Address").fill(names[0].email);

        await page1.getByLabel("Password").fill(names[0].password);

        await page1.locator('[value="Sign In"]').click();



        await context.storageState({path:"data/auth.json"})



    })

    test("loginTest2 @loginTest2", async({context,page})=>{

        console.log(await context.cookies());

    //await page.goto("https://sauce-demo.myshopify.com/");

        


        await page.goto("https://sauce-demo.myshopify.com/");

        await page.waitForTimeout(4000);


    })


})