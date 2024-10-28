import axe from "axe-core";
import { it, expect } from "vitest";
import ProfileDescription from "../ProfileDescription.tsx";
import { render, screen } from "@testing-library/react";

type TestingProps = {
  description: string;
};

function renderComponent(props: TestingProps) {
  const { container } = render(<ProfileDescription {...props} />);
  return container;
}

it("renders the correct description text that is passed to the 'ProfileDescription' component", () => {
  renderComponent({ description: "example description text" });
  const descriptionText = screen.getByText(/example description text/i);
  expect(descriptionText).toBeInTheDocument();
});

it("'ProfileDescription' accessability check", async () => {
  const container = renderComponent({ description: "example description text" });
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});
