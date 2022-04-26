/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarMenu from "./index";

describe("Testing sidebar menu", () => {
  test("Should have element a, text='Overview' and class='active border-right blue'", () => {
    const onClick = jest.fn();
    const { container } = render(
      <Router>
        <SidebarMenu
          className="active border-r-4 border-blue"
          href="/"
          color="black"
          text="Overview"
          onClick={onClick}
        />
      </Router>
    );

    expect(container.querySelector("a")).toBeInTheDocument();
    expect(container.querySelector("a.active")).toBeInTheDocument();
    expect(container.querySelector("a.border-r-4")).toBeInTheDocument();
    expect(container.querySelector("a.border-blue")).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
  });
});
