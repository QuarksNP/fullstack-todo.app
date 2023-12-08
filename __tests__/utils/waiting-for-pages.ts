import { WebDriver, until } from "selenium-webdriver";

export const waitingForHomePage = async (driver: WebDriver) => {
    const homePage = await driver.wait(until.urlIs('http://localhost:5173/'))

    return homePage
}

export const waitingForAuthPage = async (driver: WebDriver, endpoint: "sign-up" | "login") => {
    const authPage = await driver.wait(until.urlIs(`http://localhost:5173/authentication/${endpoint}`))

    return authPage
}