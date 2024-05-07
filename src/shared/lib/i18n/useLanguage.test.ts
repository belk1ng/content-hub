import { act, renderHook } from "@testing-library/react";

import useLanguage from "./useLanguage";

import i18nTests from "@/shared/config/i18n/i18n.tests";

describe("useLanguage", () => {
  beforeEach(() => {
    i18nTests.changeLanguage("ru");
  });

  test("Should toggle language", () => {
    const { result } = renderHook(() => useLanguage());

    act(() => {
      result.current.toggleLanguage();
    });
    expect(i18nTests.language).toBe("en");

    act(() => {
      result.current.toggleLanguage();
    });
    expect(i18nTests.language).toBe("ru");
  });

  test("Should set language by", () => {
    const { result } = renderHook(() => useLanguage());

    act(() => {
      result.current.setLanguage("en");
    });
    expect(i18nTests.language).toBe("en");
  });
});
