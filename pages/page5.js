require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://automationpractice.com/index.php";

class Map{
  constructor(driver){
    this.driver = driver;
    this.locators = {
    }
  }

  open(){
    this.driver.get(url);
  }
}



module.exports = Map;