import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import Menu from '../pageobjects/menu.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Saving the card after logout.', () => {
    it('Cart page is displayed, product are the same as was added.', async () => {
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
        await browser.pause(2000); 
        await CartPage.clickCart();
        await expect(browser).toHaveUrlContaining('cart');
        await browser.pause(2000); 
    });
});