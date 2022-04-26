/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarPop from "./index";

describe("Testing component user pop", () => {
  test("Should be render image, text and button type link", () => {
    const { container } = render(
      <Router>
        <SidebarPop />
      </Router>
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "icon-2.png");
    expect(screen.getByText(/Top Up &/i)).toBeInTheDocument();
    expect(screen.getByText(/Be The Winner/i)).toBeInTheDocument();
    expect(container.querySelector("a")).toBeInTheDocument();
  });
});
