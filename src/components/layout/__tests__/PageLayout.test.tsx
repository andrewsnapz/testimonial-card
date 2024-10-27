import PageLayout from "../PageLayout.tsx";
import { screen, render } from "@testing-library/react";
import { type ReactNode } from "react";
import { it, describe, expect } from "vitest";

type TestingProps = {
  children: ReactNode;
};

function renderComponent(props: TestingProps) {
  const { container } = render(<PageLayout {...props} />);
  return container;
}

describe("the PageLayout component will render children that's passed to it", () => {
  it("renders a paragraph", () => {
    renderComponent({ children: <p>hello world!</p> });
    const helloWorldText = screen.getByText(/hello world!/i);
    expect(helloWorldText).toBeInTheDocument();
  });

  it("renders a section", () => {
    renderComponent({ children: <section data-testid="section"></section> });
    const sectionChild = screen.getByTestId("section");
    expect(sectionChild).toBeInTheDocument();
  });
});
