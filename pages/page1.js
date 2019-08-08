require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://automationpractice.com/index.php";
const url2 = "http://automationpractice.com/index.php?controller=order"

class ShoppingCart {
  constructor(driver){
    this.driver = driver;
    this.locators = {
      deleteButton :By.xpath('//*[@id="product_1_1_0_0"]/td[7]/div/a'),
      basketMessage : By.css('#center_column > p'),
      addToCart : By.xpath('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]'),
      Checkout : By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'),
      BasketItems : By.xpath('//*[@id="summary_products_quantity"]')
    }
  }

  open(){
    this.driver.get(url);
  }
  async addToCart() {
      await this.driver.findElement(this.locators.addToCart).click();
      await this.driver.sleep(2000);
  }
  async Checkout() {
      await this.driver.findElement(this.locators.Checkout).click();
      await this.driver.sleep(2000);
  }
  async DeleteItem() {
      this.driver.findElement(this.locators.deleteButton).click();
      await this.driver.sleep(2000);
  }

}



module.exports = ShoppingCart;
