import { describe, it } from "vitest";

import { screen, render } from "@/testUtils.jsx";
import { mockProfiles } from "@/__mocks__/profiles";
import App from "./App";

vi.mock("@/utils", () => ({
  ...vi.importActual("@/utils"),
  generateRandomProfiles: () => mockProfiles,
}));

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
    const profileName = screen.getByText(/name: /i)
    const profileAge = screen.getByText(/age: /i)
    const profileOccupation = screen.getByText(/occupation: /i)
    const profileDistance = screen.getByText(/miles away/i)
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
