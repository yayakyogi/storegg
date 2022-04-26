/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import Text from ".";

describe("Testing font system", () => {
  test("Should have class [font-normal, text-xs, text-black] and render text fontSize 12 regular color black", () => {
    const { container } = render(
      <Text
        type="fs-12"
        weight="regular"
        color="black"
        text="fontSize 12 regular color black"
      />
    );
    expect(container.querySelector("div.font-normal")).toBeInTheDocument();
    expect(container.querySelector("div.text-xs")).toBeInTheDocument();
    expect(container.querySelector("div.text-black")).toBeInTheDocument();
    expect(
      screen.getByText("fontSize 12 regular color black")
    ).toBeInTheDocument();
  });
});
