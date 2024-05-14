import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("Should render input", () => {
    render(<Input placeholder="Enter password" />);

    const input = screen.getByPlaceholderText("Enter password");

    expect(input).toBeInTheDocument();
  });

  test("Should render input with title", () => {
    render(<Input label="Password" placeholder="Enter password" />);

    const title = screen.getByText("Password");

    expect(title).toBeInTheDocument();
  });

  test("Should render input with helper text", () => {
    render(
      <Input
        helperText="Only numbers"
        label="Age"
        placeholder="18"
        type="number"
      />
    );

    const helper = screen.getByText("Only numbers");

    expect(helper).toBeInTheDocument();
  });

  test("Should call onChange method after input event", () => {
    const onChange = jest.fn();
    render(
      <Input
        helperText="Only numbers"
        label="Age"
        onChange={onChange}
        placeholder="18"
        type="number"
      />
    );

    const input = screen.getByPlaceholderText("18");
    fireEvent.change(input, {
      target: {
        value: "182",
      },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("182");
  });
});
