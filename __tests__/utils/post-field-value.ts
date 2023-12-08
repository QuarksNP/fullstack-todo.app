import { WebDriver } from "selenium-webdriver";

export const postFieldValue = async (driver: WebDriver, id: string, value: string) => {
    const getField = driver.findElement({ id })

    await getField.sendKeys(value)

    const fieldValue = await getField.getAttribute('value')

    return {
        getField,
        fieldValue
    }

}