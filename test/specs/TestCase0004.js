import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Menu from '../pageobjects/menu.js'

describe('My Login application.', () => {
    it('Logout.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await Menu.clickBurger();
        await Menu.clickLogout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await browser.pause(2000);
    });
});