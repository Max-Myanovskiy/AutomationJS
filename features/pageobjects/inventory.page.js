import { $ } from '@wdio/globals'

class InventoryPage {
    get addToCartBtn () {
        return $('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get sortProducts () {
        return $('select[class="product_sort_container"]');
    }

    get sortNameA () {
        return $('option[value="az"]');
    }

    get sortNameZ () {
        return $('option[value="za"]');
    }

    get sortPriceL () {
        return $('option[value="lohi"]');
    }

    get sortPriceH () {
        return $('option[value="hilo"]');
    }

    async clickAddCart () {
        await browser.pause(2000);
        await this.addToCartBtn.click();
    }

    async clickProd () {
        await browser.pause(2000);
        await this.sortProducts.click();
    }

    async clickNameA () {
        await browser.pause(2000);
        await this.sortNameA.click();
    }

    async clickNameZ () {
        await browser.pause(2000);
        await this.sortNameZ.click();
    }

    async clickPriceL () {
        await browser.pause(2000);
        await this.sortPriceL.click();
    }

    async clickPriceH () {
        await browser.pause(2000);
        await this.sortPriceH.click();
    }
}

export default new InventoryPage();