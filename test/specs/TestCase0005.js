import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js';

describe('My Login application.', () => {
    it('Saving the card after logout.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickAddCart();
        await InventoryPage.clickBurger();
        await InventoryPage.clickLogout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await browser.pause(2000); 
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();  
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickCart();
        await browser.pause(2000); 
    });

});