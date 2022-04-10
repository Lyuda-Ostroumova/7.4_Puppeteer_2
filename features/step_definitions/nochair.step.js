const { Given, When, Then,  Before, After } = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const { bookBtnSelector } = require('../../lib/selectors');

Then('book button is disabled', async function () {
    await bookBtnSelector, {disabled: true};
});

