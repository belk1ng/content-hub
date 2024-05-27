import { fireEvent, render, screen } from "@testing-library/react";

import Nav from "./Nav";

import { navConfig } from "@/shared/config/nav";
import TestProviders from "@/shared/lib/test/test-providers";

describe("Nav", () => {
  test("Should render nav items", () => {
    render(<Nav links={navConfig} />, {
      wrapper: TestProviders,
    });

    expect(screen.getAllByRole("link")).toHaveLength(4);
  });

  test("Should highlight the active nav item", () => {
    render(
      <TestProviders routerProps={{ initialEntries: [navConfig[1].to] }}>
        <Nav links={navConfig} />
      </TestProviders>
    );

    const navItem = screen.getByRole("link", { name: /articles/ });

    expect(navItem).toHaveClass("nav__item_active");
  });

  test("Should highlight link after navigation", () => {
    render(<Nav links={navConfig} />, {
      wrapper: TestProviders,
    });

    const prevActiveLink = screen.getByRole("link", { name: /home/ });
    expect(prevActiveLink).toHaveClass("nav__item_active");
    const newActiveLink = screen.getByRole("link", { name: /profile/ });
    expect(newActiveLink).not.toHaveClass("nav__item_active");

    fireEvent.click(newActiveLink);

    expect(newActiveLink).toHaveClass("nav__item_active");
    expect(prevActiveLink).not.toHaveClass("nav__item_active");
  });
});
