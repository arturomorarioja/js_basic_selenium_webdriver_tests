const pageUnderTest = 'http://127.0.0.1:5500/';
const {By, Key, Builder} = require('selenium-webdriver');
require('geckodriver');

async function testLocal() {
    const searchString = 'KEA';

    const driver = await new Builder().forBrowser('firefox').build();

    await driver.get(pageUnderTest);

    await driver.findElement(By.name('txtName')).sendKeys(searchString, Key.RETURN);

    const title = await driver.getTitle();
    console.log('The title of the page is ' + title);

    await driver.quit();
}

async function testGoogle() {
    const searchString = 'Selenium UI Testing';

    const driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://www.google.dk');

    await driver.findElement(By.id('L2AGLb')).click();
    await driver.findElement(By.name('q')).sendKeys(searchString, Key.RETURN);

    const title = await driver.getTitle();
    console.log('The title of the page is ' + title);

    await driver.quit();
}

testLocal();
testGoogle();
