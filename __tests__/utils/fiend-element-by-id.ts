import { WebDriver } from "selenium-webdriver";

export const fiendElementById = (driver: WebDriver, id: string) => {
    return driver.findElement({ id })
}