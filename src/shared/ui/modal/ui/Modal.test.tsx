import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal", () => {
  const Content = () => <p>Lorem ipsum dolor sit amet</p>;

  test("Should be closed", () => {
    render(
      <Modal isOpen={false} onClose={() => {}} portalId="modal">
        <Content />
      </Modal>
    );

    const modal = screen.queryByRole("dialog");

    expect(modal).not.toBeInTheDocument();
  });

  test("Should be opened", async () => {
    render(
      <Modal isOpen={true} onClose={() => {}} portalId="modal">
        <Content />
      </Modal>
    );

    const modal = await screen.findByRole("dialog");
    expect(modal).toHaveClass("modal_open");
  });

  test("Should call onClose after overlay clicked", () => {
    const onClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={onClose} portalId="modal">
        <Content />
      </Modal>
    );

    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);

    waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  test("Should call onClose after Esc down", () => {
    const onClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={onClose} portalId="modal">
        <Content />
      </Modal>
    );

    fireEvent.keyDown(document, {
      key: "Escape",
    });

    waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
