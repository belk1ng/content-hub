import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

import TestProviders from "@/shared/lib/test/test-providers";

describe("Counter", () => {
  test("Should render component with value from provider", () => {
    render(
      <TestProviders initialState={{ counter: { value: 10 } }}>
        <Counter />
      </TestProviders>
    );

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toBe("10");
  });

  test("Should increment counter value after button click", () => {
    render(
      <TestProviders initialState={{ counter: { value: 10 } }}>
        <Counter />
      </TestProviders>
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(incrementButton);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("11");
  });

  test("Should decrement counter value after button click", () => {
    render(
      <TestProviders initialState={{ counter: { value: 0 } }}>
        <Counter />
      </TestProviders>
    );

    const decrementButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(decrementButton);

    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("-1");
  });
});
