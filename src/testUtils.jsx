import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const providers = ({ children }) => {
  return children;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
export { userEvent, fireEvent };
