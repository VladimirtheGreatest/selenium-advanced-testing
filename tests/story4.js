require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const ShoppingCart = require('../pages/page1.js')

suite(function(env) {
    describe('As a user I want to create a new account so that I can start buying items using my personal account.',
        async function() {
        this.timeout(20000);
        let driver;
        let page;
        let invalidEmail = "Invalid email address.";
        let invalidEmailExample = "mistakesweremade"
        let generateRandomString = () => Math.random().toString(36).substr(2, 5);
        let randomEmailExample = generateRandomString() + "@gmail.com"
        let myAccountCheck = "Welcome to your account. Here you can manage all of your personal information and orders."
        let firstName = "Jeremy";
        let lastName = "Corbyn";
        let accountName = firstName + " " + lastName;


        before(async function() {
            driver = await env.builder().build();
            page = new ShoppingCart(driver);
            await page.open();
        });

        it('Invalid information will give an error message', async function() {
            await page.SignIn();
            await driver.sleep(2000);  // I use many driver sleep methods in between methods since my internet provider is probably based is Soviet Russia
            await page.CreateAccount(invalidEmailExample);
            let alertMessage = await driver.findElement(page.locators.ErrorForm);
            let text = await alertMessage.getText();
            assert(text.includes(invalidEmail));
        });

        it('Form can only accept valid information', async function() {
          await page.SignIn();
          await driver.sleep(1000);
          await page.CreateAccount(randomEmailExample);
          await driver.sleep(1000);
          await page.RegistrationForm("Jeremy", "Corbyn", generateRandomString(), "Very posh Street", "London", "invalidpostcode", "07979797979");
          let alertMessage = await driver.findElement(page.locators.ErrorFormInput);
          assert(alertMessage.isDisplayed());
        });


        it('Completing registration will take user take to ‘MY ACCOUNT’ page', async function() {
          await page.SignIn();
          await driver.sleep(1000);
          await page.CreateAccount(randomEmailExample);
          await driver.sleep(1000);
          await page.RegistrationForm("Jeremy", "Corbyn", generateRandomString(), "Very posh Street", "London", "12345", "07979797979");
          let isLoggedIn = await driver.findElement(page.locators.InfoAccount);
          let text = await isLoggedIn.getText();
          assert(text.includes(myAccountCheck));
        });

        it('User can see account name on top right', async function() {
          let accountDisplayed = await driver.findElement(page.locators.AccountName);
          let text = await accountDisplayed.getText();
           assert(text.includes(accountName));
        });

        after(async function() {
            driver.quit();
        });
    });
  });

