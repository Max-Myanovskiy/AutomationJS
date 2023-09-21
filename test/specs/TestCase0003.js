import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application.', () => {
    it('Login with invalid login. Should display the error message.', async () => {
        await LoginPage.open();
        await LoginPage.login('Superman', 'secret_sauce');
        await LoginPage.click();
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
        await browser.pause(2000);
    })
})