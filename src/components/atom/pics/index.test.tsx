import { render, screen } from "@testing-library/react";
import Image from "./index";
import Avatar from "../../../assets/img/avatar-1.png";

describe("Testing component image", () => {
  test("Should be have src='avatar-1.png' and alt='image'", () => {
    render(<Image url={Avatar} alt="image" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "avatar-1.png");
    expect(img).toHaveAttribute("alt", "image");
  });
});
