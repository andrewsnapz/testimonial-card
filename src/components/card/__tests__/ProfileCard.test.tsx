import axe from "axe-core";
import { it, expect } from "vitest";
import ProfileCard from "../ProfileCard.tsx";
import { render, screen } from "@testing-library/react";
import userInfo from "../../../userInfo.ts";

type TestingProps = {
  profileImageSrc: string;
  profileImageAlt: string;
  name: string;
  userTag: string;
  description: string;
};

function renderComponent(props: TestingProps) {
  const { container } = render(<ProfileCard {...props} />);
  return container;
}

it("renders the correct description text that is passed to the 'ProfileDescription' component", () => {
  renderComponent(userInfo);
  const descriptionText = screen.getByText(
    /i've been searching for high-quality abstract images for my design projects, and i'm thrilled to have found this platform\. the variety and depth of creativity are astounding!/i,
  );
  expect(descriptionText).toBeInTheDocument();
});

it("renders image thumbnail with the correct src", () => {
  renderComponent(userInfo);
  const userThumbnail = screen.getByRole("img", {
    name: /sarah dole/i,
  });
  expect(userThumbnail).toHaveAttribute("src", userInfo.profileImageSrc);
  expect(userThumbnail).toHaveProperty("alt", "sarah dole");
});

it("renders correct name and userTag", () => {
  renderComponent(userInfo);
  const userName = screen.getByRole("heading", {
    name: /sarah dole @sarahdole/i,
  });
  const userTag = screen.getByText(/@sarahdole/i);

  expect(userName).toBeInTheDocument();
  expect(userTag).toBeInTheDocument();
});

it("'ProfileDescription' accessability check", async () => {
  const container = renderComponent(userInfo);
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});
