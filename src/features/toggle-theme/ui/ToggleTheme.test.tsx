import { fireEvent, render, screen } from "@testing-library/react";

import ToggleTheme from "./ToggleTheme";

import { ThemeProvider } from "@/entities/theme";

describe("ToggleTheme", () => {
  test("Should render button", () => {
    render(
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should call toggleTheme method as click handler", () => {
    const value = {
      toggleTheme: jest.fn(),
    };

    render(
      <ThemeProvider value={value}>
        <ToggleTheme />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(value.toggleTheme).toHaveBeenCalledTimes(1);
  });
});
