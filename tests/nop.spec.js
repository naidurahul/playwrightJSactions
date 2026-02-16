import { test, expect } from "@playwright/test";

test("nope", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  await page.getByPlaceholder("Search store", { exact: true }).fill("Nike");
  await page.getByRole("Button", { name: "SEARCH" }).click();
  // await page.waitForTimeout(50000)

  //Grab all product links from the listing page
  const products = page.locator(".item-box article.product-item .picture a");
  const count = await products.count();
  console.log("Products found:", count);

  // const baseUrl = 'https://demo.nopcommerce.com';
  const productURls = [];

  for (let i = 0; i < count; i++) {
    const href = await products.nth(i).getAttribute("href");
    const absoluteUrl = new URL(href, page.url()).toString();
    productURls.push(absoluteUrl);
  }
  console.log(productURls);

  for (const url of productURls) {
    await test.step(`Testing ${url}`, async () => {
      console.log(url);
      await page.goto(url);

      const addToCart = page.locator('[class="button-1 add-to-cart-button"]');
      // await page.waitForLoadState("networkidle");
      // await expect(addToCart).toBeVisible();
      await addToCart.click();

      

      if (await page.getByText("Please select Size").count()) {
        await expect(page.getByText("Please select Size")).toBeVisible();
      }

      // Optional validations
      if (await page.getByText("Please select Color").count()) {
        await expect(page.getByText("Please select Color")).toBeVisible();
      }

      if (await page.getByText("Please select Print").count()) {
        await expect(page.getByText("Please select Print")).toBeVisible();
      }
    });
  }
});
