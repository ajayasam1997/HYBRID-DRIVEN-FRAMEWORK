# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API_Testing\requestMocking.spec.js >> test1
- Location: tests\API_Testing\requestMocking.spec.js:3:13

# Error details

```
TypeError: route.method is not a function
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('ajay')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('ajay')

```

```yaml
- heading "Render a List of Fruits" [level=1]
- paragraph: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
- paragraph:
  - link "Check out the tests for this repo":
    - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
- paragraph:
  - link "Learn more on API mocking in Playwright":
    - /url: https://playwright.dev/docs/mock
- text: Loading...
```

# Test source

```ts
  1  |         import {test, expect} from "@playwright/test";
  2  | 
  3  |         test("test1", async ({page})=>{
  4  | 
  5  |             await page.route("**/**/api/v1/fruits", async (route)=>{
  6  | 
  7  |                 const data=[{name:"ajay", id:1},
  8  |                     {name:"arun", id:2}
  9  |                 ]
  10 | 
  11 |                 const request=await route.request();
  12 |                 console.log(request.method());
  13 |                 const method=await route.method();
  14 |                 console.log(method);
  15 |               // console.log(route.fetch());
  16 |                 //await route.fulfill({json:data});
  17 | 
  18 |                 await route.fulfill({
  19 |                     status:200,
  20 |                     contentType:"application/JSON",
  21 |                     body:JSON.stringify(data)
  22 | 
  23 |                 })
  24 | 
  25 |             });
  26 | 
  27 |             await page.goto("https://demo.playwright.dev/api-mocking");
  28 | 
  29 |             //Assert the mock values;
  30 | 
> 31 |             await expect(page.getByText("ajay")).toBeVisible();
     |                                                  ^ Error: expect(locator).toBeVisible() failed
  32 | 
  33 | 
  34 |         })
```