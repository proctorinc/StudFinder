import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import Rating from "../Rating";

describe("Rating Page", () => {
  beforeEach(() => {
    render(<Rating />);
  })
  it("renders the rating page", async () => {
    const ratingText = screen.getByText(/rating/i)
    expect(ratingText).toBeInTheDocument();
  });
});
