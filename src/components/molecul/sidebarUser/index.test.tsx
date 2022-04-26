import { render, screen } from "@testing-library/react";
import SidebarUser from "./index";
import Avatar from "../../../assets/img/avatar-1.png";

describe("Testing component user info", () => {
  test("Should be render image, name and email", () => {
    render(
      <SidebarUser
        imageUrl={Avatar}
        name="Yayak Yogi"
        email="yayak@gmail.com"
      />
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "avatar-1.png");
    expect(screen.getByText(/Yayak Yogi/i)).toBeInTheDocument();
    expect(screen.getByText(/yayak@gmail.com/i)).toBeInTheDocument();
  });
});
