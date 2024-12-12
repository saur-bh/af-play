import test from '@lib/BaseTest';
import { writeFile } from 'fs/promises';
// We can use Steps like in Cucmber format as shown below

test(`Verify AFINIYO DE  Login`, { tag: ['@smoke']}, async ({ loginPage,context }) => {
    await test.step(`Navigate to Application`, async () => {
        await loginPage.navigateToURL();
    });
    await test.step(`Login to  application`, async () => {
        await loginPage.loginToApplication();
    });
    await test.step(`Verify the title of the page`, async () => {
        await loginPage.verifyLoginPageTitle();
        const storageState = await context.storageState();
        await writeFile('storageState.json', JSON.stringify(storageState));
    });
    
}); 