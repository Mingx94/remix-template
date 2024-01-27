import { render, fireEvent, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { Counter } from "./counter";

test("shows proper heading when rendered", () => {
  render(<Counter name="World" />);
  const heading = screen.getByText("Hello World!");
  expect(heading).toBeInTheDocument();
});

// Note: This is as an async test as we are using `fireEvent`
test("changes button text on click", async () => {
  render(<Counter />);
  const button = screen.getByRole("button");

  await fireEvent.click(button);

  expect(button).toHaveTextContent("1");
});
