    import {test, expect} from "@playwright/test";


    test.describe("DynamicTable Tests", ()=>{

        test.describe.configure({mode:"parallel"})

        test("Table1", async ({page})=>{

            await page.goto("https://testautomationpractice.blogspot.com/");
            await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

            //Table get name and memory row completely


            //rows
            const rowLocator= await page.locator("#rows").locator("tr");

            const rowCount=await  rowLocator.count();
            console.log(rowCount);
            
            for(let i=0;i<rowCount;i++){

                const name= await rowLocator.nth(i).locator("td").nth(0).innerText();
                const memory= await rowLocator.nth(i).locator("td").nth(4).innerText();

                console.log(`${name}---${memory}`);

            }



            
        })

    })