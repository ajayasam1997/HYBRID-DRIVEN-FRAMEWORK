import { test, expect } from '@playwright/test';

// Reusable function
async function clickCountry(page, country) {
    await page
        .locator("#mwbw tbody tr")
        .getByRole("link", { name: country, exact: true })
        .click();
}

test("Test1", async ({ page }) => {

    await page.goto("https://en.wikipedia.org/wiki/List_of_sovereign_states");

    //const country = "Afghanistan";

    await clickCountry(page, "Afghanistan");

});