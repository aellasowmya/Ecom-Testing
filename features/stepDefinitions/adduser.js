const { By, Builder, until } = require('selenium-webdriver');
const assert = require("assert");
const { Given, When, Then } = require('@cucumber/cucumber');

let driver;

Given('user should open qaweb link', async function elimsweb() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://qa.dsigelims.com/login");
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.manage().window().maximize();
    const userName= await driver.findElement(By.xpath('//input[@id="emailID"]'));
    const passWord=await driver.findElement(By.xpath('//input[@id="passwordID"]'));
    const signIn=await driver.findElement(By.xpath('//span[contains(text(),"Sign In")]'));
    await driver.wait(until.elementIsVisible(userName), 11000);
    await userName.sendKeys("Ranorexl2");
    await driver.wait(until.elementIsVisible(passWord), 11000);
    await passWord.sendKeys("tEst@555");
    await driver.wait(until.elementIsVisible(signIn), 11000);
    await signIn.click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    await driver.manage().setTimeouts({ implicit: 1000 });
    const menu=await driver.findElement(By.xpath('//button[@id="menu"]'));
    await driver.wait(until.elementIsVisible(menu), 11000);
    await menu.click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const settings=await driver.findElement(By.xpath('//span[contains(text(),"Settings")]'));
    await driver.wait(until.elementIsVisible(settings), 11000);
    await settings.click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const userTab=await driver.findElement(By.xpath('//span[contains(text(),"Users")]'));
    await userTab.click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const addUser=await driver.findElement(By.xpath('//a[contains(text(),"Add User")]'));
    await addUser.click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const lastName=await driver.findElement(By.xpath('//input[@id="lastname"]')).sendKeys("nilo");
    const firstName=await driver.findElement(By.xpath('//input[@id="firstname"]')).sendKeys("tino");
    const user=await driver.findElement(By.xpath('//input[@id="username"]')).sendKeys("nolj");
    const email=await driver.findElement(By.xpath('//input[@id="email"]')).sendKeys("shiva.singireddy@dsig-inc.com");
    const roles=await driver.findElement(By.xpath('(//span[contains(text(),"Roles")])[3]')).click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const admin=await driver.findElement(By.xpath('//span[contains(text()," Data Administrator , Data Administrator ")]')).click();
    await driver.wait(until.elementIsVisible(add), 11000);
    const add=await driver.findElement(By.xpath('//h3[contains(text(),"Add User")]')).click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const testType=await driver.findElement(By.xpath('(//span[contains(text(),"Test Type")])[3]')).click();
    await driver.manage().setTimeouts({ implicit: 1000 });
    const virology=await driver.findElement(By.xpath('//span[contains(text()," Virology ")]')).click();
  
    



});


