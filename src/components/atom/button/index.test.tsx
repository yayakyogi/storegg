/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

describe("Testing Component Button", () => {
  // test button primary
  test("Button primary should be have background color purple", () => {
    const { container } = render(
      <Button
        type="primary"
        className="px-10 py-5"
        onClickAction={() => console.log("Klik")}
      >
        Button Primary
      </Button>
    );
    expect(container.querySelector("button.bg-purple")).toBeInTheDocument();
  });

  // test button secondary
  test("Button secondary should be have background color gray", () => {
    const { container } = render(
      <Button
        type="secondary"
        className="px-10 py-5"
        onClickAction={() => console.log("Klik")}
      >
        Button Primary
      </Button>
    );
    expect(container.querySelector("button.bg-gray")).toBeInTheDocument();
  });

  // test button dark
  test("Button dark should be have background color black", () => {
    const { container } = render(
      <Button
        type="dark"
        className="px-10 py-5"
        onClickAction={() => console.log("Klik")}
      >
        Button Primary
      </Button>
    );
    expect(container.querySelector("button.bg-black")).toBeInTheDocument();
  });

  // test button link
  test("Should render <Link> component", () => {
    const { container } = render(
      <Router>
        <Button type="link" href="/page" className="">
          Link
        </Button>
      </Router>
    );
    expect(container.querySelector("a")).toBeInTheDocument();
  });

  // test button loading
  test("Should be have text loading & class animate-spin", () => {
    const { container } = render(<Button type="loading" />);
    expect(container.querySelector("button .animate-spin")).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  // test button submit
  test("Should have attribute type submit and text submit", () => {
    const { container } = render(
      <Button
        type="submit"
        isBlock
        className="px-5 py-3 bg-purple text-white mt-5"
      >
        Submit
      </Button>
    );
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    expect(container.querySelector("button")).toHaveAttribute("type", "submit");
  });
});
