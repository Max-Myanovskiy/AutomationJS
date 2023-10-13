import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Valid Login.', () => {
    it('Should login with valid credentials.', async () => {
        await LoginPage.open();
        await LoginPage.click2();
        await expect(browser).toHaveUrlContaining('/users/sign_in');
        await LoginPage.login('myanovskiy.m@gmail.com', 'secret_sauce');
        await expect(LoginPage.inputEmail).toHaveValue('myanovskiy.m@gmail.com');
        await expect(LoginPage.inputPassword).toHaveValue('secret_sauce');
        // await LoginPage.click();
        // await expect(browser).toHaveUrlContaining('inventory');
        // await browser.pause(2000);
    });
});