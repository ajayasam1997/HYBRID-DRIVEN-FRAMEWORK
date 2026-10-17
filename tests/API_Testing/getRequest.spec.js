            import {test, expect} from "@playwright/test";


            test.describe("API Tests @apiTests", ()=>{

            test.describe.configure({mode:"parallel"})

            test.only("GetRequest @getRequest", async ({request})=>{

                    const response=await request.get("https://restful-booker.herokuapp.com/booking");
                    //console.log(response.url());
                    //console.log(response.headers());
                    console.log(await response.text());

                    //console.log(response);

                    const responseInJson= await response.json();
                    //console.log(responseInJson);

                    //Assertions on Entire response Object returned by Server

                    expect(response.statusText()).toBe("OK");
                    expect(response.status()).toBe(200);
                    //console.log(response.headers());
                    expect(response.headers()).toHaveProperty("content-type");
                    expect(response.headers()["content-type"]).toContain("application/json");

                    //Assertions on Response in JSON, Mostly for Schema Validations[Actual data received];

                    //console.log(responseInJson);

                // expect(responseInJson[0]).toHaveProperty("bookingid");
                    // expect(typeof responseInJson[0]).toBe("object");
                    // expect(typeof responseInJson[0].bookingid).toBe("number");

                })

        const bookingData = {
        firstname: "Sachin",
        lastname: "Tendulkar",
        totalprice: 500,
        depositpaid: true,
        bookingdates: {
            checkin: "2026-08-01",
            checkout: "2026-08-10"
        },
        additionalneeds: "Breakfast"
        };
        const authdata={
            "username" : "admin",
            "password" : "password123"
        }

        test("Create Token @createToken", async ({request})=>{
        const response=await request.post("https://restful-booker.herokuapp.com/auth", {headers:{"content-Type":"application/json"},data:authdata})

        const respInJson= await response.json();
        const tokenId=respInJson.token;
        console.log(tokenId);

        })

                test("POST Request, @postRequest", async ({request})=>{

                const response= await request.post("https://restful-booker.herokuapp.com/booking", {headers:{"content-Type":"application/json"}, data:bookingData})
            
                console.log(response);
               // response.sta
                
                const responseInJson= await response.json();
                console.log(responseInJson);
                
                
                const token1=await responseInJson.token;
                console.log(token1);
                await expect(responseInJson).toHaveProperty("bookingid");
                await expect(typeof responseInJson.bookingid).toBe("number");
                await expect(responseInJson.booking).toHaveProperty("firstname", "Sachin");
                console.log(responseInJson.bookingid);

                await expect(typeof responseInJson.booking.firstname).toBe("string");
                await expect(typeof responseInJson.booking.additionalneeds).toBe("string");

                })

                
            })