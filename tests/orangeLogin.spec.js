import { test, expect } from "@playwright/test";

test("check input validation", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder('Username').fill("Admin");
  await page.getByPlaceholder('Password').fill("admin123");
  await page.getByRole('Button', {name: 'Login'}).click();
  await page.waitForTimeout(3000);

  

  // await expect(page).toHaveTitle("OrangeHRM");
});

// test("placeholder check", async ({ page }) => {
//   await page.goto(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   await page.getByPlaceholder('Password').click()
// });
