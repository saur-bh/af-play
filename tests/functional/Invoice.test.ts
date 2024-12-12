import test from '@lib/BaseTest';
import { readFile } from 'fs/promises';

test(`Navigate directly to Invoices Page`, { tag: ['@dev'] }, async ({ page, context }) => {
    // Load the storage state from the JSON file
    const storageState = await readFile('storageState.json', 'utf-8');
    await context.addCookies(JSON.parse(storageState).cookies);
    await context.addInitScript(() => {
        const localStorageData = JSON.parse(storageState).origins[0].localStorage;
        for (const item of localStorageData) {
            localStorage.setItem(item.name, item.value);
        }
    });

    // Navigate to the Invoices page
    await page.goto('https://stagqa.billodev.net/app/beta/invoices');
    await page.pause();
    await page.waitForSelector('text=Invoices');

    // Pause the execution to inspect the page
  
});