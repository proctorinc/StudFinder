import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  })
  it("renders the navbar", async () => {
    const navbarTitle = screen.getByText(/studfinder/i)
    expect(navbarTitle).toBeInTheDocument();
  });
  it("renders the rating page", async () => {
    const profileImage = screen.getByRole("img", {
      name: /profile-image/i
    })
    const profileName = screen.getByRole("heading", {
      name: /name: /i
    })
    const profileAge = screen.getByRole("heading", {
      name: /age: /i
    })
    const profileOccupation = screen.getByRole("heading", {
      name: /occupation: /i
    })
    const profileDistance = screen.getByRole("heading", {
      name: /miles away/i
    })
    const ratingValue = screen.getByRole("slider")
    const rateButton = screen.getByRole("button", {
      name: /rate!/i
    })
    
    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Plumber");
    expect(profileName).toHaveTextContent("John Smith");
    expect(profileAge).toHaveTextContent("52");
    expect(profileDistance).toHaveTextContent("5");
    expect(ratingValue).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
  });
});
