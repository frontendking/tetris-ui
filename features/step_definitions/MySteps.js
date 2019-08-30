import {Given, Then, When} from 'cucumber'
import { By, until, Key } from 'selenium-webdriver'

Given(/^I am on the Google search page$/, async function () {
    await this.driver.get('http://www.google.com/ncr');
    return true
});

When(/^I search for "([^"]*)"$/, async function (string) {
    await this.driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    return true
});

Then(/^the page title should start with "([^"]*)"$/, async function (string) {
    await this.driver.wait(until.titleIs('webdriver - Google Search'), 3000);
    return true
});