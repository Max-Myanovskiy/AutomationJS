import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[id="user-name"]');
    }

    get inputPassword () {
        return $('input[id="password"]');
    }

    get btnLogin () {
        return $('input[id="login-button"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await browser.pause(2000);
        await this.inputUsername.setValue(username);
        await browser.pause(2000);
        await this.inputPassword.setValue(password);
    }

    async click () {
        await browser.pause(2000);
        await this.btnLogin.click();
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open(``);
    }
}

export default new LoginPage();