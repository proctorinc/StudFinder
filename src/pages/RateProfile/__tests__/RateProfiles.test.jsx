import { describe, it } from "vitest";

import { screen, render, fireEvent, userEvent } from "@/testUtils.jsx";
import { mockProfiles } from "@/__mocks__/profiles";
import RateProfiles from "../RateProfiles";

vi.mock("@/utils", () => ({
  ...vi.importActual("@/utils"),
  generateRandomProfiles: () => mockProfiles,
}));

describe("Profile Rating Page", () => {
  beforeEach(() => {
    render(<RateProfiles />);
  })
  it("renders the rating page", () => {
    const profileImage = screen.getByRole("img", {
      name: /profile-image/i
    })
    const profileName = screen.getByText(/name: /i)
    const profileAge = screen.getByText(/age: /i)
    const profileOccupation = screen.getByText(/occupation: /i)
    const profileDistance = screen.getByText(/miles away/i)
    const ratingInput = screen.getByRole("slider")
    const rateButton = screen.getByRole("button", {
      name: /rate!/i
    })

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Plumber");
    expect(profileName).toHaveTextContent("John Smith");
    expect(profileAge).toHaveTextContent("52");
    expect(profileDistance).toHaveTextContent("5");
    expect(ratingInput).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();

  });

  it("Renders changed rating", () => {
    const ratingInput = screen.getByRole("slider");
    
    fireEvent.change(ratingInput, { target: { value: 5 } });

    expect(ratingInput).toHaveValue("5");
  })

  it("cannot change rating below zero", () => {
    const ratingInput = screen.getByRole("slider");
    
    fireEvent.change(ratingInput, { target: { value: -3 } });

    expect(ratingInput).toHaveValue("1");
  })

  it("cannot change rating above 5", () => {
    const ratingInput = screen.getByRole("slider");
    
    fireEvent.change(ratingInput, { target: { value: 10 } });

    expect(ratingInput).toHaveValue("5");
  })

  it("changes the profile and resets rating after clicking the rate button", async () => {
    const user = userEvent.setup()
    const profileImage = screen.getByRole("img", {
      name: /profile-image/i
    })
    const profileName = screen.getByText(/name: /i)
    const profileAge = screen.getByText(/age: /i)
    const profileOccupation = screen.getByText(/occupation: /i)
    const profileDistance = screen.getByText(/miles away/i)
    const ratingInput = screen.getByRole("slider")
    const rateButton = screen.getByRole("button", {
      name: /rate!/i
    })

    fireEvent.change(ratingInput, { target: { value: 5 } });
    await user.click(rateButton);

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Construction Worker");
    expect(profileName).toHaveTextContent("Jane Doe");
    expect(profileAge).toHaveTextContent("35");
    expect(profileDistance).toHaveTextContent("37");
    expect(ratingInput).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
  })
});
