import { Builder, By, Key } from 'selenium-webdriver'

import { afterAll, describe, expect, test } from 'vitest'

describe("Login", async () => {
    const driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:5173/authentication/login')

    afterAll(async() => await driver.quit())

    test("field username shouldn't be empty", async () => {
        const username = await driver.findElement(By.id('username'))

        await username.sendKeys("testing")

        const usernameValue = await username.getAttribute('value')

        expect(usernameValue).not.toBe("")
    })

    test("field password shouldn't be empty", async () => {
        const password = await driver.findElement(By.id('password'))

        await password.sendKeys("testing", Key.RETURN)

        const passwordValue = await password.getAttribute('value')

        expect(passwordValue).not.toBe("")
    })

    test("should be a button that send to the user to create an account", async () => {
        const button = await driver.findElement(By.id('btn-redirect'))

        await button.click()

        const currentURL = await driver.getCurrentUrl()

        expect(currentURL).toBe("http://localhost:5173/authentication/sign-up")
    })
})