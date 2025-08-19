import { expect, test } from "@playwright/test";
import dictionaryDe from "@/dictionaries/de-DE.json";
import dictionaryEn from "@/dictionaries/en-US.json";

test.describe("Switching Locale E2E Test", () => {
  test("Show the localized Welcome message", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(dictionaryEn.landing.welcome)).toBeVisible();
  });

  test("Show Welcome message in German", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel(/Language:/i).selectOption({ value: "de-DE" });
    await expect(page.getByText(dictionaryDe.landing.welcome)).toBeVisible();
  });
});
