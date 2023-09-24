import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('Sorting.', () => {
    it('Sorting Products by Name (A to Z).', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickProd();
        await InventoryPage.clickNameA();
        await browser.pause(2000);
    });
    it('Sorting Products by Name (Z to A).', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickProd();
        await InventoryPage.clickNameZ();
        await browser.pause(2000);
    });
    it('Sorting Products by Price (low to high).', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickProd();
        await InventoryPage.clickPriceL();
        await browser.pause(2000);
    });
    it('Sorting Products by Price (high to low).', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.click();
        await expect(browser).toHaveUrlContaining('inventory');
        await InventoryPage.clickProd();
        await InventoryPage.clickPriceH();
        await browser.pause(2000);
    });
});