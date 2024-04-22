import { render } from "@testing-library/react";
import Star from "./Star";
import { expect, test } from "vitest";

test("renders Star component with default className", () => {
  const { container } = render(<Star />);
  const starElement = container.querySelector(".star");
  expect(starElement).toBeInTheDocument();
});
