import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProfilesProvider } from "@/context/ProfilesContext";

const providers = ({ children }) => {
  return <ProfilesProvider>{children}</ProfilesProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
export { userEvent, fireEvent };
