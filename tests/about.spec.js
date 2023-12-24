import { test, expect } from '@playwright/test'

test('Page loads successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/about'); // Update the URL as needed
    const title = await page.title();
    expect(title).toBe('Your title!'); // Update with your actual site title
});


test('Check for important content', async ({ page }) => {
    await page.goto('http://localhost:3000/about'); // Update the URL as needed

    const heading = await page.textContent('[data-testid="intro"]');
    expect(heading).toBe("Change this text and photo!");
});
