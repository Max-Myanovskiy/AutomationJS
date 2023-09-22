import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('My Login application.', () => {
    it('Logout.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickBurger();
        await InventoryPage.clickLogout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await browser.pause(2000);
    });
});