require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const ShoppingCart = require('../pages/page1.js')

suite(function(env) {
    describe('As a user when searching for a summer dress, I want to change the price range to $16 - $20 so that I see the search results change.',
        async function() {
        this.timeout(20000);
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new ShoppingCart(driver);
            await page.open();
        });



        it('Slider changes the price range', async function() {
          await page.MouseOver();
          await driver.findElement(page.locators.SummerDressesLink).click();
          await driver.findElement(page.locators.ChangingPrice).click();
          let changingPriceRange = await driver.findElement(page.locators.PriceRange);
          var text = await changingPriceRange.getText();
          console.log(text);  //using slider should change the price range to "24-32"
          var initialPrice = "$16.00 - $32.00";
          assert(text !== initialPrice);
        });

        it('Items returned are within the price range, search results are updated ', async function() {
          await page.MouseOver();
          await driver.findElement(page.locators.SummerDressesLink).click();
          await driver.findElement(page.locators.DropSlider).click();
          await page.dragDrop();
          let priceRange = await driver.findElement(page.locators.ProductOutsideTheRange);
          var text = await priceRange.getText();
          var sliceCurrencySign = await text.slice(1,5)
          var value = await parseFloat(sliceCurrencySign)
          assert(value <= 20 && value >= 16);  //this test will fail since items are not loading properly therefore no search results are updated
            
            //this is is a possible playaround considering search options would be loading properly
            //let searchResults = await driver.findElements(page.locators.ContentPrice);      //this will find elements with our search results
            //await searchResults.forEach(async function(element) {
               // try {                                                        //we will loop through the array and slice the string we dont need
                //let text = await element.getText();
               // let sliced = await text.slice(1,6);                      // then we will convert it into float so we can find out if our search results are within the price range
                //let value = await parseFloat(sliced)
               // updatedResults = await value <= 20 && value >= 16 && value !== NaN ? true : false;  //checking if everything displayed is within the range and not undefined
                //assert(updatedResults !== false) //if returned search option is within the range it should return true
               // }
                //catch {
                //  console.log('items not displayed withing the range');
               // }
            
        
        });





        after(async function() {
            driver.quit();
        });
    });
  });
