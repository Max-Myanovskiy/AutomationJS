import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Footer Links.', () => {
    it('Footer Link Twitter.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await browser.pause(2000);
        const myTwitter = await $('a[href="https://twitter.com/saucelabs"]');
        await myTwitter.click();
        await browser.pause(3000);
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await browser.pause(2000);
    });
    it('Footer Link Facebook.', async () => {
        const myFacebook = await $('a[href="https://www.facebook.com/saucelabs"]');
        await myFacebook.click();
        await browser.pause(3000);
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await browser.pause(2000);
    });
    it('Footer Link LinkedIn.', async () => {
        const myLinkedIn = await $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
        await myLinkedIn.click();
        await browser.pause(3000);
    });
});