const{By, Builder, WebElementCondition, until} = require('selenium-webdriver');
const{sendKeys,click}=require('selenium-webdriver');
const assert = require("assert");
const{Given,When,Then}=require('@cucumber/cucumber')
Given('user should open admlucid website', async function hometest () {
    let driver;
        driver=await new Builder().forBrowser('chrome').build();
        await   driver.get("https://admlucid.com/");
       await driver.manage().setTimeouts({implicit: 500});
        let title = await driver.getTitle();
        console.log('**********Home page title********' + title);
        await driver.manage().setTimeouts({implicit: 500});
        await driver.manage().window().maximize();
        let url =await driver.getCurrentUrl();
        console.log("******Current url******" + url);

});
When('user clicks on  reference of automation test', async function automationpage () {
    let driver;
        driver=await new Builder().forBrowser('chrome').build();
        await   driver.get("https://admlucid.com/");
        await driver.manage().setTimeouts({implicit: 500});
        let title = await driver.getTitle();
        console.log('**********Home page title********' + title);
        await driver.manage().setTimeouts({implicit: 500});
        await driver.manage().window().maximize();
        let url =await driver.getCurrentUrl();
        console.log("******Current url******" + url);
        await driver.navigate().to('https://admlucid.com/Home/Selenium')
        let message= await driver.findElement(By.xpath('//*[@id="Selenium"]/h1'))
        await driver.wait(until.elementIsEnabled(message),2000);
        let value=(await message.getText()).trim();
        assert.equal("Selenium Automation Testing", value);
        console.log("**********Page Header***********" + value);
        await driver.quit();
 });