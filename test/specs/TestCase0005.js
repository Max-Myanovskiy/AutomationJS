import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import Menu from '../pageobjects/menu.js'
import CartPage from '../pageobjects/cart.page.js'

describe('My Login application.', () => {
    it('Saving the card after logout.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickAddCart();
        await Menu.clickBurger();
        await Menu.clickLogout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await browser.pause(2000); 
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();  
        await expect(browser).toHaveUrlContaining('inventory');
        await CartPage.clickCart();
        await browser.pause(2000); 
    });
});