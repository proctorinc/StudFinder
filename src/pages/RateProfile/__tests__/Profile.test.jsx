import { describe, it } from "vitest";

import { screen, render } from "@/testUtils.jsx";
import { mockProfiles } from "@/__mocks__/profiles";

import Profile from "../Profile";

describe("Profile Rating Page", () => {
  beforeEach(() => {
    render(<Profile user={mockProfiles[0]} />);

  })
  it("renders the user profile", () => {
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

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Plumber");
    expect(profileName).toHaveTextContent("John Smith");
    expect(profileAge).toHaveTextContent("52");
    expect(profileDistance).toHaveTextContent("5");
  });
});
