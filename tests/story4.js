require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const MyAccount = require('../pages/page4.js')

suite(function(env) {
    describe('As a user I want to create a new account so that I can start buying items using my personal account.',
        async function() {
        this.timeout(10000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new MyAccount(driver);
            await page.open();
        });



        it('Form can only accept valid information', async function() {
        });

        it('Invalid information will give an error message', async function() {
        });


        it('• Completing registration will take user take to ‘MY ACCOUNT’ page', async function() {
        });

        it('User can see account name on top right', async function() {
        });



        after(async function() {
            driver.quit();
        });
    });
  });
