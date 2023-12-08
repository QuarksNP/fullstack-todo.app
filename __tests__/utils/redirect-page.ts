import { WebDriver, until } from "selenium-webdriver"

export const redirectPage = async (driver: WebDriver, id: string) => {
    await driver.wait(until.elementLocated({ id }))

    const button = driver.findElement({ id: 'btn-redirect' })

    button.click()
}