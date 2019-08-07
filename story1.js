require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const ShoppingCart = require('../pages/page1.js')

suite(function(env) {
    describe('As a user if there is an item already inside my basket, I want to be able to delete the item from the basket page so that I can see the basket is empty.',
        async function() {
        this.timeout(10000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new ShoppingCart(driver);
            await page.open();
        });



        it('Shopping cart has Delete button', async function() {
        });

        it('Item is removed from basket/cart', async function() {
        });


        it('Banner must display ‘Your shopping cart is empty.’', async function() {
        });


        after(async function() {
            driver.quit();
        });
    });
  });
