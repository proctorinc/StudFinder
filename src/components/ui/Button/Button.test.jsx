import { describe, it } from "vitest";
import { screen, render } from "@/testUtils.jsx";
import { Button } from ".";

describe("Button", () => {
  it("renders the button", async () => {
    render(<Button title="test" />);
    const buttonTitle = screen.getByText("test")
    expect(buttonTitle).toBeInTheDocument();
  });
});
