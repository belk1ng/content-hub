import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Nav from "./Nav";

import { navConfig } from "@/shared/config/nav";
import withTranslation from "@/shared/lib/test/withTranslation";

describe("Nav", () => {
  test("Should render nav items", () => {
    render(
      withTranslation(
        <MemoryRouter>
          <Nav links={navConfig} />
        </MemoryRouter>
      )
    );

    expect(screen.getAllByRole("link")).toHaveLength(4);
  });

  test("Should highlight the active nav item", () => {
    render(
      withTranslation(
        <MemoryRouter initialEntries={[navConfig[1].to]}>
          <Nav links={navConfig} />
        </MemoryRouter>
      )
    );

    const navItem = screen.getByRole("link", { name: /articles/ });

    expect(navItem).toHaveClass("nav__item_active");
  });

  test("Should highlight link after navigation", () => {
    render(
      withTranslation(
        <MemoryRouter>
          <Nav links={navConfig} />
        </MemoryRouter>
      )
    );

    const prevActiveLink = screen.getByRole("link", { name: /home/ });
    expect(prevActiveLink).toHaveClass("nav__item_active");
    const newActiveLink = screen.getByRole("link", { name: /profile/ });
    expect(newActiveLink).not.toHaveClass("nav__item_active");

    fireEvent.click(newActiveLink);

    expect(newActiveLink).toHaveClass("nav__item_active");
    expect(prevActiveLink).not.toHaveClass("nav__item_active");
  });
});
