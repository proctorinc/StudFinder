import { describe, it } from "vitest";

import { screen, render } from "@/testUtils.jsx";
import { mockProfiles } from "@/__mocks__/profiles";

import { Profile } from ".";

describe("Profile Rating Page", () => {
  beforeEach(() => {
    render(<Profile profile={mockProfiles[0]} />);
  });
  it("renders the user profile", async () => {
    const profileImage = screen.getByRole("img", {
      name: /profile-image/i,
    });
    const profileName = await screen.findByText("John Smith, 52");
    const profileOccupation = await screen.findByText("Plumber");
    const profileDistance = await screen.findByText("5 miles away");

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(profileDistance).toBeInTheDocument();
  });
});
