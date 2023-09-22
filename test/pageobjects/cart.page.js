import { $ } from '@wdio/globals'
import Page from './page.js'

class CartPage extends Page {
    get addToCartBtn () {
        return $('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    async click () {
        await browser.pause(2000);
        await this.addToCartBtn.click();
    }
}

export default new CartPage();