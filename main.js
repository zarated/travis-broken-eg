// var webdriver = require('selenium-webdriver');
// var capabilities = {
//   'browserName' : 'firefox', 
//   'browserstack.user' : '',
//   'browserstack.key' : ''
// }
// var driver = new webdriver.Builder().
//   usingServer('http://hub-cloud.browserstack.com/wd/hub').
//   withCapabilities(capabilities).
//   build();
// driver.get('http://www.google.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.getTitle().then(function(title) {
//   console.log(title);
// });
// driver.quit();
console.log(process.argv[0])
console.log(process.argv[1])