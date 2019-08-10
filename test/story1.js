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
        let emptyBasket = "Your shopping cart is empty."

        before(async function() {
            driver = await env.builder().build();
            page = new ShoppingCart(driver);
            await page.open();
        });


        it('Fill the basket so we can test the Delete button', async function() {
            await page.addToCart();
            await page.Checkout();
        });


        it('Shopping cart has Delete button', async function() {
            let deletebutton = await driver.findElement(page.locators.deleteButton);
            assert(deletebutton.isDisplayed());
        });

        it('Item is removed from basket/cart, Banner must display ‘Your shopping cart is empty', async function() {
            await page.DeleteItem();
            let cart = await driver.findElement(page.locators.basketMessage);
            let text = await cart.getText();
            assert(text.includes(emptyBasket));
        });




        after(async function() {
            driver.quit();
        });
    });
  });
