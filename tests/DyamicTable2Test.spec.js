            import {test, expect} from "@playwright/test";


            test.describe("Table Tests @TableTests",()=>{


                test.describe.configure({mode:"parallel"})

                test("Test1 @TableTest1", async ({page})=>{

                    await page.goto("https://testautomationpractice.blogspot.com/");


                    //Dynamic Tables Data

                    const rowLocator= await page.locator("#rows").locator("tr");
                    const rowCount=await rowLocator.count();
                    console.log(rowCount);

                    for(let i=0;i<rowCount;i++){

                        const name=await rowLocator.nth(i).locator("td").nth(0).allInnerTexts();
                        const network= await rowLocator.nth(i).locator("td").nth(4).allInnerTexts();

                        console.log(`${name} memory using is ${network}`);


                    }


                })

            })


