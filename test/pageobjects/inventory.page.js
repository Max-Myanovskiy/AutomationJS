import { $ } from '@wdio/globals'
// import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage {
    get btnBurger () {
        return $('button[id="react-burger-menu-btn"]');
    }

    get btnLogout () {
        return $('a[id="logout_sidebar_link"]');
    }

    get addToCartBtn () {
        return $('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get Cart () {
        return $('a[class="shopping_cart_link"]');
    }

    async clickBurger () {
        await browser.pause(2000);
        await this.btnBurger.click();
    }

    async clickLogout () {
        await browser.pause(2000);
        await this.btnLogout.click();
    }

    async clickAddCart () {
        await browser.pause(2000);
        await this.addToCartBtn.click();
    }

    async clickCart () {
        await browser.pause(2000);
        await this.Cart.click();
    }
}

export default new InventoryPage();