import { render, screen } from "@testing-library/react";
import ProfileUserDetails from "../ProfileUserDetails.tsx";
import { it, expect } from "vitest";
import userInfo from "../../../userInfo.ts";

type TestingProps = {
  profileImageSrc: string;
  profileImageAlt: string;
  name: string;
  userTag: string;
};

function renderComponent(props: TestingProps) {
  const { container } = render(<ProfileUserDetails {...props} />);
  return container;
}

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
