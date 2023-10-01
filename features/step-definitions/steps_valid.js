import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

// const pages = {
//     login: LoginPage
// }

Given("User is located on the main page of saucedemo website", async () => {
    await LoginPage.open();
});

When("User enter username: {string} and password {string}", async (username, password) => {
    await LoginPage.login(username, password);
});

And("User click “Login” button", async () => {
    await LoginPage.click();
});

Then("User is redirected to the inventory page", async () => {
    await expect(browser).toHaveUrlContaining('inventory');
});