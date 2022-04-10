const { Given, When, Then,  Before, After } = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const { clickElement } = require('../../lib/commands');
const { daySelector, timeSelector, chairSelector, chosenChairSelector } = require('../../lib/selectors')



Before(async function () {
    const browser = await puppeteer.launch({ headless:false, slowMo:50 });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async function () {
    if (this.browser) { 
        await this.browser.close();
    }
});

   Given('user is on {string} page', async function (string) {
       return await this.page.goto(`http://qamid.tmweb.ru/${string}`);
    });

    When('user clicks on date', async function () {
       return await clickElement(this.page, daySelector);
    });
         
    When('user clicks on time', async function () {
        return await clickElement(this.page, timeSelector);
    });

    Then('the user is redirected to a chair choosing page', async function () {
        return await this.page.goto("http://qamid.tmweb.ru/client/hall.php");
    });

    Then('the user can choose a chair', async function () {
        return await clickElement(this.page, chairSelector);
    });

    Then('chosen chair is selected', async function () {
        const actual = chosenChairSelector;
        const expected = "chair_selected"
        expect(actual).contains(expected); 
    });

    