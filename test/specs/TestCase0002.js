import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login with invalid password.', () => {
    it('Login with invalid password. Should display the error message.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '1111');
        await LoginPage.click();
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
        await browser.pause(2000);
    });
});