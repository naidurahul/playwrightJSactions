import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg1.g-mana.live/app/login?refresh=true');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('<-Your email->');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('<-Your password->');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Streams', { exact: true }).click();
  await page.getByRole('link', { name: 'Live', exact: true }).click();
  await page.locator('[id="SVGRepo_iconCarrier"]').click();
  await page.getByRole('combobox', { name: 'Search by name' }).click();
  await page.getByRole('combobox', { name: 'Search by name' }).fill('rahul');
  await page.locator('.fa-solid.fa-x').click();
  await page.locator('[class="fa-solid fa-ellipsis more-option-icon"]').locator('[id="__BVID__219__BV_toggle_"]').click();
  await page.locator('[class="dropdown-menu dropdown-menu-right show"]').getByText('Clone Stream').click();
  await page.locator('.mr-auto > div > div > .switch > .switch-label').click();
  await page.getByRole('textbox', { name: 'Enter Stream URL eg: http://' }).click();
  await page.getByRole('textbox', { name: 'Enter Stream URL eg: http://' }).fill('https://new.com');
  await page.getByRole('tab', { name: 'SSAI' }).click();
  await page.getByRole('group', { name: 'Midroll Settings' }).getByPlaceholder('Enter label').click();
  await page.getByRole('group', { name: 'Midroll Settings' }).getByPlaceholder('Enter label').fill('rahul midroll');
  await page.getByRole('tab', { name: 'Source' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});