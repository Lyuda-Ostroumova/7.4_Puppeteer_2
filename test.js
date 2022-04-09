const { Browser } = require("puppeteer");
const {clickElement, getText } = require("./lib/commands");
const { daySelector, timeSelector, chosenTimeSelector, movieTimeSelector, chairSelector, chosenChairSelector, bookBtnSelector, codeBtnSelector, movieNameSelector,
    hallNameSelector, chosenMovieNameSelector, chosenHallNameSelector } = require("./lib/selectors");

let page;
 
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
    page.close();
});
  

describe("Booking a cinema ticket", () => {
    test("Choosing place", async() => {
        await clickElement(page, daySelector);
        const chosenTime = await getText(page, chosenTimeSelector);
        const movieName = await getText(page, movieNameSelector);
        const hallName = await getText(page, hallNameSelector);
        await clickElement(page, timeSelector);
        await clickElement(page, chairSelector);
        const movieTime= await getText(page, movieTimeSelector);
        const chosenChair = chosenChairSelector;
        const chosenMovie = await getText(page, chosenMovieNameSelector);
        const chosenHall = await getText(page, chosenHallNameSelector);
        expect(chosenChair).toContain("chair_selected");
        expect(movieTime).toContain(chosenTime);
        expect(chosenMovie).toEqual(movieName);
        expect(chosenHall).toEqual(hallName);
    });

    test("Booking a ticket", async() => {
        await clickElement(page, daySelector);
        await clickElement(page, timeSelector);
        await clickElement(page, chairSelector);
        await page.$(bookBtnSelector, {disabled: false});
        await clickElement(page, bookBtnSelector);
        await page.goto("http://qamid.tmweb.ru/client/payment.php");
        const codeBtn = codeBtnSelector;
        expect(codeBtn).clickable;
    });

    //sad path

    test("Booking a ticket without booked chair", async() => {
        await clickElement(page, daySelector);
        await clickElement(page, timeSelector);
        await clickElement(page, bookBtnSelector);
        expect(await page.$(bookBtnSelector, {disabled: true}));
    });


})
