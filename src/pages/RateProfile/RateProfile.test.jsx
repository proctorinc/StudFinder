import { describe, it } from "vitest";

import { screen, render, fireEvent, userEvent } from "@/testUtils.jsx";
import { mockProfiles } from "@/__mocks__/profiles";
import RateProfiles from "./RateProfile";

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
    const ratingValue = screen.getByRole("heading", {
      name: 3
    })

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Plumber");
    expect(profileName).toHaveTextContent("John Smith");
    expect(profileAge).toHaveTextContent("52");
    expect(profileDistance).toHaveTextContent("5");
    expect(ratingInput).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
    expect(ratingValue).toHaveTextContent("3");
  });

  it("Renders changed rating", () => {
    const ratingInput = screen.getByRole("slider");
    
    fireEvent.change(ratingInput, { target: { value: 5 } });

    const ratingValue = screen.getByRole("heading", {
      name: 5
    })

    expect(ratingValue).toHaveTextContent("5");
    expect(ratingInput).toHaveValue("5");
  })

  it("cannot change rating below zero", () => {
    const ratingInput = screen.getByRole("slider");
    
    fireEvent.change(ratingInput, { target: { value: -3 } });
    const ratingValue = screen.getByRole("heading", {
      name: 1
    })
    
    expect(ratingValue).toHaveTextContent("1");
    expect(ratingInput).toHaveValue("1");
  })

  it("cannot change rating above 5", () => {
    const ratingInput = screen.getByRole("slider");
    
    fireEvent.change(ratingInput, { target: { value: 10 } });
    const ratingValue = screen.getByRole("heading", {
      name: 5
    })
    
    expect(ratingValue).toHaveTextContent("5");
    expect(ratingInput).toHaveValue("5");
  })

  it("changes the profile and resets rating after clicking the rate button", async () => {
    const user = userEvent.setup()
    const ratingInput = await screen.findByRole("slider")
    const rateButton = await screen.findByRole("button", {
      name: /rate!/i
    })
    
    fireEvent.change(ratingInput, { target: { value: 5 } });
    await user.click(rateButton);

    const ratingValue = screen.getByRole("heading", {
      name: 3
    })
    const profileImage = await screen.findByRole("img", {
      name: /profile-image/i
    })
    const profileName = await screen.findByText(/name: /i)
    const profileAge = await screen.findByText(/age: /i)
    const profileOccupation = await screen.findByText(/occupation: /i)
    const profileDistance = await screen.findByText(/miles away/i)
    const ratingInputModified = await screen.findByRole("slider")

    expect(ratingValue).toHaveTextContent("3");
    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Construction Worker");
    expect(profileName).toHaveTextContent("Jane Doe");
    expect(profileAge).toHaveTextContent("35");
    expect(profileDistance).toHaveTextContent("37");
    expect(ratingInputModified).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
  })
});
