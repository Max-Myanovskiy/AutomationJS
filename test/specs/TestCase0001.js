import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Valid Login.', () => {
    it('Should login with valid credentials.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await browser.pause(2000);
    });
});