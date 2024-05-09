import { fireEvent, render, screen } from "@testing-library/react";

import ReloadPage from "./ReloadPage";

describe("ReloadPage", () => {
  const reload = window.location.reload;

  beforeAll(() => {
    Object.defineProperty(window, "location", {
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    window.location.reload = reload;
  });

  test("Should render button", () => {
    render(<ReloadPage />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should reload page after click", () => {
    render(<ReloadPage />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
