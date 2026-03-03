// tests/test.js
import { By, Key, Builder } from 'selenium-webdriver';
import 'geckodriver';

const pageUnderTest = 'http://127.0.0.1:5500/';

async function testLocal() {
    const searchString = 'EK - Erhvervsakademi København';

    const driver = await new Builder().forBrowser('firefox').build();

    try {
        await driver.get(pageUnderTest);
        await driver.findElement(By.name('txtName')).sendKeys(searchString, Key.RETURN);

        const title = await driver.getTitle();
        console.log('The title of the page is ' + title);
    } finally {
        await driver.quit();
    }
}

async function testGoogle() {
    const searchString = 'Selenium UI Testing';

    const driver = await new Builder().forBrowser('firefox').build();

    try {
        await driver.get('https://www.google.dk');

        await driver.findElement(By.id('L2AGLb')).click();
        await driver.findElement(By.name('q')).sendKeys(searchString, Key.RETURN);

        const title = await driver.getTitle();
        console.log('The title of the page is ' + title);
    } finally {
        await driver.quit();
    }
}

await testLocal();
await testGoogle();