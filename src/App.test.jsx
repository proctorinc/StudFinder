import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  })
  it("renders the rating page", async () => {
    const ratingText = screen.getByText(/rating/i)
    expect(ratingText).toBeInTheDocument();
  });
});
