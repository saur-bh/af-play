import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { UiLocators } from '@objects/UiLocators';
import { testConfig } from 'testConfig';
import { writeFile } from 'fs/promises';

let webActions: WebActions;

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly BOOKS_SEARCH_BOX: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.locator(UiLocators.loginPage.txtBox_email);
        this.PASSWORD_EDITBOX = page.locator(UiLocators.loginPage.txtBox_password);
        this.LOGIN_BUTTON = page.locator(UiLocators.loginPage.btn_login);
    }

    async navigateToURL(): Promise<void> {
       
        await this.page.goto("/");
    }

    async clickOnLoginMainButton(): Promise<void> {
        await this.LOGIN_BUTTON.click();
    }

    async loginToApplication(): Promise<void> {
        await this.USERNAME_EDITBOX.fill(testConfig.username);
        await this.PASSWORD_EDITBOX.fill(testConfig.password);
        await this.LOGIN_BUTTON.click();
          // Save the storage state to a file after logging in
    const storageState = await this.context.storageState();
    await writeFile('storageState.json', JSON.stringify(storageState));
    }

    async verifyLoginPageTitle(): Promise<void> {
          await this.page.waitForLoadState('networkidle');
        const title = await this.page.title();
        // Use regex to check if the title matches either "Nutzer" or "Dashboard"
        expect(title).toMatch(/^(Nutzer|Dashboard)$/);
    }
}