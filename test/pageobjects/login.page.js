import { $ } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('input[type="email"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnLogin () {
        return $('button[type="submit"]');
    }

    get btnClick () {
        return $('[href="https://courses.ultimateqa.com/users/sign_in"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        // await browser.pause(2000);
        await this.inputEmail.setValue(email);
        // await browser.pause(2000);
        await this.inputPassword.setValue(password);
    }

    async click () {
        // await browser.pause(2000);
        await this.btnLogin.click();
    }

    async click2 () {
        // await browser.pause(2000);
        await this.btnClick.click();
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open(``);
    }
}

export default new LoginPage();