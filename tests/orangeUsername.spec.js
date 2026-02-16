import {test, expect  } from "@playwright/test";

test("usernameValidation", async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder('Username').fill("Admin");
  await page.getByPlaceholder('Password').fill("admin123");
  await page.getByRole('Button', {name: 'Login'}).click();
  await page.waitForTimeout(3000);
  await page.getByText('Israt Sultana Mila', {exact:true}).click();
  await page.getByText('Change Password', {exact:true}).click();
  await page.waitForTimeout(3000);
  // const title = await page.getByText('Username').textContent();
  // if(title?.trim() == 'Admin'){
  // await page.getByText('Current Password').fill('admin123')
  // }

  // await expect(page.getByText("Admin")).toBeVisible()
  // await page.getByLabel('Current Password').fill('admin123')
  // await page.waitForTimeout(5000);
  const usernameValue = await page
  .locator('text=Username')
  .locator('xpath=following-sibling::p')
  .innerText();

if (usernameValue.trim() === 'Admin') {
  await page.getByLabel('Current Password').fill('admin123');
}

  


})