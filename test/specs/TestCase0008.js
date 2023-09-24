import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Valid Checkout.', () => {
    it('Checkout.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickAddCart();
        await browser.pause(2000); 
        await CartPage.clickCart();
        await expect(browser).toHaveUrlContaining('cart');
        await browser.pause(2000);
        await CartPage.clickCheckout();
        await expect(browser).toHaveUrlContaining('checkout-step-one');
        await CartPage.checkoutSteps('Ken', 'Block', '10020');
        await browser.pause(2000); 
        await CartPage.clickContinue();
        await expect(browser).toHaveUrlContaining('checkout-step-two');
        await browser.pause(2000); 
        await CartPage.clickFinish();
        await expect(browser).toHaveUrlContaining('checkout-complete');
        await browser.pause(2000); 
        await CartPage.clickBackHome();
        await expect(browser).toHaveUrlContaining('inventory');
        await browser.pause(2000); 
    });
});