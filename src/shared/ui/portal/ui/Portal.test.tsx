import { render, screen, waitFor } from "@testing-library/react";

import Portal from "./Portal";

import { createWrapperAndAppendToBody } from "@/shared/ui/portal/lib";

describe("Portal", () => {
  const text = "test";

  const Content = () => <span>{text}</span>;

  test("Should create a new container and remove it after unmount", async () => {
    const { unmount } = render(
      <Portal containerId="portal">
        <Content />
      </Portal>
    );

    const content = screen.getByText(text);

    void waitFor(() => {
      expect(document.body.firstElementChild.id).toBe("portal");
      expect(content).toBeInTheDocument();

      unmount();
      expect(document.body.childNodes).toHaveLength(0);
    });
  });

  test("Should mount content in existing container", async () => {
    const container = createWrapperAndAppendToBody("portal");
    expect(document.body.firstElementChild.id).toBe("portal");

    const { unmount } = render(
      <Portal containerId="portal">
        <Content />
      </Portal>
    );

    const content = screen.getByText(text);

    void waitFor(() => {
      expect(content).toBeInTheDocument();

      unmount();
      expect(document.body.firstElementChild.id).toBe("portal");
      container.remove();
    });
  });
});
