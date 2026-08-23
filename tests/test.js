const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

async function runTest() {

    let options = new chrome.Options();

    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    try {

        await driver.get("http://localhost:3000");

        await driver.wait(until.elementLocated(By.id("btn")), 10000);

        let button = await driver.findElement(By.id("btn"));

        await button.click();

        console.log("✅ Test Passed");

    } catch (err) {

        console.log(err);

    } finally {

        await driver.quit();

    }
}

runTest();