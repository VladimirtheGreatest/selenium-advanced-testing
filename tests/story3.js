require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const Slider = require('../pages/page3.js')

suite(function(env) {
    describe('As a user when searching for a summer dress, I want to change the price range to $16 - $20 so that I see the search results change.',
        async function() {
        this.timeout(10000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new Slider(driver);
            await page.open();
        });



        it('Slider changes the price range', async function() {
        });

        it('Search results are updated', async function() {
        });


        it('Items returned are within the price range', async function() {
        });


        after(async function() {
            driver.quit();
        });
    });
  });
