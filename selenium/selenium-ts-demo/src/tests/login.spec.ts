import { buildDriver } from "../utils/driver";
import { describe, it } from "mocha";
import { expect } from "chai";
import { By } from "selenium-webdriver";

describe("SauceDemo Login", function() {
    this.timeout(30000); // 30s max

    let driver = null;

    before(async () => {
        driver = await buildDriver();
        await driver.get("https://www.saucedemo.com");
    });

    after(async () => {
        await driver.quit();
    });

    it("should login with valid credentials", async () => {
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        const url = await driver.getCurrentUrl();
        expect(url).to.include("inventory.html");
    });
});
