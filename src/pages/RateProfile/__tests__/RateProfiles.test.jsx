import { describe, it } from "vitest";
import { screen, render, fireEvent, userEvent } from "@/testUtils.jsx";

import RateProfiles from "../RateProfiles";

describe("Profile Rating Page", () => {
  beforeEach(() => {
    render(<RateProfiles />);

  })
  it("renders the rating page", () => {
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

  it("changes the profile after clicking the rate button", async () => {
    const user = userEvent.setup()
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

    await user.click(rateButton);

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveTextContent("Construction Worker");
    expect(profileName).toHaveTextContent("Jane Doe");
    expect(profileAge).toHaveTextContent("35");
    expect(profileDistance).toHaveTextContent("37");
    expect(ratingValue).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
  })
});
