import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    get btnBurger () {
        return $('button[id="react-burger-menu-btn"]');
    }

    get btnLogout () {
        return $('a[id="logout_sidebar_link"]');
    }

    async click () {
        await browser.pause(2000);
        await this.btnBurger.click();
        await browser.pause(2000);
        await this.btnLogout.click();
    }
}

export default new LogoutPage();