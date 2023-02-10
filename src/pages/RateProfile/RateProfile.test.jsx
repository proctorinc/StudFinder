import { describe, it, vi } from "vitest";

import { screen, render, fireEvent } from "@/testUtils.jsx";

import RateProfile from "./RateProfile";

window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));

vi.mock("@/utils", async () => ({
  ...(await vi.importActual("@/utils")),
  getRandomOccupation: () => "Plumber",
  getRandomDistance: () => 55,
}));

describe("Profile Rating Page", () => {
  beforeEach(() => {
    render(<RateProfile />);
  });
  it("renders the rating page", async () => {
    const profileImage = await screen.findByRole("img", {
      name: /profile-image/i,
    });
    const profileName = await screen.findByText("John Smith, 52");
    const profileOccupation = await screen.findByText("Plumber");
    const profileDistance = await screen.findByText("55 miles away");
    const ratingInput = await screen.findByRole("slider");
    const rateButton = await screen.findByRole("button", {
      name: /rate/i,
    });
    const ratingValue = await screen.findByRole("heading", {
      name: 3,
    });

    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(profileDistance).toBeInTheDocument();
    expect(ratingInput).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
    expect(ratingValue).toHaveTextContent("3");
  });

  it("Renders changed rating", async () => {
    const ratingInput = await screen.findByRole("slider");

    fireEvent.change(ratingInput, { target: { value: 5 } });

    const ratingValue = await screen.findByRole("heading", {
      name: 5,
    });

    expect(ratingValue).toHaveTextContent("5");
    expect(ratingInput).toHaveValue("5");
  });

  it("cannot change rating below zero", async () => {
    const ratingInput = await screen.findByRole("slider");

    fireEvent.change(ratingInput, { target: { value: -3 } });
    const ratingValue = await screen.findByRole("heading", {
      name: 1,
    });

    expect(ratingValue).toHaveTextContent("1");
    expect(ratingInput).toHaveValue("1");
  });

  it("cannot change rating above 5", async () => {
    const ratingInput = await screen.findByRole("slider");

    fireEvent.change(ratingInput, { target: { value: 10 } });
    const ratingValue = screen.getByRole("heading", {
      name: 5,
    });

    expect(ratingValue).toHaveTextContent("5");
    expect(ratingInput).toHaveValue("5");
  });

  it("changes the profile and resets rating after clicking the rate button", async () => {
    const ratingInput = await screen.findByRole("slider");
    const rateButton = await screen.findByRole("button", {
      name: /rate/i,
    });

    fireEvent.change(ratingInput, { target: { value: 5 } });
    fireEvent.click(rateButton);

    const ratingValue = await screen.findByRole("heading", {
      name: 3,
    });
    const profileImage = await screen.findByRole("img", {
      name: /profile-image/i,
    });
    const profileName = await screen.findByText("Jane Doe, 35");
    const profileOccupation = await screen.findAllByText("Plumber");
    const profileDistance = await screen.findAllByText("55 miles away");
    const ratingInputModified = await screen.findByRole("slider");

    expect(ratingValue).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
    expect(profileOccupation).toHaveLength(2);
    expect(profileName).toBeInTheDocument();
    expect(profileDistance).toHaveLength(2);
    expect(ratingInputModified).toHaveValue("3");
    expect(rateButton).toBeInTheDocument();
  });
});
