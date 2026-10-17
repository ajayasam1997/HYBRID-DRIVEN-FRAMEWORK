    const {test, expect} =require("@playwright/test");


    test("Test1",async ({page})=>{


        await page.goto("https://testautomationpractice.blogspot.com/");

        await expect(page).toHaveTitle("Automation Testing Practice");

        //Table

        const rowLocator= page.locator("#rows tr")
        const rowCount= await rowLocator.count();
        console.log(rowCount)

        for(let i=0;i<rowCount;i++){

            const name=await rowLocator.nth(i).locator("td").nth(0).textContent();
            const network=await rowLocator.nth(i).locator("td").nth(3).textContent();

            console.log(name, network);
            
            
        }


    })