import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import App from "./App";

describe("App", () => {
  it("renders the app", async () => {
    render(<App />);

    const helloWorldText = screen.getByText(/hello world/i)

    expect(helloWorldText).toBeInTheDocument()
  });
});
