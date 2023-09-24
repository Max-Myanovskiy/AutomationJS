import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Checkout without products.', () => {
    it('User are located on the "Cart" Page.', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await browser.pause(2000); 
        await CartPage.clickCart();
        await expect(browser).toHaveUrlContaining('cart');
        await browser.pause(2000);
        await CartPage.clickCheckout();
        await expect(browser).toHaveUrlContaining('cart');
    });
    it('Error message "Cart is empty" are displayed.', async () => {
        await expect(CartPage.flashAlertCart).toBeExisting();
        await expect(CartPage.flashAlertCart).toHaveTextContaining('Cart is empty');
    });
});