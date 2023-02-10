import { describe, it } from "vitest";

import { screen, render } from "@/testUtils.jsx";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("renders the navbar", async () => {
    const navbarTitle = screen.getByText(/studfinder/i);
    expect(navbarTitle).toBeInTheDocument();
  });
});
