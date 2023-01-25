import { describe, it } from "vitest";

import { screen, render } from "@/testUtils.jsx";
import { mockProfiles } from "@/__mocks__/profiles";

import Profile from "../Profile";

describe("Profile Rating Page", () => {
  beforeEach(() => {
    render(<Profile profile={mockProfiles[0]} />);

  })
  it("renders the user profile", () => {
    const profileImage = screen.getByRole("img", {
      name: /profile-image/i
    })
    const profileName = screen.getByText(/name: /i)
    const profileAge = screen.getByText(/age: /i)
    const profileOccupation = screen.getByText(/occupation: /i)
    const profileDistance = screen.getByText(/miles away/i)

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Plumber");
    expect(profileName).toHaveTextContent("John Smith");
    expect(profileAge).toHaveTextContent("52");
    expect(profileDistance).toHaveTextContent("5");
  });
});
