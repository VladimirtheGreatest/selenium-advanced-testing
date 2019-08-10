require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const ShoppingCart = require('../pages/page1.js');
const fs = require("fs");


suite(function(env) {
    describe('As a user when browsing the ‘Our stores’ page, I want to drag the map to see a store from West Palm Beach, so that I can take a screenshot for future reference.',
        async function() {
        this.timeout(20000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new ShoppingCart(driver);
            await page.open();
        });


                it('User can scroll through the map', async function() {
                    await driver.findElement(page.locators.OurStore).click();
                    await page.ScrollMap();
                });

                it('West Palm Beach must be within screenshot', async function() {
                  driver.takeScreenshot().then((image, err) => {
                    fs.writeFile("WestPalmBeach.png", image, "base64",
                      err => console.error(err));
                  });

                });


        after(async function() {
            //driver.quit();
        });
    });
});
