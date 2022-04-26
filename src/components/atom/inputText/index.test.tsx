import { render, screen } from "@testing-library/react";
import InputText from "./index";

describe("Testing component InputTest", () => {
  test("Should be can show input value", () => {
    const onChange = jest.fn();
    render(
      <InputText
        name="name"
        value="yayak"
        placeholder="Please type here"
        onChange={onChange}
        type="text"
        label="Name"
      />
    );
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByDisplayValue("yayak")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Please type here")).toBeInTheDocument();
  });
});
