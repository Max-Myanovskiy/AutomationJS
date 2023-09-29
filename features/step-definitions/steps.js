import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

// const pages = {
//     login: LoginPage
// }

Given("User is located on the main page of saucedemo website", async () => {
    await LoginPage.open();
});

When("User click “Login” button", async () => {
    await LoginPage.click();
});

Then("User should see {string} error message", async (messageExpected) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    const actualErrorMessage = await SecurePage.flashAlert.getText();
    expect(actualErrorMessage).toBe(messageExpected);
});