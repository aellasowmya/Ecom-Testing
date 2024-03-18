const { By, Builder, until } = require('selenium-webdriver');
const assert = require("assert");
const { Given, When, Then } = require('@cucumber/cucumber');

let driver;

Given('user should open web link', async function hometest() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://admlucid.com/");
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.manage().window().maximize();
    let title = await driver.getTitle();
    console.log('**********Home page title********' + title);
    let url = await driver.getCurrentUrl();
    console.log("******Current url******" + url);
    await driver.quit();
});

When('user clicks on  reference of selenium', async function automationpage() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://admlucid.com/");
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.manage().window().maximize();
    let title = await driver.getTitle();
    console.log('**********Home page title********' + title);
    let url = await driver.getCurrentUrl();
    console.log("******Current url******" + url);
    await driver.navigate().to('https://admlucid.com/Home/Selenium');
    let message = await driver.findElement(By.xpath('//*[@id="Selenium"]/h1'));
    await driver.wait(until.elementIsEnabled(message), 2000);
    let value = (await message.getText()).trim();
    assert.equal("Selenium Automation Testing", value);
    console.log("**********Page Header***********" + value);
    await driver.quit();
});

Then('user clicks on Selenium WebDrivers tab', async function webdriverpage() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://admlucid.com/");
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.manage().window().maximize();
    let title = await driver.getTitle();
    console.log('**********Home page title********' + title);
    let url = await driver.getCurrentUrl();
    console.log("******Current url******" + url);
    await driver.navigate().to('https://admlucid.com/Home/Selenium');
    let message = await driver.findElement(By.xpath('//*[@id="Selenium"]/h1'));
    await driver.wait(until.elementIsEnabled(message), 2000);
    let value = (await message.getText()).trim();
    assert.equal("Selenium Automation Testing", value);
    console.log("**********Page Header***********" + value);
    const seleniumweb = await driver.findElement(By.xpath('//button[@id="defaultOpen"][2]'));
    await driver.wait(until.elementIsVisible(seleniumweb), 11000);
    await seleniumweb.click();

    // Add a delay or any other waiting mechanism if needed
    //await driver.sleep(4000);

    // Additional actions after clicking on the Selenium WebDrivers tab
    // ...

   await driver.quit();
});