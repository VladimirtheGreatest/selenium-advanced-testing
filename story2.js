require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const SummerDress = require('../pages/page2.js')


suite(function(env) {
    describe('As a user I want to select the ‘Summer Dresses’ option from the navigation menu, so that I can view an item from the summer collection.',
        async function() {
        this.timeout(10000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new SummerDress(driver);
            await page.open();
        });


                it('On mouse-hover button ‘WOMAN’, sub navigation options will appear', async function() {

                });

                it('Summer items only display inside the search results', async function() {

                });


        after(async function() {
            driver.quit();
        });
    });
});
