require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://automationpractice.com/index.php";


class ShoppingCart {
  constructor(driver){
    this.driver = driver;
    this.locators = {
      //shopping cart
      deleteButton :By.xpath('//*[@id="product_1_1_0_0"]/td[7]/div/a'),
      basketMessage : By.css('#center_column > p'),
      addToCart : By.xpath('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]'),
      Checkout : By.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'),
      //navigation
      WomanNav: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/a'),
      SubNav: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/ul'),
      SummerDressesLink: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/ul/li[2]/ul/li[3]/a'),
      SummerMenu: By.css('#center_column > h1 > span.cat-name'),
      SummerMenu2: By.css('#columns > div.breadcrumb.clearfix > span:nth-child(6)'),
      //slider
      Slider: By.xpath('//*[@id="layered_price_slider"]/div'),
      DropSlider: By.xpath('//*[@id="layered_price_slider"]/a[2]'),
      PriceRange: By.css('#layered_price_range'),
      ProductOutsideTheRange: By.xpath('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[1]/span[1]'),
      Loader: By.xpath('//*[@id="center_column"]/ul/p/img'),
      ChangingPrice: By.xpath('//*[@id="layered_price_slider"]/div'),
      //form
      SignIn: By.css('#header > div.nav > div > div > nav > div.header_user_info > a'),
      ErrorForm: By.id('create_account_error'),
      ErrorFormInput: By.css('.alert'),
      EmailInput: By.id('email_create'),
      CreateAccount: By.css('#create-account_form > div > div.submit'),
      FirstName : By.id('customer_firstname'),
      LastName : By.id('customer_lastname'),
      Password : By.id('passwd'),
      Address : By.id('address1'),
      City : By.id('city'),
      State: By.css('#id_state > option:nth-child(6)'),
      Postcode: By.id('postcode'),
      Country: By.id('id_country'),
      Phone: By.id('phone_mobile'),
      Alias: By.id('alias'),
      RegisterForm: By.id('submitAccount'),
      InfoAccount: By.css('#center_column > p'),
      AccountName: By.css('#header > div.nav > div > div > nav > div:nth-child(1) > a > span'),
      //map
      OurStore:By.css('#block_various_links_footer > ul > li:nth-child(4) > a'),
      Map: By.css('#map > div > div > div:nth-child(1)'),
      DismissButton: By.xpath('//*[@id="map"]/div[2]/table/tr/td[2]/button'),
      DragMapHere: By.css('#footer > div > section.bottom-footer.col-xs-12 > div > a'),
      ZoomOut: By.xpath('//*[@id="map"]/div/div/div[8]/div[1]/div/button[2]')
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
      //await actions.moveToElement(womanNav).perform();  this function doesnt work on my pc for mysterious reasons :(
      await actions.move({duration:2000,origin:womanNav,x:0,y:0}).perform();
      await this.driver.sleep(2000);
  }
  async dragDrop() {
      let draggable = await this.driver.findElement(this.locators.Slider);
      let dropSlider = await this.driver.findElement(this.locators.DropSlider);
      const actions = await this.driver.actions({bridge: true});
      //await actions.move({duration:2000,origin:draggable,x:0,y:0}).perform();
      let position = await this.driver.executeScript("arguments[0].setAttribute('style', 'left: 25%;')",dropSlider);
      let position2 = await this.driver.executeScript("arguments[0].setAttribute('style', 'left: 0%; width:25%;')",draggable);
      //await actions.dragAndDrop(draggable, 17, 17).perform(); The pixels values change with screen resolution and browser size. This method is hence not reliable and not widely used.
      await this.driver.sleep(3000);
  }
  async CreateAccount(input) {
    await this.driver.findElement(this.locators.EmailInput).click();
    await this.driver.findElement(this.locators.EmailInput).sendKeys(input);
    await this.driver.findElement(this.locators.CreateAccount).click();
    await this.driver.sleep(2000);
  }
  async RegistrationForm(firstname, lastname, password, address, city, postcode, phone) {
    await this.driver.findElement(this.locators.FirstName).click();
    await this.driver.findElement(this.locators.FirstName).sendKeys(firstname);
    await this.driver.findElement(this.locators.LastName).click();
    await this.driver.findElement(this.locators.LastName).sendKeys(lastname);
    await this.driver.findElement(this.locators.Password).click();
    await this.driver.findElement(this.locators.Password).sendKeys(password);
    await this.driver.findElement(this.locators.Address).click();
    await this.driver.findElement(this.locators.Address).sendKeys(address);
    await this.driver.findElement(this.locators.City).click();
    await this.driver.findElement(this.locators.City).sendKeys(city);
    await this.driver.findElement(this.locators.State).click();
    await this.driver.findElement(this.locators.Postcode).click();
    await this.driver.findElement(this.locators.Postcode).sendKeys(postcode);
    await this.driver.findElement(this.locators.Phone).click();
    await this.driver.findElement(this.locators.Phone).sendKeys(phone);
    await this.driver.findElement(this.locators.RegisterForm).click();
  }
  async SignIn() {
      await this.driver.findElement(this.locators.SignIn).click();
  }
  async ScrollMap() {
      await this.driver.findElement(this.locators.DismissButton).click();
      await this.driver.sleep(1000);
      await this.driver.findElement(this.locators.ZoomOut).click();
      await this.driver.sleep(1000);
      await this.driver.findElement(this.locators.ZoomOut).click();
      await this.driver.sleep(1000);
      let dragMap = await this.driver.findElement(this.locators.Map);
      await this.driver.actions().move({duration:500,origin:dragMap,x:100,y:-200}).perform();
      await this.driver.actions().doubleClick().perform();
      await this.driver.actions().move({duration:500,origin:dragMap,x:0,y:-200}).perform();
      await this.driver.actions().doubleClick().perform();
      await this.driver.actions().move({duration:500,origin:dragMap,x:-100,y:0}).perform();
      await this.driver.actions().doubleClick().perform();
      await this.driver.actions().move({duration:500,origin:dragMap,x:-100,y:-50}).perform();
      await this.driver.actions().doubleClick().perform();
      await this.driver.sleep(1000);



      //This alternative click and hold the mouse on the map and press up arrow key, unfortunately clickAndHold function doesnt work for me :(
      //await actions.move({duration:2000,origin:dragMap,x:0,y:0}).perform();
    //  await this.driver.actions().clickAndHold().perform();
      //await this.driver.actions().keyDown(Key.UP).perform();  (press hold as many times as possible to get into West Palm Beach)

      //another alternative with the control+mousewheelbutton, unfortunately cant find mousewheel method
      //await this.driver.actions().keyDown(Key.CONTROL).perform();
      //await this.driver.(mousewheel method or action)
  }

}



module.exports = ShoppingCart;
