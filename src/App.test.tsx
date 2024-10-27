import { it } from "vitest";
import App from "./App.tsx";
import { render } from "@testing-library/react";

function renderComponent() {
  const { container } = render(<App />);
  return container;
}

it("renders App sucessfully", () => {
  renderComponent();
});
