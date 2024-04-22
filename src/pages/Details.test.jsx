import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { describe, expect, test } from "vitest";

describe("Details page", () => {
  test("renders the Details page with the correct content", async () => {
    render(
      <MemoryRouter initialEntries={["/details/mercury"]}>
        <Routes>
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("mercury")).toBeInTheDocument();
      expect(
        screen.getByText(
          "Mercury is the smallest planet in our solar system and is known for its short years, long days, extreme temperatures, and weird sunsets. Mercury is the smallest planet in our solar system and is known for its short years, long days, extreme temperatures, and weird sunsets. It orbits the Sun at a distance of about 36 million miles (58 million kilometers) and has a diameter of about 4,880 kilometers."
        )
      ).toBeInTheDocument();
    });
  });
});
