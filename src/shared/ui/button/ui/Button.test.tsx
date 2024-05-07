import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("Should be rendered", () => {
    render(<Button>Click</Button>);

    const button = screen.getByText("Click");

    expect(button).toBeInTheDocument();
    expect(button.getAttribute("type")).toBe("button");
  });

  describe("Button styles", () => {
    test("Should be small and contained by default", () => {
      render(<Button>Click</Button>);

      const button = screen.getByText("Click");

      expect(button).toHaveClass("button button_contained button_small");
    });

    test("Should be large and contained and outlined with additional className", () => {
      render(
        <Button className="stub" size="large" variant="outlined">
          Click
        </Button>
      );

      const button = screen.getByText("Click");

      expect(button).toHaveClass("button button_outlined button_large stub");
    });
  });

  describe("Button event handlers", () => {
    const clickHandler = jest.fn();

    test("Should call a click handler", () => {
      render(<Button onClick={clickHandler}>Click</Button>);

      const button = screen.getByText("Click");
      fireEvent.click(button);

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    test("Should not call a click handler", () => {
      render(
        <Button disabled onClick={clickHandler}>
          Click
        </Button>
      );

      const button = screen.getByText("Click");
      fireEvent.click(button);

      expect(clickHandler).toHaveBeenCalledTimes(0);
    });
  });
});
