import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import LogoutPage from '../pageobjects/logout.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('My Login application.', () => {
    it('Saving the card after logout.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await CartPage.click();
        await LogoutPage.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await browser.pause(2000); 
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();  
        await expect(browser).toHaveUrlContaining('inventory');
    });

});