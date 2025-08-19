import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import SwitchLocale from "@/components/switch-locale";
import i18nConfig, { type Locale } from "@/configs/i18n-config";

describe("SwitchLocale Component Tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("Initial Render Test", () => {
    render(<SwitchLocale current="en-US" />);
    expect(screen.getByRole("combobox", { name: /Language:/i })).toBeDefined();
  });

  // Switching locales for all possible combinations
  test.each(
    i18nConfig.locales.flatMap((a, _, arr) =>
      arr.filter((b) => b.code !== a.code).map((b) => [a.code, b.code]),
    ),
  )("Switching locale from %s to %s", (currentLocale, newLocale) => {
    render(<SwitchLocale current={currentLocale as Locale["code"]} />);

    const selectEl = screen.getByRole("combobox", { name: /Language:/i });

    // Simulate changing the locale
    (selectEl as HTMLSelectElement).value = newLocale;
    selectEl.dispatchEvent(new Event("change"));

    // Check if the value has changed
    expect((selectEl as HTMLSelectElement).value).toBe(newLocale);
  });
});
