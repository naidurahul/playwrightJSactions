import { test, expect } from "@playwright/test";

test("nope", async ({ page }) => {
  await page.goto("https://daraz.com.np");
  await page.getByPlaceholder("Search in Daraz").fill("Iphone");
  await page.locator('[class="search-box__button--1oH7"]').click();
  // expect(page.title).toBe("Buy Iphone Online at Best Price in Nepal - Daraz.com.np")
  // await page.waitForTimeout(5000)
  // await page.pause();
  await page.waitForSelector('div[data-qa-locator="product-item"] a[href]');

  const products = page.locator('div[data-qa-locator="product-item"] a[href]');

  const count = await products.count();
  console.log("Products Count:", count);

  //Optional: get all URLs
  const Producturls = await products.evaluateAll((links) =>
    links.map((a) => a.href)
  );

  for (const url of Producturls) {
    await test.step(`Testing ${url}`, async () => {
      console.log(url);
      test.setTimeout(500000)
      await page.goto(url, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForSelector("h1", { state : 'attached' });

      await page
        .locator(
          '[class="add-to-cart-buy-now-btn  pdp-button pdp-button_type_text pdp-button_theme_orange pdp-button_size_xl"]'
        )
        .click();
      await expect(
        page.getByPlaceholder("Please enter your Phone or Email")
      ).toBeVisible({ timeout: 60000 });
    });
  }
});
