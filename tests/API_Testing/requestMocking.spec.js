        import {test, expect} from "@playwright/test";

        test("test1", async ({page})=>{

            await page.route("**/**/api/v1/fruits", async (route)=>{

                const data=[{name:"ajay", id:1},
                    {name:"arun", id:2}
                ]

                const request=await route.request();
                console.log(request.method());
                console.log(request.url());
                
              // console.log(route.fetch());
                //await route.fulfill({json:data});

                await route.fulfill({
                    status:200,
                    contentType:"application/JSON",
                    body:JSON.stringify(data)

                })

            });

            await page.goto("https://demo.playwright.dev/api-mocking");

            //Assert the mock values;

            await expect(page.getByText("ajay")).toBeVisible();


        })