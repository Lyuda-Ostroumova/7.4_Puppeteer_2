const { Given, When, Then,  Before, After } = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const { clickElement } = require('../../lib/commands');
const { daySelector, timeSelector, chairSelector, chosenChairSelector, bookBtnSelector, codeBtnSelector } = require('../../lib/selectors')



    When('user chooses a chair', async function () {
        return await clickElement(this.page, chairSelector);
    });

    When('user clicks Book button', async function () {
        return await clickElement(this.page, bookBtnSelector);
    });

    Then('the user is redirected to {string}', async function (string) {
        return await this.page.goto(`http://qamid.tmweb.ru${string}`);
    });

