// import {test, expect} from "@playwright/test";

// import XLSX from "xlsx";

// const workbook=XLSX.readFile("./testData/work.xlsx");

// const sheet=workbook.Sheets[workbook.SheetNames[0]];

// const testData=XLSX.utils.sheet_to_json(sheet);

// for(const data of testData){
//     test(`test for ${data.userName}`, async({page})=>{

//         await page.goto("url");

//         await expect(page).toHaveURL("");

//         await page.locator('//input[contains(text(), "something")]').fill(data.userName);

//         await page.getByRole("button", {name:"login"}).click();

//     })
// }

