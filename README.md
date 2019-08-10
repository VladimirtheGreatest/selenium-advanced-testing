# selenium-advanced-testing
This technical task is designed to test my knowledge and approach to a real-life project scenario.

<img src="https://flood.io/wp-content/uploads/2015/05/selenium-logo-DB9103D7CF-seeklogo.com_.png" alt="">


I used selenium-webdriver and Mocha. Due to my horrible internet connection there are pretty big timeouts and I also used many driver.sleep methods just to make sure everything works correctly even with lags. Plus for some mysterious reason I was not able to install chrome-driver globally, instead I installed it locally that is why I use require('chromedriver');


This is the report. 

As a user if there is an item already inside my basket, I want to be able to delete the item
from the basket page so that I can see the basket is empty. Passed

As a user I want to select the ‘Summer Dresses’ option from the navigation menu, so
that I can view an item from the summer collection. Passed

As a user when searching for a summer dress, I want to change the price range to $16 -
$20 so that I see the search results change. Failed
User is able to change the price range of the slider however, the content is not loading properly and therefore IT FAILS. There is an infinite loading screen, search results are not updated, needs to be fixed.

As a user I want to create a new account so that I can start buying items using my
personal account. Passed

As a user when browsing the ‘Our stores’ page, I want to drag the map to see a store
from West Palm Beach, so that I can take a screenshot for future reference. Passed
