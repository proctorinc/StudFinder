import { rest } from "msw";

import { mockProfiles } from "./profiles";

export const handlers = [
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const mockUser = mockProfiles[page - 1];
    const mockResult = {
      results: [
        {
          dob: { age: mockUser.age },
          gender: mockUser.gender,
          name: { first: mockUser.first, last: mockUser.last },
          picture: { large: mockUser.picture },
        },
      ],
    };
    return res(ctx.json(mockResult));
  }),
];
