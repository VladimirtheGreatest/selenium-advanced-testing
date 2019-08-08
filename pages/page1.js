require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://automationpractice.com/index.php";

class ShoppingCart {
  constructor(driver){
    this.driver = driver;
    this.locators = {
      deleteButton :By.xpath('//*[@id="product_1_1_0_0"]/td[7]/div/a'),
      basketMessage : By.css('#center_column > p'),
      addToCart : By.xpath('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]'),
      Checkout : By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'),
      BasketItems : By.xpath('//*[@id="summary_products_quantity"]'),
      WomanNav: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/a'),
      SubNav: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/ul'),
      SummerDressesLink: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/ul/li[2]/ul/li[3]/a'),
      SummerMenu: By.css('#center_column > h1 > span.cat-name'),
      SummerMenu2: By.css('#columns > div.breadcrumb.clearfix > span:nth-child(6)')

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
  async MouseOver() {
      let womanNav = await this.driver.findElement(this.locators.WomanNav);
      const actions = await this.driver.actions({bridge: true});
      //await this.driver.actions.moveToElement(womanNav).perform();  this function doesnt work on my pc for mysterious reasons :(
      await actions.move({duration:2000,origin:womanNav,x:0,y:0}).perform();
      await this.driver.sleep(2000);
  }

}



module.exports = ShoppingCart;
