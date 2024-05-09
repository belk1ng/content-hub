import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ToggleLanguage from "./ToggleLanguage";

import i18nTests from "@/shared/config/i18n/i18n.tests";
import withTranslation from "@/shared/lib/test/withTranslation";

describe("ToggleLanguage", () => {
  test("Should render button", () => {
    render(withTranslation(<ToggleLanguage />));

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should toggle language after click", () => {
    render(withTranslation(<ToggleLanguage />));

    const button = screen.getByRole("button");
    fireEvent.click(button);

    waitFor(() => {
      expect(i18nTests.language).toBe("en");
    });
  });
});
