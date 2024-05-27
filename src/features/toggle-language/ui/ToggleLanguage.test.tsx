import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ToggleLanguage from "./ToggleLanguage";

import i18nTests from "@/shared/config/i18n/i18n.tests";
import TestProviders from "@/shared/lib/test/test-providers";

describe("ToggleLanguage", () => {
  test("Should render button", () => {
    render(<ToggleLanguage />, { wrapper: TestProviders });

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should toggle language after click", () => {
    render(<ToggleLanguage />, { wrapper: TestProviders });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    waitFor(() => {
      expect(i18nTests.language).toBe("en");
    });
  });
});
