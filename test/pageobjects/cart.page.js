import { $ } from '@wdio/globals'

class CartPage {
    get Cart () {
        return $('a[class="shopping_cart_link"]');
    }

    async clickCart () {
        await browser.pause(2000);
        await this.Cart.click();
    }
}

export default new CartPage();