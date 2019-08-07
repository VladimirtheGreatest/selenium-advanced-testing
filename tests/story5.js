require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const Map = require('../pages/page5.js')


suite(function(env) {
    describe('As a user when browsing the ‘Our stores’ page, I want to drag the map to see a store from West Palm Beach, so that I can take a screenshot for future reference.',
        async function() {
        this.timeout(10000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new Map(driver);
            await page.open();
        });


                it('User can scroll through the map', async function() {

                });

                it('West Palm Beach must be within screenshot', async function() {

                });


        after(async function() {
            driver.quit();
        });
    });
});
