import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://stg1.g-mana.live/app/login?refresh=true");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("<-Your email->");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("<-Your password->");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("Streams", { exact: true }).click();
  await page.getByText("Live", { exact: true }).click();
  // await page.getByRole('link', { name: 'Live', exact: true }).click();
  await page.locator('[id="SVGRepo_iconCarrier"]').click();
  await page.getByPlaceholder("Search by name", { exact: true }).fill("rahul");
  await page.waitForTimeout(3000);
  await page.locator('[class="fa-solid fa-x"]').click();
  await page.waitForTimeout(3000);
  // await page.locator('[class="custom-control-input"]').click();
  // await page.locator('label[for="__BVID__449"]').click();
  // await expect(page.locator('#__BVID__449')).toBeChecked();
  // Playwright Test or plain Playwright
  // console.log(await page.locator('#__BVID__449').isVisible());   // true/false
  // console.log(await page.locator('#__BVID__449').isEnabled());   // true/false
  // console.log(await page.locator('#__BVID__449').boundingBox()); // null if not rendered
  // await page.locator('#__BVID__449').evaluate(el => el.onclick());

  // if the label has readable text like "Enable X"
  // await page.locator('.custom-control-label').first().click({ force: true });
  await page
    .locator(
      "tr:nth-child(3) > td:nth-child(2) > span > .custom-control > .custom-control-label"
    )
    .click();
  await page
    .locator(
      "tr:nth-child(3) > td:nth-child(2) > span > .custom-control > .custom-control-label"
    )
    .click();

  await page.waitForTimeout(2000);
  await page.getByText("Bulk Upgrade", { exact: true }).click();
  await page.locator('[id="__BVID__474"]').click();
  const value = await page
    .locator("#user_handler_version option")
    .nth(1)
    .getAttribute("value");
  await page.selectOption("#user_handler_version", value);
  await page.locator('[class="btn btn-primary btn-sm"]').click();
  await page.waitForTimeout(5000);

  // await page.locator('[id="__BVID__265"]').getByText('Edit Stream (Simple)').click();
  // await page.locator('.mr-auto > div > div > .switch > .switch-label').click();
  // await page.locator('[id="__BVID__381"] > div > div > div > .switch > .switch-label').click();
  // await page.getByRole('button', { name: 'Save' }).click();
});
