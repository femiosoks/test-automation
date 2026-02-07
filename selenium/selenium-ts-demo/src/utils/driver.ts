import { Builder, Capabilities, WebDriver } from "selenium-webdriver";

export async function buildDriver(): Promise<WebDriver> {
    const driver = await new Builder()
        .forBrowser("chrome")
        .withCapabilities(Capabilities.chrome())
        .build();
    return driver;
}