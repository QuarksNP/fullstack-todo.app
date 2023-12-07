import { Builder, By, Key, until } from 'selenium-webdriver'

import { describe, test, expect, afterAll } from 'vitest'

describe("Todo App testing", () => {

    describe("LOGIN", async () => {
        const driver = await new Builder().forBrowser('chrome').build()

        await driver.get('http://localhost:5173/authentication/login')

        afterAll(() => driver.quit())
        test("The username field should not be empty", async () => {
            const username = await driver.findElement(By.id('username'))

            username.sendKeys('testing')

            const usernameValue = username.getAttribute('value')

            expect(usernameValue).not.toBe("")

        })

        test("The password field should not be empty", async () => {
            const password = await driver.findElement(By.id('password'))

            password.sendKeys('testing')

            const passwordValue = password.getAttribute('value')

            expect(passwordValue).not.toBe("")

        })


        test("The submit button is everything is ok, should take us to home page", async () => {
            const submit = await driver.findElement(By.id("submit"))

            submit.click()

            const homePage = await driver.wait(until.urlIs('http://localhost:5173/'))

            expect(homePage.valueOf()).toBeTruthy()

        })


        test("A button should take us to create a new user", async () => {
            await driver.get('http://localhost:5173/authentication/login')

            await driver.wait(until.elementLocated(By.id('btn-redirect')))

            const button = driver.findElement(By.id("btn-redirect"))

            button.click()

            const signUpPage = await driver.wait(until.urlIs("http://localhost:5173/authentication/sign-up"))

            expect(signUpPage.valueOf()).toBeTruthy()

        })
    })

    describe("SIGN-UP", async () => {
        const driver = await new Builder().forBrowser('chrome').build()

        await driver.get('http://localhost:5173/authentication/sign-up')

        afterAll(() => driver.quit())

        test("The fullname field should not be empty", async () => {
            const fullname = await driver.findElement(By.id('fullname'))

            fullname.sendKeys('testing')

            const fullnameValue = fullname.getAttribute('value')

            expect(fullnameValue).not.toBe("")

        })

        test("The username field should not be empty", async () => {
            const username = await driver.findElement(By.id('username'))

            username.sendKeys('testing')

            const usernameValue = username.getAttribute('value')

            expect(usernameValue).not.toBe("")

        })

        test("The password field should not be empty", async () => {
            const password = await driver.findElement(By.id('password'))

            password.sendKeys('testing')

            const passwordValue = password.getAttribute('value')

            expect(passwordValue).not.toBe("")

        })


        test("The submit button is everything is ok, should take us to home page", async () => {
            const submit = await driver.findElement(By.id("submit"))

            submit.click()

            const homePage = await driver.wait(until.urlIs('http://localhost:5173/'))

            expect(homePage.valueOf()).toBeTruthy()

        })


        test("A button should take us to logger", async () => {
            await driver.get('http://localhost:5173/authentication/sign-up')

            await driver.wait(until.elementLocated(By.id('btn-redirect')))

            const button = driver.findElement(By.id("btn-redirect"))

            button.click()

            const signUpPage = await driver.wait(until.urlIs("http://localhost:5173/authentication/login"))

            expect(signUpPage.valueOf()).toBeTruthy()

        })
    })
})










