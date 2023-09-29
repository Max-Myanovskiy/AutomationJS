import { $ } from '@wdio/globals'

class CartPage {
    get Cart () {
        return $('a[class="shopping_cart_link"]');
    }

    get Checkout () {
        return $('button[id="checkout"]');
    }

    get FirstName () {
        return $('input[id="first-name"]');
    }

    get LastName () {
        return $('input[id="last-name"]');
    }

    get ZipCode () {
        return $('input[id="postal-code"]');
    }

    get Continue () {
        return $('input[id="continue"]');
    }

    get Finish () {
        return $('button[id="finish"]');
    }

    get BackHome () {
        return $('button[id="back-to-products"]');
    }

    get flashAlertCart () {
        return $('div[class="cart_contents_container"]');
    }

    async clickCart () {
        await browser.pause(2000);
        await this.Cart.click();
    }

    async clickCheckout () {
        await browser.pause(2000);
        await this.Checkout.click();
    }

    async checkoutSteps (username, password, zipcode) {
        await browser.pause(2000);
        await this.FirstName.setValue(username);
        await browser.pause(2000);
        await this.LastName.setValue(password);
        await browser.pause(2000);
        await this.ZipCode.setValue(zipcode);
    }

    async clickContinue () {
        await browser.pause(2000);
        await this.Continue.click();
    }

    async clickFinish () {
        await browser.pause(2000);
        await this.Finish.click();
    }

    async clickBackHome () {
        await browser.pause(2000);
        await this.BackHome.click();
    }
}

export default new CartPage();