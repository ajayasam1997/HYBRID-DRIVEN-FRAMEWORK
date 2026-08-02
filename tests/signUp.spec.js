    import {test, expect} from "@playwright/test";
    import users from "../data/signupData.json";

    test.describe("SignUpTests", ()=>{

    users.forEach((data)=>{


        test(`test for ${data.name}`, async ({page})=>{

            await page.goto("https://www.automationexercise.com/login");

                await page.getByPlaceholder("Name").fill(data.name);

            await page.getByPlaceholder("Email Address").and(page.locator("[data-qa='signup-email']")).fill(data.mail);
            
            await page.getByRole("button", {name:"Signup"}).click();}
        )})
    })


    
