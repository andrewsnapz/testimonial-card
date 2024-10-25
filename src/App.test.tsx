import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App.tsx";

function renderComponent() {
  const { container } = render(<App />);
  return container;
}

it("renders App sucessfully", () => {
  renderComponent();
});
