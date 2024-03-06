const{Given,When,Then}=require('@cucumber/cucumber')

Given('Numbers are provided', function () {
    num1 =5;
    num2 =6;
    return console.log("two numbers are " + " " +num1+" , "+num2);
  });


  When('Sum up both numbers here', function () {
    sum =num1+num2;
    return console.log("Addition of numbers performed");
  });

  Then('Display sum of both numbers', function () {
    
    return console.log("sum of both numbers are " + ""+ sum);
  });