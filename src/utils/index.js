import { faker } from "@faker-js/faker";

export const generateRandomProfiles = () => {
  const profiles = [];

  for (let i = 0; i < 11; i++) {
    const gender = Math.floor(Math.random() * 2) === 0 ? "Male" : "Female";
    profiles.push({
      image_url: `profile${i + 1}.jpg`,
      name: faker.name.fullName(),
      occupation:
        Math.floor(Math.random() * 2) === 0 ? "Plumber" : "Construction Worker",
      gender: gender,
      age: Math.floor(Math.random() * 40) + 25,
      distance: Math.floor(Math.random() * 500),
    });
  }
  return profiles;
};
