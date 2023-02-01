import { describe, it } from "vitest";
import { screen, render } from "@/testUtils.jsx";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the navbar", async () => {
    render(<Navbar />);
    const navbarTitle = screen.getByText(/studfinder/i)
    expect(navbarTitle).toBeInTheDocument();
  });
});
