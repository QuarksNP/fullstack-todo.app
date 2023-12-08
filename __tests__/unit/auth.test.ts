import { Builder, Key } from 'selenium-webdriver'

import { describe, test, expect, afterAll } from 'vitest'

import { postFieldValue, waitingForAuthPage, waitingForHomePage } from '../utils'

import { SIGN_UP_URL, LOGIN_URL, REDIRECT_BUTTON_ID } from "../constants"

import { redirectPage } from '../utils/redirect-page'


describe("AUTHENTICATION TEST", async () => {

    const driver = await new Builder().forBrowser('chrome').build()
    afterAll(() => driver.quit())

    describe("LOGIN", async () => {

        await driver.get(LOGIN_URL)

        test("When all the fields are correct it should do a submit and go to the home page",
            async () => {
                await postFieldValue(driver, 'username', process.env.LOGIN_USERNAME as string)

                const { getField } = await postFieldValue(driver, 'password', process.env.PASSWORD as string)

                await getField.sendKeys(Key.RETURN)

                const homePage = await waitingForHomePage(driver)

                expect(homePage.valueOf()).toBeTruthy()

            })


        test("A button should take us to create a new user", async () => {
            await driver.get(LOGIN_URL)

            await redirectPage(driver, REDIRECT_BUTTON_ID)

            const signUpPage = await waitingForAuthPage(driver, 'sign-up')

            expect(signUpPage.valueOf()).toBeTruthy()

        })
    })

    describe("SIGN-UP", async () => {
        test("When all the fields are correct it should do a submit and go to the home page",
            async () => {

                await postFieldValue(driver, 'fullname', 'testing ')

                await postFieldValue(driver, 'username', 'testing')

                const { getField } = await postFieldValue(driver, 'password', 'testing')

                await getField.sendKeys(Key.RETURN)

                const homePage = await waitingForHomePage(driver)

                expect(homePage.valueOf()).toBeTruthy()
            })

        test("A button should take us to logger", async () => {
            await driver.get(SIGN_UP_URL)

            await redirectPage(driver, REDIRECT_BUTTON_ID)

            const loginPage = await waitingForAuthPage(driver, 'login')

            expect(loginPage.valueOf()).toBeTruthy()

        })
    })
})




