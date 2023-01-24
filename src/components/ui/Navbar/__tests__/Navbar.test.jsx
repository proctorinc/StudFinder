import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import { Navbar } from "../Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  })
  it("renders the navbar", async () => {
    const navbarTitle = screen.getByText(/studfinder/i)
    expect(navbarTitle).toBeInTheDocument();
  });
});
