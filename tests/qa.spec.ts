import { test, expect } from "@playwright/test";

test.describe("QA page", () => {
  // FILL YOUR NAME HERE TO RUN THE TESTS
  const yourName = "replace_this_your_name";

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/QA/);
  });

  test("has login form", async ({ page }) => {
    await expect(page.getByText("Sign in")).toBeVisible();
  });

  test("check your QA status test", async ({ page }) => {
    // it can take a while to fill inputs
    test.setTimeout(60000);

    // login
    await page.getByLabel("Name").fill(yourName);
    await page.getByRole("button", { name: "Sign in" }).click();

    // check your stats
    await page.locator("#input1").check();
    await page.waitForTimeout(2000);
    await page.locator("#input2").check();
    await page.waitForTimeout(2000);
    await page.locator("#input3").check();
    await page.waitForTimeout(2000);
    await page.locator("#input4").check();
    await page.waitForTimeout(2000);
    await page.locator("#input5").check();
    await page.waitForTimeout(2000);
    await page.locator("#input6").check();

    // check the result

    // 😅 Hehe, you need to run test to see the result :)
    await expect(
      page.getByText(
        atob("WW91IGFyZSBvbiB0aGUgcmlnaHQgcGF0aCB0byBiZSB0aGUgYmVzdCBRQSE=")
      )
    ).toBeVisible();

    await page.waitForTimeout(6000);
  });
});
